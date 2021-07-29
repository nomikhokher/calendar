import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { UserCalendarEditComponent } from './user-calendar-edit.component'

@NgModule({
  declarations: [UserCalendarEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserCalendarEditComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class UserCalendarEditModule {}
