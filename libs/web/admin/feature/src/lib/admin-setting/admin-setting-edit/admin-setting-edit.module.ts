import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminSettingEditComponent } from './admin-setting-edit.component'

@NgModule({
  declarations: [AdminSettingEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminSettingEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminSettingEditModule {}
