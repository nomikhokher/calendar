import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@calendar/web/ui/page'

import { WebSettingFeatureComponent } from './web-setting-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebSettingFeatureComponent }]),
    WebUiPageModule,
  ],
  declarations: [WebSettingFeatureComponent],
})
export class WebSettingFeatureModule {}
