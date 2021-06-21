import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiSidebarPageModule } from '@calendar/web/ui/sidebar-page'
import { WebAdminFeatureComponent } from './web-admin-feature.component'

@NgModule({
  declarations: [WebAdminFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebAdminFeatureComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
          {
            path: 'settings',
            loadChildren: () => import('./admin-setting/admin-setting.module').then((m) => m.AdminSettingModule),
          },

          {
            path: 'user-calendars',
            loadChildren: () =>
              import('./admin-user-calendar/admin-user-calendar.module').then((m) => m.AdminUserCalendarModule),
          },

          {
            path: 'settings',
            loadChildren: () => import('./admin-setting/admin-setting.module').then((m) => m.AdminSettingModule),
          },

          {
            path: 'calendar-weekdays',
            loadChildren: () =>
              import('./admin-calendar-weekday/admin-calendar-weekday.module').then(
                (m) => m.AdminCalendarWeekdayModule,
              ),
          },

          {
            path: 'calendar-event-exceptions',
            loadChildren: () =>
              import('./admin-calendar-event-exception/admin-calendar-event-exception.module').then(
                (m) => m.AdminCalendarEventExceptionModule,
              ),
          },

          {
            path: 'calendar-events',
            loadChildren: () =>
              import('./admin-calendar-event/admin-calendar-event.module').then((m) => m.AdminCalendarEventModule),
          },

          {
            path: 'calendars',
            loadChildren: () => import('./admin-calendar/admin-calendar.module').then((m) => m.AdminCalendarModule),
          },

          {
            path: 'dashboard',
            loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
          },
          {
            path: 'users',
            loadChildren: () => import('./admin-user/admin-user-feature.module').then((m) => m.AdminUserFeatureModule),
          },
        ],
      },
    ]),
    WebUiSidebarPageModule,
  ],
})
export class WebAdminFeatureModule {}
