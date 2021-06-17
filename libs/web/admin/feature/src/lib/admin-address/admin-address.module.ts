import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./admin-address-list/admin-address-list.module').then((m) => m.AdminAddressListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./admin-address-create/admin-address-create.module').then((m) => m.AdminAddressCreateModule),
      },
      {
        path: ':addressId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./admin-address-detail/admin-address-detail.module').then((m) => m.AdminAddressDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
              import('./admin-address-edit/admin-address-edit.module').then((m) => m.AdminAddressEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminAddressModule {}
