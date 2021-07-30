import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { CalendarEventListComponent } from './calendar-event-list.component'

@NgModule({
  declarations: [CalendarEventListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CalendarEventListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class CalendarEventListModule {}
