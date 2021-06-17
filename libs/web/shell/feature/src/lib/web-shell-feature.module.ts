import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IsAdminGuard, IsLoggedInGuard, WebAuthDataAccessModule } from '@calendar/web/auth/data-access'
import { WebLayoutComponent } from '@calendar/web/layout'

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
{
        path: 'settings',
        loadChildren: () =>
          import('@calendar/web/setting/feature').then((m) => m.WebSettingFeatureModule)
        },
{
        path: 'user-calendars',
        loadChildren: () =>
          import('@calendar/web/user-calendar/feature').then((m) => m.WebUserCalendarFeatureModule)
        },
{
        path: 'settings',
        loadChildren: () =>
          import('@calendar/web/setting/feature').then((m) => m.WebSettingFeatureModule)
        },
{
        path: 'calendar-weekdays',
        loadChildren: () =>
          import('@calendar/web/calendar-weekday/feature').then((m) => m.WebCalendarWeekdayFeatureModule)
        },
{
        path: 'calendar-event-exceptions',
        loadChildren: () =>
          import('@calendar/web/calendar-event-exception/feature').then((m) => m.WebCalendarEventExceptionFeatureModule)
        },
{
        path: 'calendar-events',
        loadChildren: () =>
          import('@calendar/web/calendar-event/feature').then((m) => m.WebCalendarEventFeatureModule)
        },
{
        path: 'calendars',
        loadChildren: () =>
          import('@calendar/web/calendar/feature').then((m) => m.WebCalendarFeatureModule)
        },
{
        path: 'transactions',
        loadChildren: () =>
          import('@calendar/web/transaction/feature').then((m) => m.WebTransactionFeatureModule)
        },
{
        path: 'investments',
        loadChildren: () =>
          import('@calendar/web/investment/feature').then((m) => m.WebInvestmentFeatureModule)
        },
      {
        path: 'about',
        loadChildren: () => import('@calendar/web/about/feature').then((m) => m.WebAboutFeatureModule),
      },
      {
        path: 'account',
        loadChildren: () => import('@calendar/web/account/feature').then((m) => m.WebAccountFeatureModule),
      },
      {
        path: 'admin',
        canActivate: [IsAdminGuard],
        loadChildren: () => import('@calendar/web/admin/feature').then((m) => m.WebAdminFeatureModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@calendar/web/dashboard/feature').then((m) => m.WebDashboardFeatureModule),
      },
      {
        path: 'not-found',
        loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('@calendar/web/auth/feature').then((m) => m.WebAuthFeatureModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
    WebAuthDataAccessModule,
  ],
})
export class WebShellFeatureModule {}
