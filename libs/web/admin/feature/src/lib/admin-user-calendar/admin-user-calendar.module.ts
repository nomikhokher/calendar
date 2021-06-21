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
          import('./admin-user-calendar-list/admin-user-calendar-list.module').then(
            (m) => m.AdminUserCalendarListModule,
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./admin-user-calendar-create/admin-user-calendar-create.module').then(
            (m) => m.AdminUserCalendarCreateModule,
          ),
      },
      {
        path: ':userCalendarId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./admin-user-calendar-detail/admin-user-calendar-detail.module').then(
                (m) => m.AdminUserCalendarDetailModule,
              ),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./admin-user-calendar-edit/admin-user-calendar-edit.module').then(
                (m) => m.AdminUserCalendarEditModule,
              ),
          },
        ],
      },
    ]),
  ],
})
export class AdminUserCalendarModule {}
