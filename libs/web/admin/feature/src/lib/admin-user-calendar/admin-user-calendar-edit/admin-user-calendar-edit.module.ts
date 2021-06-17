import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminUserCalendarEditComponent } from './admin-user-calendar-edit.component'

@NgModule({
  declarations: [AdminUserCalendarEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminUserCalendarEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class AdminUserCalendarEditModule {}
