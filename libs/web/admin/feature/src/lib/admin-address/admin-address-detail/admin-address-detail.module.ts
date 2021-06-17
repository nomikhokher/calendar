import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminAddressDetailComponent } from './admin-address-detail.component'

@NgModule({
  declarations: [AdminAddressDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminAddressDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminAddressDetailModule {}
