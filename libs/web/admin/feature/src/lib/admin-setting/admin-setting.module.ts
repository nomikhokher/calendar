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
          import('./admin-setting-list/admin-setting-list.module').then((m) => m.AdminSettingListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./admin-setting-create/admin-setting-create.module').then((m) => m.AdminSettingCreateModule),
      },
      {
        path: ':settingId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./admin-setting-detail/admin-setting-detail.module').then((m) => m.AdminSettingDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./admin-setting-edit/admin-setting-edit.module').then((m) => m.AdminSettingEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminSettingModule {}
