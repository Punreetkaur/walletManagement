import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payments.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.html',
  styleUrls: ['./payments.scss','../../app.component.scss']
})
export class PaymentsComponent implements OnInit {
  loggedIn: boolean =false;

  constructor(
    public paymentService: PaymentService,
    private router: Router) { }

  ngOnInit() {
   this.loggedIn=(localStorage.getItem('login') ==='true'?true:false);
if(!this.loggedIn){
  var data = this.paymentService.getAllTransactions()
  localStorage.setItem('data',JSON.stringify(data))
} 
  
  }
  logout(){
    this.loggedIn=false;
    localStorage.setItem("login",'false');
  }
  welcome(){
    this.loggedIn=true;
    localStorage.setItem("login",'true');
  }
  

  
}
