import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminAddressListComponent } from './admin-address-list.component'

@NgModule({
  declarations: [AdminAddressListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminAddressListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminAddressListModule {}
