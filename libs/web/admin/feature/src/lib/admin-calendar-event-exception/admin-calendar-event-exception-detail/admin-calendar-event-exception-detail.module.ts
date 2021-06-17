
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminCalendarEventExceptionDetailComponent } from './admin-calendar-event-exception-detail.component'

@NgModule({
  declarations: [AdminCalendarEventExceptionDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCalendarEventExceptionDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminCalendarEventExceptionDetailModule {}

