import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminSettingCreateComponent } from './admin-setting-create.component'

@NgModule({
  declarations: [AdminSettingCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminSettingCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminSettingCreateModule {}
