import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from '@sagebionetworks/model-ad/config';
import { HeaderComponent } from '@sagebionetworks/explorers/ui';
import {
  CONFIG_SERVICE_TOKEN,
  GoogleTagManagerComponent,
  createGoogleTagManagerIdProvider,
  isGoogleTagManagerIdSet,
} from '@sagebionetworks/shared/google-tag-manager';
import { footerLinks, headerLinks } from '@sagebionetworks/model-ad/util';
@Component({
  imports: [RouterModule, HeaderComponent, GoogleTagManagerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: CONFIG_SERVICE_TOKEN,
      useFactory: () => inject(ConfigService),
    },
    createGoogleTagManagerIdProvider(),
  ],
})
export class AppComponent {
  configService = inject(ConfigService);

  readonly useGoogleTagManager: boolean;

  headerLinks = headerLinks;
  footerLinks = footerLinks;

  constructor() {
    this.useGoogleTagManager = isGoogleTagManagerIdSet(
      this.configService.config.googleTagManagerId,
    );
  }
}
