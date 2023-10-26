﻿using cmonitor.server.client.reports.active;
using cmonitor.server.service;
using cmonitor.server.service.messengers.active;
using cmonitor.server.service.messengers.setting;
using cmonitor.server.service.messengers.sign;
using common.libs;
using common.libs.extends;
using MemoryPack;

namespace cmonitor.server.api.services
{
    public sealed class SettingClientService : IClientService
    {
        private readonly MessengerSender messengerSender;
        private readonly SignCaching signCaching;
        private readonly Config config;

        public SettingClientService(MessengerSender messengerSender, SignCaching signCaching, Config config)
        {
            this.messengerSender = messengerSender;
            this.signCaching = signCaching;
            this.config = config;
        }
        public SettingInfo Get(ClientServiceParamsInfo param)
        {
            return new SettingInfo
            {
                ReportDelay = config.ReportDelay,
                ScreenDelay = config.ScreenDelay,
                ScreenScale = config.ScreenScale,
                SaveSetting = config.SaveSetting
            };
        }

        public bool Set(ClientServiceParamsInfo param)
        {
            SettingInfo settingInfo = param.Content.DeJson<SettingInfo>();
            config.ReportDelay = settingInfo.ReportDelay;
            config.ScreenDelay = settingInfo.ScreenDelay;
            config.ScreenScale = settingInfo.ScreenScale;
            config.SaveSetting = settingInfo.SaveSetting;

            byte[] bytes = MemoryPackSerializer.Serialize(settingInfo);
            foreach (var item in signCaching.Get())
            {
                if (item.Connected)
                {
                    _ = messengerSender.SendOnly(new MessageRequestWrap
                    {
                        Connection = item.Connection,
                        MessengerId = (ushort)SettingMessengerIds.Update,
                        Payload = bytes
                    });
                }
            }
            return true;
        }
    }

}
