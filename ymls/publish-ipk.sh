target=$(cd $(dirname $0); pwd)

rs=('x64' 'arm64' 'arm')

cd src/linker.web 
npm install &&
npm run build &&
cd ../../

for r in ${rs[@]} 
do
    dotnet publish ./src/linker -c release -f net8.0 -o ./public/publish/${r} -r linux-musl-${r}  -p:PublishSingleFile=true  --self-contained true  -p:TrimMode=partial -p:TieredPGO=true  -p:DebugType=none -p:EventSourceSupport=false -p:DebugSymbols=false -p:EnableCompressionInSingleFile=true -p:DebuggerSupport=false -p:EnableUnsafeBinaryFormatterSerialization=false -p:EnableUnsafeUTF7Encoding=false -p:HttpActivityPropagationSupport=false -p:InvariantGlobalization=true  -p:MetadataUpdaterSupport=false  -p:UseSystemResourceKeys=true -p:MetricsSupport=false -p:StackTraceSupport=false -p:XmlResolverIsNetworkingEnabledByDefault=false
    cp -rf public/extends/any/web public/publish/${r}/web
    mkdir -p public/publish/${r}/configs
    mkdir -p public/publish/${r}/logs
    cp -rf src/linker/libmsquic-musl-${r}.so public/publish/${r}/libmsquic.so

    mkdir -p public/publish-ipk/${r}
    cp -rf ipk/* public/publish-ipk/${r}/
    mkdir -p public/publish-ipk/${r}/data/usr/bin/linker
    cp -rf public/publish/${r}/* public/publish-ipk/${r}/data/usr/bin/linker/
    sed -i "s|{version}|{{version}}|g" public/publish-ipk/${r}/control/control
    chmod +x public/publish-ipk/${r}/data/etc/init.d/linker
    chmod +x public/publish-ipk/${r}/control/control
    chmod +x public/publish-ipk/${r}/control/postinst
    chmod +x public/publish-ipk/${r}/control/prerm
done

sed -i "s|{arch}|amd64|g" public/publish-ipk/x64/data/etc/init.d/linker
sed -i "s|{arch}|aarch64|g" public/publish/arm64-ipk/data/etc/init.d/linker
sed -i "s|{arch}|arm|g" public/publish-ipk/arm/data/etc/init.d/linker

for r in ${rs[@]} 
do
    cd public/publish-ipk/${r}
    tar -czvf data.tar.gz -C data .
    tar -czvf control.tar.gz -C control .
    echo "2.0" > debian-binary
    ar r linker-${r}.ipk debian-binary data.tar.gz control.tar.gz
    cd ../../../
done