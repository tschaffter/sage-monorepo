import { Component, Renderer2, inject } from '@angular/core';
import { ConfigService } from '@sagebionetworks/openchallenges/config';
import { FooterComponent } from '@sagebionetworks/openchallenges/ui';
import { getSeoData } from './about-seo-data';
import { SeoService } from '@sagebionetworks/shared/util';

@Component({
  selector: 'openchallenges-about',
  imports: [FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public appVersion: string;
  public dataUpdatedOn: string;
  public privacyPolicyUrl: string;
  public termsOfUseUrl: string;
  public apiDocsUrl: string;

  private readonly configService = inject(ConfigService);
  private seoService = inject(SeoService);
  private renderer2 = inject(Renderer2);

  constructor() {
    this.appVersion = this.configService.config.appVersion;
    this.dataUpdatedOn = this.configService.config.dataUpdatedOn;
    this.privacyPolicyUrl = this.configService.config.privacyPolicyUrl;
    this.termsOfUseUrl = this.configService.config.termsOfUseUrl;
    this.apiDocsUrl = this.configService.config.apiDocsUrl;
    this.seoService.setData(getSeoData(), this.renderer2);
  }
}
