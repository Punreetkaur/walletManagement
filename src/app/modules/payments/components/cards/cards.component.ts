import { Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './../../payments.service'

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ValidationService } from 'src/app/modules/payments/components/validations/validation.service';
declare var $: any;


@Component({
  selector: 'app-cards',
  templateUrl: './cards.html',
  styleUrls: ['./cards.scss','../../../../app.component.scss']
})
export class CardsComponent implements OnInit {
  // @Output() id:EventEmitter<string>=new EventEmitter<string>();
  public paymentForm: FormGroup;
  public cards:any=[]
  selectedCardId: any;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router ,public paymentService: PaymentService) {

    }

  ngOnInit() {
   this.initPaymentForm();
   this.getData()
  }
initPaymentForm(){
  this.paymentForm = this.formBuilder.group({
    'cardNumber': ['', Validators.compose([Validators.required, ValidationService.creditCardValidator])],
    'cardType':['',[Validators.required]],
    'validDate': ['',[Validators.required, ValidationService.dateValidityCheck]],
    'cvv': ['', [Validators.required, Validators.minLength(3),ValidationService.NumberValidator, Validators.maxLength(4)]]
  });
}
cardDetails(){

  if (!this.paymentForm.valid) {
    this.validateAllFormFields(this.paymentForm);
    return;
  }else{
    let cardexpiry= this.paymentForm.value.validDate;
    let cardObj={}
    cardObj['card_number']=this.paymentForm.value.cardNumber;
    cardObj['type']=this.paymentForm.value.cardType;
    cardObj['valid']=this.paymentForm.value.validDate;
    cardObj['cvv']=this.paymentForm.value.cvv;
    cardObj['validity']=true;

    cardObj['id']=Math.floor(Math.random() * 6 + 1);
    cardObj['name']="New Name";
    cardObj['transactions']=[];
    $('#addCardModal').modal('toggle');
    this.cards.push(cardObj);
    localStorage.setItem('data',JSON.stringify(this.cards)) 
    this.getData()
  }
}
getData() {
  this.cards=JSON.parse(localStorage.getItem('data'));
  this.selectedCardId=this.cards[0].id;

}
public validateAllFormFields(form: FormGroup) {
  const keys = Object.keys(form.controls);
  keys.forEach((field: any) => {
    const control = form.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    } else if (control instanceof FormArray) {
      (<FormArray>control).controls.forEach((element: FormGroup) => {
        this.validateAllFormFields(element);
      });
    }
  });
}
getCardInfo(id){
 this.selectedCardId=id;
  this.paymentService.newEvent(id)
  this.paymentService.setCardId(id)
}
}










