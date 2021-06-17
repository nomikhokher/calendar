import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebCalendarWeekdayFeatureComponent } from './web-calendar-weekday-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebCalendarWeekdayFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebCalendarWeekdayFeatureComponent],
})
export class WebCalendarWeekdayFeatureModule {}
