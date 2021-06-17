
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { AdminUserCalendarListComponent } from './admin-user-calendar-list.component'

@NgModule({
  declarations: [AdminUserCalendarListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminUserCalendarListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class AdminUserCalendarListModule {}
