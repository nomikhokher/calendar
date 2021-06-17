import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebCalendarFeatureComponent } from './web-calendar-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebCalendarFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebCalendarFeatureComponent],
})
export class WebCalendarFeatureModule {}
