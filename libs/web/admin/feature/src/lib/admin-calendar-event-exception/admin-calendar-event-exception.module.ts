import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./admin-calendar-event-exception-list/admin-calendar-event-exception-list.module').then((m) => m.AdminCalendarEventExceptionListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
        import('./admin-calendar-event-exception-create/admin-calendar-event-exception-create.module').then((m) => m.AdminCalendarEventExceptionCreateModule),
      },
      {
        path: ':calendarEventExceptionId',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('./admin-calendar-event-exception-detail/admin-calendar-event-exception-detail.module').then((m) => m.AdminCalendarEventExceptionDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
            import('./admin-calendar-event-exception-edit/admin-calendar-event-exception-edit.module').then((m) => m.AdminCalendarEventExceptionEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminCalendarEventExceptionModule {}
