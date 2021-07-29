import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebUserCalendarFeatureComponent } from './web-user-calendar-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./user-calendar-list/user-calendar-list.module').then((m) => m.UserCalendarListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./user-calendar-create/user-calendar-create.module').then((m) => m.UserCalendarCreateModule),
      },
      {
        path: ':userCalendarId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./user-calendar-detail/user-calendar-detail.module').then((m) => m.UserCalendarDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./user-calendar-edit/user-calendar-edit.module').then((m) => m.UserCalendarEditModule),
          },
        ],
      },
    ]),
    WebUiPageModule,
  ],

  declarations: [WebUserCalendarFeatureComponent],
})
export class WebUserCalendarFeatureModule {}
