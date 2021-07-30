import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { CalendarEditComponent } from './calendar-edit.component'

@NgModule({
  declarations: [CalendarEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CalendarEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class CalendarEditModule {}
