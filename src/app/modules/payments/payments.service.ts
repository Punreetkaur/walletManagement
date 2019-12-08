import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import transaction from '../../../../transaction.json';
import { Subject } from 'rxjs';

import { Observable } from 'rxjs';
import {
    catchError
} from 'rxjs/operators';

import { environment } from '../../../environments/environment';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        /*'Authorization': 'my-auth-token'*/
    })
};

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    private _subject = new Subject<any>();
    constructor(
        private http: HttpClient,
    ) {

    }

    getAllTransactions() {
        localStorage.setItem('selectedId', transaction[0].id)
        return transaction;
    }
    setCardId(id) {
        transaction.map((item) => {
            if (item.id == id) {
                localStorage.setItem('selectedId', id)
            }
        })
    }
    getTransactionById() {
        var item_to_return = {}
        var id = localStorage.getItem('selectedId')
        if (id && id != null) {
            transaction.map((item) => {
                if (item.id == id) {
                    item_to_return = item
                }
            })
            return item_to_return
        } else {
            return []
        }
    }
    newEvent(event) {
        this._subject.next(event);
    }

    get events$() {
        return this._subject.asObservable();
    }
}

