import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminCalendarListComponent } from './admin-calendar-list.component'

@NgModule({
  declarations: [AdminCalendarListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminCalendarListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminCalendarListModule {}
