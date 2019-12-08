import { Injectable, Inject } from '@angular/core';
import { FormGroup, FormControl, FormArray, ValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable()
export class ValidationService {

    public langJson: any;
    public decimal: number;
    constructor( ) {

    }
getValidatorErrorMessage(validatorName: string, validatorValue ?: any) {
  
    const config = {
        'required': 'This field is required.',
        'invalidCreditCard':'Please enter a valid credit card number.',
        'invalidDate':'Please enter correct date .',

        // 'invalidEmailAddress': 'Please enter a valid email address.'],
        // 'invalidPassword': langJson['Please enter a valid password. Password must be at least 6 characters long.'],
        'minlength': 'This field must be 6 characters long.',
        'maxlength': 'This field must be 15 characters long.',
        // 'invalidPhoneNumber': langJson['Please enter a valid phone number.'],
        'invalidNumber': 'Please enter number only.',
        // 'invalidZipCode': langJson['Please enter a valid ZIP Code.'],
        // 'invalidVIN': langJson['Please enter a valid VIN.'],
        // 'invalidWeight': langJson['Weight value should not exceed 250.'],
        // 'invalidCapacity': langJson['Vehicle Capacity should not exceed 5500.'],
        // 'invalidOTP': langJson['Please enter a valid OTP'],
        // 'pattern': langJson['Invalid characters'],
        // 'invalidDecimalPattern': 'Maximum decimal value is ' + this.decimal,
        // 'max': langJson['Max value should be '] + validatorValue.max

    };

    return config[validatorName];
}
static dateValidityCheck(control :any){
    console.log("coming to check")
    if (control.value.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)) {
      
        return null;
    } else {
    console.log("rteurnrnrr2")

        return { 'invalidDate': true };
    }
}

    // tslint:disable-next-line:member-ordering
    static creditCardValidator(control: any) {
        console.log("coming to check")
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      
        return null;
    } else {
    console.log("rteurnrnrr2")

        return { 'invalidCreditCard': true };
    }
}

    // tslint:disable-next-line:member-ordering
    static emailValidator(control: any) {
    // RFC 2822 compliant regex
    if (!control.value) {
        return null;
    }
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) || control.value === '') {
        return null;
    } else {
        return { 'invalidEmailAddress': true };
    }
}

    // tslint:disable-next-line:member-ordering
    static alternateEmailValidator(control: any) {
    // RFC 2822 compliant regex
    if (control.value === '') {
        return null;
    } else if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) || control.value === '') {
        return null;
    } else {
        return { 'invalidEmailAddress': true };
    }
}

    // tslint:disable-next-line:member-ordering
    static passwordValidator(control: any) {
    if (!control.value) {
        return null;
    }
    if (control.value.length > 5) {
        return null;
    } else {
        return { 'invalidPassword': true };
    }
}

    // tslint:disable-next-line:member-ordering
    static phoneNumberValidator(control: any) {
    // US Phone numbers
    if ((control.value.match(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i) && (control.value.length === 10)) || (control.value === '')) {
        return null;
    } else {
        return { 'invalidPhoneNumber': true };
    }
}



    // tslint:disable-next-line:member-ordering
    static NumberValidator(control: any) {
        // Numbers
        if (!control.value) {
            return null;
        }
        if (control.value.match(/^[0-9 ]*$/)) {
            return null;
        } else {
            return { 'invalidPhoneNumber': true };
        }
    }

  // tslint:disable-next-line:member-ordering
    static NumberPureValidator(control: any) {
        // Numbers
        if (!control.value) {
            return null;
        }
        if (control.value.match(/^[0-9 ]*$/)) {
            return null;
        } else {
            return { 'invalidNumber': true };
        }
    }

    // tslint:disable-next-line:member-ordering
    static whiteSpaceValidator(control: any) {
        // Numbers
        if (control.value && !control.value.trim()) {
            return { 'pattern': true };
        }
        return null;
    }


    // tslint:disable-next-line:member-ordering
    static mobileNumberValidator(control: any) {
    // US Phone numbers
    if (control.value.match(/^[7-9]{1}[0-9]{9}$/)) {

        return null;
    } else {
        return { 'invalidPhoneNumber': true };
    }
}
    // tslint:disable-next-line:member-ordering
    static VINValidator(control: any) {
    // Vehicle VIN
    if (control.value.length === 17) {
        return null;
    } else {
        return { 'invalidVIN': true };
    }
}

    // tslint:disable-next-line:member-ordering
    static capacityValidator(control: any) {
    if (parseInt(control.value) > 5500) {
        return { 'invalidCapacity': true };
    } else {
        return null;
    }
}

    // tslint:disable-next-line:member-ordering
    static weightValidator(control: any) {
    if (parseInt(control.value) > 250) {
        return { 'invalidWeight': true };
    } else {
        return null;
    }
}

    // tslint:disable-next-line:member-ordering
    static patternValidator(control: any, pattern: RegExp) {
    if (control.value.match(pattern) || control.value === '') {
        return null;
    } else {
        return { 'invalid Patteren': true };
    }
}

    /**
   * to fire all errors before submission
   * @param form FormGroup to be validated.
   */
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

    /**
   * function to set dynamic decimal point config to input fields
   * @param decimal_calculation_precision_point decimal precision point value for filter
   */
    // tslint:disable-next-line:member-ordering
    static setDecimalConfigRegexPattren(decimal) {
    // RFC 2822 compliant regex
    return (control: FormControl): ValidationErrors => {

      let decimalConfigRegex;
      if (decimal === 0) {
        decimalConfigRegex = '^[0-9]*?$';
      } else {
        decimalConfigRegex = '^[0-9]*(\.[0-9]{0,' + (decimal ? decimal : 2) + '})?$';
      }
      const regexp = new RegExp(decimalConfigRegex);
      if (control.value === '' || control.value === null) {
        return null;
      } else if (regexp.test(control.value)) {
        return null;
      } else {
        return { 'invalidDecimalPattern': true };
      }
    };
}

    // tslint:disable-next-line:member-ordering
    static setDecimalConfigRegex(decimal_calculation_precision_point) {
    let decimalConfigRegex = '^[0-9]{1,9}(\.[0-9]{1,' + (decimal_calculation_precision_point ? decimal_calculation_precision_point : 2) + '})?$';
    let regexp = new RegExp(decimalConfigRegex);
    console.log('regular exp', regexp)
    return regexp.source;
}
    /**
     * function to validate hybrid email/phone field
     * @param siblingName
     * @param valueField
     * @param countryCodeField
     */
    // tslint:disable-next-line:member-ordering
    static HybridEmailPhone(siblingName: string, valueField: string, countryCodeField: string) {
    return (control: FormControl): ValidationErrors => {
        if (control.parent) {
            const fc = control.parent.controls[siblingName] as FormControl;
            const valueControl = control.parent.controls[valueField] as FormControl;
            if (!control.value) return null;

            if (control.value.match(/^[0-9 ]*$/)) {
                fc.setValue(true);
                valueControl.setValue(control.parent.controls[countryCodeField].value + ' ' + control.value);
                fc.updateValueAndValidity();
                valueControl.updateValueAndValidity();
                return null;
            } else {
                fc.setValue(false);
                valueControl.setValue(control.value);
                fc.updateValueAndValidity();
                valueControl.updateValueAndValidity();
                if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) || control.value === '') {
                    return null;
                } else {
                    return { 'invalidEmailAddress': true };
                }
            }
        }
    };
}


}
