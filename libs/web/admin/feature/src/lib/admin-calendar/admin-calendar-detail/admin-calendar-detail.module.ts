import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminCalendarDetailComponent } from './admin-calendar-detail.component'

@NgModule({
  declarations: [AdminCalendarDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCalendarDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class AdminCalendarDetailModule {}
