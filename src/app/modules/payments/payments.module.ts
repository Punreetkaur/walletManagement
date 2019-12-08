import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentsComponent } from './payment.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CardsComponent } from './components/cards/cards.component';
import { ControlMessages } from './components/validations/validations';

const paymentRoutes: Routes = [

  {
    path: '',
    component: PaymentsComponent,
  },

];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(aclRoutes),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(paymentRoutes),
  ],
  declarations: [
    PaymentsComponent,
    TransactionsComponent,
    CardsComponent,
    ControlMessages
  ],
  exports:[ControlMessages],
 
})
export class PaymentsModule { }
