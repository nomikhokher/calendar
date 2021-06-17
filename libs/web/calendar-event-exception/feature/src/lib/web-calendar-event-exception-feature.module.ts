import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebCalendarEventExceptionFeatureComponent } from './web-calendar-event-exception-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebCalendarEventExceptionFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebCalendarEventExceptionFeatureComponent],
})
export class WebCalendarEventExceptionFeatureModule {}
