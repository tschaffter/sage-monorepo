import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'model-ad-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input({ required: true }) appVersion = '';
  @Input({ required: true }) dataUpdatedOn = '';
  @Input({ required: true }) privacyPolicyUrl = '';
  @Input({ required: true }) termsOfUseUrl = ''; // TODO call synapse api
  @Input({ required: true }) apiDocsUrl = '';
}
