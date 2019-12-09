import { Component, OnInit, ViewChild ,Input} from '@angular/core';

import { PaymentService } from './../../payments.service'
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';
import transaction from '../../../../../../transaction.json';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.html',
  styleUrls: ['./transactions.scss','../../../../app.component.scss']
})
export class TransactionsComponent implements OnInit {
  public data_to_view;
  // @Input ('idTrans') idTrans:Observable <string>
  public transactions :any=[]
  expanded: boolean;
  balance: {};
  constructor(
    public paymentService: PaymentService) {
     
  }

  ngOnInit() {
    this.getData()
    this.paymentService.events$.forEach(event => this.getData());
  }
  getTransactions(){
  }
  getData() {
   var data=this.paymentService.getTransactionById();
   this.balance=data['total'];
   this.transactions=data['transactions']

  }
  expand(id){
    // this.expanded =id;
    this.expanded=!this.expanded;
  }
 
}
