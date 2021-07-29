import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { SettingListComponent } from './setting-list.component'

@NgModule({
  declarations: [SettingListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SettingListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class SettingListModule {}
