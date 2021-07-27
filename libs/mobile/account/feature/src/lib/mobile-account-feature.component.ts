import { Component } from '@angular/core'

@Component({
  template: `
    <ui-sidebar-page pageTitle="Account" [links]="links">
      <!-- <router-outlet></router-outlet> -->
    </ui-sidebar-page>
  `,
})
export class MobileAccountFeatureComponent {
  links = [
    { label: 'Profile', path: '/account/profile', icon: '' },
    { label: 'Email', path: '/account/email', icon: '' },
    { label: 'Password', path: '/account/password', icon: '' },
  ]
}
