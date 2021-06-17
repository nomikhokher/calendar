
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminCalendarEventListComponent } from './admin-calendar-event-list.component'

@NgModule({
  declarations: [AdminCalendarEventListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCalendarEventListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminCalendarEventListModule {}
