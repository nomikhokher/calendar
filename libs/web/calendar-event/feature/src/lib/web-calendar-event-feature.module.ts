import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebCalendarEventFeatureComponent } from './web-calendar-event-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebCalendarEventFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebCalendarEventFeatureComponent],
})
export class WebCalendarEventFeatureModule {}
