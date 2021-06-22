import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'
import { WebUiCalendarModule } from '@calendar/web/ui/calendar'

import { WebCalendarFeatureComponent } from './web-calendar-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebCalendarFeatureComponent }]),
    WebUiPageModule,
    WebUiCalendarModule,
  ],
  declarations: [WebCalendarFeatureComponent],
})
export class WebCalendarFeatureModule {}
