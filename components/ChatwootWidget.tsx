'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';

/** Chatwoot 支持的语言映射 */
const CHATWOOT_LOCALE_MAP: Record<string, string> = {
  en: 'en',
  zh: 'zh_CN',
};

/** Chatwoot SDK 配置 */
const CHATWOOT_BASE_URL = 'https://app.chatwoot.com';
const CHATWOOT_WEBSITE_TOKEN = 'Eb1yuZiqmyTbbjHucQvCHMSg';

/**
 * Chatwoot 在线客服 widget 组件
 * 根据 URL 路径自动切换 Chatwoot 显示语言（/zh 开头为中文，其余为英文）
 */
export function ChatwootWidget() {
  const pathname = usePathname();
  const currentLang = pathname.startsWith('/zh') ? 'zh' : 'en';
  const chatwootLocale = CHATWOOT_LOCALE_MAP[currentLang] ?? 'en';

  return (
    <>
      {/* 在 SDK 加载前设置 locale */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.chatwootSettings = { position: "right", type: "standard", launcherTitle: "", locale: "${chatwootLocale}" };`,
        }}
      />
      <Script
        id="chatwoot-sdk"
        src={`${CHATWOOT_BASE_URL}/packs/js/sdk.js`}
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-expect-error Chatwoot SDK 全局类型未定义
          window.chatwootSDK?.run({
            websiteToken: CHATWOOT_WEBSITE_TOKEN,
            baseUrl: CHATWOOT_BASE_URL,
          });
        }}
      />
    </>
  );
}
