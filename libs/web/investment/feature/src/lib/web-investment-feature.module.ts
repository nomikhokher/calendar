import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebInvestmentFeatureComponent } from './web-investment-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebInvestmentFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebInvestmentFeatureComponent],
})
export class WebInvestmentFeatureModule {}
