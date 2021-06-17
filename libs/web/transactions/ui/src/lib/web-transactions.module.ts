import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebTransactionsComponent } from './web-transactions.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [WebTransactionsComponent],
  exports: [WebTransactionsComponent ],
})
export class WebTransactionsModule {}
