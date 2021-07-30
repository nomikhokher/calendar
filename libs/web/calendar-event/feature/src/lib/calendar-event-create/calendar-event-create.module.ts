import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { CalendarEventCreateComponent } from './calendar-event-create.component'

@NgModule({
  declarations: [CalendarEventCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CalendarEventCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class CalendarEventCreateModule {}
