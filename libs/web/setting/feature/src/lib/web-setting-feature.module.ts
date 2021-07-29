import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebSettingFeatureComponent } from './web-setting-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./setting-list/setting-list.module').then((m) => m.SettingListModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./setting-create/setting-create.module').then((m) => m.SettingCreateModule),
      },
      {
        path: ':settingId',
        children: [
          {
            path: '',
            loadChildren: () => import('./setting-detail/setting-detail.module').then((m) => m.SettingDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () => import('./setting-edit/setting-edit.module').then((m) => m.SettingEditModule),
          },
        ],
      },
    ]),
  ],
})
export class WebSettingFeatureModule {}
