import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebCalendarEventComponent } from './web-calendar-event.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [WebCalendarEventComponent],
  exports: [WebCalendarEventComponent ],
})
export class WebCalendarEventModule {}
