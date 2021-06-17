import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebUserCalendarFeatureComponent } from './web-user-calendar-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebUserCalendarFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebUserCalendarFeatureComponent],
})
export class WebUserCalendarFeatureModule {}
