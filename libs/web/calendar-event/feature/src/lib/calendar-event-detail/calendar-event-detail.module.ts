import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { CalendarEventDetailComponent } from './calendar-event-detail.component'

@NgModule({
  declarations: [CalendarEventDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CalendarEventDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class CalendarEventDetailModule {}
