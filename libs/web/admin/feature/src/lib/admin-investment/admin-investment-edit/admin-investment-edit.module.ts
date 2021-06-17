import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminInvestmentEditComponent } from './admin-investment-edit.component'

@NgModule({
  declarations: [AdminInvestmentEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminInvestmentEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminInvestmentEditModule {}
