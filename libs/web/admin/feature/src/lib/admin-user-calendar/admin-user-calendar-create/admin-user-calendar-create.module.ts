import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminUserCalendarCreateComponent } from './admin-user-calendar-create.component'

@NgModule({
  declarations: [AdminUserCalendarCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminUserCalendarCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminUserCalendarCreateModule {}
