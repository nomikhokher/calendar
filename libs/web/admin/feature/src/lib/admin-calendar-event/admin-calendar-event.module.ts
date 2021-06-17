import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./admin-calendar-event-list/admin-calendar-event-list.module').then((m) => m.AdminCalendarEventListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
        import('./admin-calendar-event-create/admin-calendar-event-create.module').then((m) => m.AdminCalendarEventCreateModule),
      },
      {
        path: ':calendarEventId',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('./admin-calendar-event-detail/admin-calendar-event-detail.module').then((m) => m.AdminCalendarEventDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
            import('./admin-calendar-event-edit/admin-calendar-event-edit.module').then((m) => m.AdminCalendarEventEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminCalendarEventModule {}
