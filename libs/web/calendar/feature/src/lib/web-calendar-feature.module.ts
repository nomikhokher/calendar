import { NgModule } from '@angular/core'

import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebCalendarFeatureComponent } from './web-calendar-feature.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./calendar-list/calendar-list.module').then((m) => m.CalendarListModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./calendar-create/calendar-create.module').then((m) => m.CalendarCreateModule),
      },
      {
        path: ':calendarId',
        children: [
          {
            path: '',
            loadChildren: () => import('./calendar-detail/calendar-detail.module').then((m) => m.CalendarDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () => import('./calendar-edit/calendar-edit.module').then((m) => m.CalendarEditModule),
          },
        ],
      },
    ]),
    WebUiPageModule,
  ],

  declarations: [WebCalendarFeatureComponent],
})
export class WebCalendarFeatureModule {}
