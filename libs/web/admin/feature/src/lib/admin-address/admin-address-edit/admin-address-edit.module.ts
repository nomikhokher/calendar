import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminAddressEditComponent } from './admin-address-edit.component'

@NgModule({
  declarations: [AdminAddressEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminAddressEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminAddressEditModule {}
