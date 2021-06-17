
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminCalendarEventExceptionListComponent } from './admin-calendar-event-exception-list.component'

@NgModule({
  declarations: [AdminCalendarEventExceptionListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCalendarEventExceptionListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminCalendarEventExceptionListModule {}
