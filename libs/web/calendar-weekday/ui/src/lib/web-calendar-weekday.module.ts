import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebCalendarWeekdayComponent } from './web-calendar-weekday.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [WebCalendarWeekdayComponent],
  exports: [WebCalendarWeekdayComponent ],
})
export class WebCalendarWeekdayModule {}
