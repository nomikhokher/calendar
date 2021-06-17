
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminUserCalendarDetailComponent } from './admin-user-calendar-detail.component'

@NgModule({
  declarations: [AdminUserCalendarDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminUserCalendarDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminUserCalendarDetailModule {}

