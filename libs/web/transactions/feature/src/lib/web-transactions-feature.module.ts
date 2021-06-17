import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebTransactionsFeatureComponent } from './web-transactions-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebTransactionsFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebTransactionsFeatureComponent],
})
export class WebTransactionsFeatureModule {}
