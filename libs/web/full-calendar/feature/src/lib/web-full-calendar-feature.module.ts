import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'
import { WebUiCalendarModule } from '@calendar/web/ui/calendar'

import { WebFullCalendarFeatureComponent } from './web-full-calendar-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebFullCalendarFeatureComponent }]),
    WebUiPageModule,
    WebUiCalendarModule,
  ],
  declarations: [WebFullCalendarFeatureComponent],
})
export class WebFullCalendarFeatureModule {}
