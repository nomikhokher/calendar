import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { CalendarDetailComponent } from './calendar-detail.component'

@NgModule({
  declarations: [CalendarDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CalendarDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class CalendarDetailModule {}
