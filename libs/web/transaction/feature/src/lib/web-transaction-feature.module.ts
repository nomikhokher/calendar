import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebTransactionFeatureComponent } from './web-transaction-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebTransactionFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebTransactionFeatureComponent],
})
export class WebTransactionFeatureModule {}
