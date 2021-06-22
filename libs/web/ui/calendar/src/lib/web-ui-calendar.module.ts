import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiCalendarComponent } from './web-ui-calendar.component'
import { FullCalendarModule } from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material'

FullCalendarModule.registerPlugins([dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin])

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
  ],
  declarations: [WebUiCalendarComponent],
  exports: [WebUiCalendarComponent],
})
export class WebUiCalendarModule {}
