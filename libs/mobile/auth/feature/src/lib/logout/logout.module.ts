import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { MobileAuthDataAccessModule } from '@calendar/mobile/auth/data-access'
import { MobileUiFormModule } from '@calendar/mobile/ui/form'
import { AuthPageModule } from '@calendar/mobile/auth/ui'
import { LogoutComponent } from './logout.component'

const routes: Routes = [{ path: '', component: LogoutComponent }]

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MobileUiFormModule,
    AuthPageModule,
    MobileAuthDataAccessModule,
  ],
})
export class LogoutModule {}
