export interface AppConfig {
  appVersion: string;
  csrApiUrl: string;
  isPlatformServer: boolean;
  ssrApiUrl: string;
  apiDocsUrl: string;
  tagName: string;
  googleTagManagerId: string;
}

export const EMPTY_APP_CONFIG = {} as AppConfig;
