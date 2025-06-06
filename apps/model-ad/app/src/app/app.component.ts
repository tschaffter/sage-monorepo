import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@sagebionetworks/explorers/ui';
import { Dataversion, DataversionService } from '@sagebionetworks/model-ad/api-client-angular';
import { ConfigService } from '@sagebionetworks/model-ad/config';
import { footerLinks, headerLinks } from '@sagebionetworks/model-ad/util';
import {
  CONFIG_SERVICE_TOKEN,
  GoogleTagManagerComponent,
  createGoogleTagManagerIdProvider,
  isGoogleTagManagerIdSet,
} from '@sagebionetworks/shared/google-tag-manager';
@Component({
  imports: [RouterModule, FooterComponent, HeaderComponent, GoogleTagManagerComponent],
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
  dataVersionService = inject(DataversionService);

  readonly useGoogleTagManager: boolean;

  dataVersion = '';

  headerLinks = headerLinks;
  footerLinks = footerLinks;

  constructor() {
    this.useGoogleTagManager = isGoogleTagManagerIdSet(
      this.configService.config.googleTagManagerId,
    );

    this.dataVersionService
      .getDataversion()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (data) => {
          this.dataVersion = this.getDataVersion(data);
        },
        error: (error) => console.error('Error loading data version:', error),
      });
  }

  getDataVersion(dataVersion: Dataversion) {
    return `${dataVersion.data_file}-v${dataVersion.data_version}`;
  }
}
