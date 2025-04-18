import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AppConfig, EMPTY_APP_CONFIG } from './app.config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config: AppConfig = EMPTY_APP_CONFIG;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject('APP_PORT') @Optional() private readonly port: string,
  ) {}

  async loadConfig(): Promise<void> {
    try {
      const browserRoot = this.port ? `http://localhost:${this.port}` : '';
      const appConfig$ = this.http.get<AppConfig>(`${browserRoot}/config/config.json`);
      const config = await lastValueFrom(appConfig$);
      this.config = config;
      this.config.isPlatformServer = isPlatformServer(this.platformId);
      this.config.privacyPolicyUrl =
        'https://sagebionetworks.jira.com/wiki/spaces/OA/pages/2948530178/OpenChallenges+Privacy+Policy';
      this.config.termsOfUseUrl =
        'https://sagebionetworks.jira.com/wiki/spaces/OA/pages/2948333575/OpenChallenges+Terms+of+Use';
    } catch (err) {
      console.error('Unable to load the config file: ', err);
      return await Promise.resolve();
    }
  }
}
