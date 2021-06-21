import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminCalendarWeekdayDetailComponent } from './admin-calendar-weekday-detail.component'

@NgModule({
  declarations: [AdminCalendarWeekdayDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCalendarWeekdayDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminCalendarWeekdayDetailModule {}
