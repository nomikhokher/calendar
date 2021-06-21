import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminInvestmentListComponent } from './admin-investment-list.component'

@NgModule({
  declarations: [AdminInvestmentListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminInvestmentListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminInvestmentListModule {}
