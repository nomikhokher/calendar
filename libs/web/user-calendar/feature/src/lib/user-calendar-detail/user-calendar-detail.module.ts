import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { UserCalendarDetailComponent } from './user-calendar-detail.component'

@NgModule({
  declarations: [UserCalendarDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserCalendarDetailComponent }]),
    WebUiPageHeaderModule,
    WebUiButtonModule,
  ],
})
export class UserCalendarDetailModule {}
