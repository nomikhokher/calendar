import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./admin-calendar-weekday-list/admin-calendar-weekday-list.module').then(
            (m) => m.AdminCalendarWeekdayListModule,
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./admin-calendar-weekday-create/admin-calendar-weekday-create.module').then(
            (m) => m.AdminCalendarWeekdayCreateModule,
          ),
      },
      {
        path: ':calendarWeekdayId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./admin-calendar-weekday-detail/admin-calendar-weekday-detail.module').then(
                (m) => m.AdminCalendarWeekdayDetailModule,
              ),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./admin-calendar-weekday-edit/admin-calendar-weekday-edit.module').then(
                (m) => m.AdminCalendarWeekdayEditModule,
              ),
          },
        ],
      },
    ]),
  ],
})
export class AdminCalendarWeekdayModule {}
