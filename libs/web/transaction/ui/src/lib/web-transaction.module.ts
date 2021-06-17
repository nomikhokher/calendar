import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WebTransactionComponent } from './web-transaction.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [WebTransactionComponent],
  exports: [WebTransactionComponent ],
})
export class WebTransactionModule {}
