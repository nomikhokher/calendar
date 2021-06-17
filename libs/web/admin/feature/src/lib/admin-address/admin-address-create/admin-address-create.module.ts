import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminAddressCreateComponent } from './admin-address-create.component'

@NgModule({
  declarations: [AdminAddressCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminAddressCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminAddressCreateModule {}
