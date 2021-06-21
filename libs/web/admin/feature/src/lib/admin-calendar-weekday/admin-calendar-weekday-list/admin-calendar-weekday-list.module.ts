import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminCalendarWeekdayListComponent } from './admin-calendar-weekday-list.component'

@NgModule({
  declarations: [AdminCalendarWeekdayListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCalendarWeekdayListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminCalendarWeekdayListModule {}
