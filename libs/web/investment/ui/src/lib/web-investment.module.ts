import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebInvestmentComponent } from './web-investment.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebInvestmentComponent],
  exports: [WebInvestmentComponent],
})
export class WebInvestmentModule {}
