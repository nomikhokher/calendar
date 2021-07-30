import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { CalendarEventEditComponent } from './calendar-event-edit.component'

@NgModule({
  declarations: [CalendarEventEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CalendarEventEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class CalendarEventEditModule {}
