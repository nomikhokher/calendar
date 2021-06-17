
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminInvestmentDetailComponent } from './admin-investment-detail.component'

@NgModule({
  declarations: [AdminInvestmentDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminInvestmentDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminInvestmentDetailModule {}

