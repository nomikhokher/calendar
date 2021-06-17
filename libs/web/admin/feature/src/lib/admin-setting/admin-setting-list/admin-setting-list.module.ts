import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminSettingListComponent } from './admin-setting-list.component'

@NgModule({
  declarations: [AdminSettingListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminSettingListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminSettingListModule {}
