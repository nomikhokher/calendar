import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@calendar/web/ui/button'
import { WebUiFormModule } from '@calendar/web/ui/form'
import { WebUiPageHeaderModule } from '@calendar/web/ui/page-header'

import { UserCalendarCreateComponent } from './user-calendar-create.component'

@NgModule({
  declarations: [UserCalendarCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserCalendarCreateComponent }]),
    WebUiButtonModule,
    WebUiFormModule,
    WebUiPageHeaderModule,
  ],
})
export class UserCalendarCreateModule {}
