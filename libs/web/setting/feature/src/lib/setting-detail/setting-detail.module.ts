import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { SettingDetailComponent } from './setting-detail.component'

@NgModule({
  declarations: [SettingDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SettingDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class SettingDetailModule {}
