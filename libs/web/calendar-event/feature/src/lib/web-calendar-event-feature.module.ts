import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebCalendarEventFeatureComponent } from './web-calendar-event-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./calendar-event-list/calendar-event-list.module').then((m) => m.CalendarEventListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./calendar-event-create/calendar-event-create.module').then((m) => m.CalendarEventCreateModule),
      },
      {
        path: ':calendarEventId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./calendar-event-detail/calendar-event-detail.module').then((m) => m.CalendarEventDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./calendar-event-edit/calendar-event-edit.module').then((m) => m.CalendarEventEditModule),
          },
        ],
      },
    ]),
    WebUiPageModule,
  ],
  declarations: [WebCalendarEventFeatureComponent],
})
export class WebCalendarEventFeatureModule {}
