import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { SettingCreateComponent } from './setting-create.component'

@NgModule({
  declarations: [SettingCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SettingCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class SettingCreateModule {}
