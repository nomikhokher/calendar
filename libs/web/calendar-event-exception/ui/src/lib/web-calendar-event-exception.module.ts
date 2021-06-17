import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebCalendarEventExceptionComponent } from './web-calendar-event-exception.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [WebCalendarEventExceptionComponent],
  exports: [WebCalendarEventExceptionComponent ],
})
export class WebCalendarEventExceptionModule {}
