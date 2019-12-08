/**
 * Created by cl-macmini-10 on 19/09/16.
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { TranslateService } from '../../../translate/services/translate.service';
// import { CommonService } from '../../../../services/common.service';
@Component({
    selector: 'control-messages',
    template: `<div  class="error">{{errorMessage }}</div>`,
    styles: [`
        .error{
            color:red;
            font-family: ProximaNova-Regular;
            font-size: 14px;
        }
    `]
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlMessages {
    // errorMessage: string;
    @Input() control: FormControl;
    decimal: number;

    constructor() {
        // this.decimal = this.commonService.loginData ? this.commonService.loginData.decimal_calculation_precision_point : 2;

    }

    config(key, validatorValue) {
        const _config = {
            'required': 'This field is required.',
            'invalidDate': 'Please enter correct date .',
            'invalidCreditCard': 'Please enter a valid credit card number',
            'invalidEmailAddress': 'Please enter a valid email address',
            'invalidPassword': 'Please enter a valid password. Password must be at least 6 characters long, and contain a number',
            'invalidPhoneNumber': 'Please enter a valid phone number',
            'invalidZipCode': 'Please enter a valid ZIP Code',
            'invalidVIN': 'Please enter a valid VIN',
            'invalidWeight': 'Weight value should not exceed 250',
            'invalidCapacity': 'Vehicle Capcity should not exceed 5500',
            'invalidOTP': 'Please enter a valid OTP',
            'pattern': 'Please enter a valid input',
            'validateEmail': `Enter a valid email`,
            'ccNumber': 'Please enter a valid card number',
            'expDate': 'Invalid expiry date',
            'decimalPoint': 'Maximum decimal value is ' + this.decimal

        };
        return _config[key];
    }

    get errorMessage() {
        if (this.control.dirty && this.control.touched) {
            for (const propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName)) {
                    return this.control.errors.label || this.config(propertyName, this.control.errors);
                }
            }
        }
        return '';
    }
}
