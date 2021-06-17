import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminSettingDetailComponent } from './admin-setting-detail.component'

@NgModule({
  declarations: [AdminSettingDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminSettingDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminSettingDetailModule {}
