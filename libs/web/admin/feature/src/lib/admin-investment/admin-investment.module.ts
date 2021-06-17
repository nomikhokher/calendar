import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./admin-investment-list/admin-investment-list.module').then((m) => m.AdminInvestmentListModule),
      },
      {
        path: 'create',
        loadChildren: () =>
        import('./admin-investment-create/admin-investment-create.module').then((m) => m.AdminInvestmentCreateModule),
      },
      {
        path: ':investmentId',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('./admin-investment-detail/admin-investment-detail.module').then((m) => m.AdminInvestmentDetailModule),
          },
          {
            path: 'edit',
            loadChildren: () =>
            import('./admin-investment-edit/admin-investment-edit.module').then((m) => m.AdminInvestmentEditModule),
          },
        ],
      },
    ]),
  ],
})
export class AdminInvestmentModule {}
