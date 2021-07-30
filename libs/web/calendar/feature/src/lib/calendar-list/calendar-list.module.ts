import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { CalendarListComponent } from './calendar-list.component'

@NgModule({
  declarations: [CalendarListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CalendarListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class CalendarListModule {}
