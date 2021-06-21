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
          import('./admin-calendar-list/admin-calendar-list.module').then((m) => m.AdminCalendarListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./admin-calendar-create/admin-calendar-create.module').then((m) => m.AdminCalendarCreateModule),
      },
      {
        path: ':calendarId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./admin-calendar-detail/admin-calendar-detail.module').then((m) => m.AdminCalendarDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./admin-calendar-edit/admin-calendar-edit.module').then((m) => m.AdminCalendarEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminCalendarModule {}
