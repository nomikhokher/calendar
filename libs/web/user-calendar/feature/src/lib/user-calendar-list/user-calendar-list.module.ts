import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { UserCalendarListComponent } from './user-calendar-list.component'

@NgModule({
  declarations: [UserCalendarListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserCalendarListComponent }]),
    WebUiPageHeaderModule,
  ],
})
export class UserCalendarListModule {}
