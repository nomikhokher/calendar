import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminInvestmentCreateComponent } from './admin-investment-create.component'

@NgModule({
  declarations: [AdminInvestmentCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminInvestmentCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminInvestmentCreateModule {}
