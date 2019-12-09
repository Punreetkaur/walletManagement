var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-payments-payments-module"], {
        /***/ "./node_modules/@angular/forms/fesm2015/forms.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
          \*******************************************************/
        /*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () { return ɵInternalFormsSharedModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () { return ɵInternalFormsSharedModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () { return REACTIVE_DRIVEN_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () { return SHARED_FORM_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () { return TEMPLATE_DRIVEN_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () { return CHECKBOX_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () { return DEFAULT_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () { return AbstractControlStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () { return ngControlStatusHost; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () { return formDirectiveProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () { return NG_FORM_SELECTOR_WARNING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () { return formControlBinding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () { return modelGroupProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () { return ɵNgNoValidate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () { return ɵNgNoValidate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () { return NUMBER_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () { return RADIO_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () { return RadioControlRegistry; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () { return RANGE_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () { return formControlBinding$1; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () { return controlNameBinding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () { return formDirectiveProvider$1; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () { return formArrayNameProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () { return formGroupNameProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () { return SELECT_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () { return ɵNgSelectMultipleOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () { return ɵNgSelectMultipleOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () { return CHECKBOX_REQUIRED_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () { return EMAIL_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () { return MAX_LENGTH_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () { return MIN_LENGTH_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function () { return PATTERN_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () { return REQUIRED_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () { return AbstractControlDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () { return AbstractFormGroupDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () { return CheckboxControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function () { return ControlContainer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () { return NG_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () { return COMPOSITION_BUFFER_MODE; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () { return DefaultValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function () { return NgControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () { return NgControlStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () { return NgControlStatusGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function () { return NgForm; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function () { return NgFormSelectorWarning; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function () { return NgModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () { return NgModelGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () { return NumberValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () { return RadioControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () { return RangeValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () { return FormControlDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function () { return FormControlName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () { return FormGroupDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function () { return FormArrayName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function () { return FormGroupName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () { return NgSelectOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () { return SelectControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () { return SelectMultipleControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () { return CheckboxRequiredValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function () { return EmailValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () { return MaxLengthValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () { return MinLengthValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function () { return PatternValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () { return RequiredValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function () { return FormBuilder; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function () { return AbstractControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function () { return FormArray; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function () { return FormControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function () { return FormGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () { return NG_ASYNC_VALIDATORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () { return NG_VALIDATORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function () { return Validators; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function () { return VERSION; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function () { return FormsModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () { return ReactiveFormsModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /**
             * @license Angular v8.2.14
             * (c) 2010-2019 Google LLC. https://angular.io/
             * License: MIT
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * Defines an interface that acts as a bridge between the Angular forms API and a
             * native element in the DOM.
             *
             * Implement this interface to create a custom form control directive
             * that integrates with Angular forms.
             *
             * @see DefaultValueAccessor
             *
             * \@publicApi
             * @record
             */
            function ControlValueAccessor() { }
            if (false) { }
            /**
             * Used to provide a `ControlValueAccessor` for form controls.
             *
             * See `DefaultValueAccessor` for how to implement one.
             *
             * \@publicApi
             * @type {?}
             */
            var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var CHECKBOX_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return CheckboxControlValueAccessor; })),
                multi: true,
            };
            /**
             * \@description
             * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
             * element.
             *
             * \@usageNotes
             *
             * ### Using a checkbox with a reactive form.
             *
             * The following example shows how to use a checkbox with a reactive form.
             *
             * ```ts
             * const rememberLoginControl = new FormControl();
             * ```
             *
             * ```
             * <input type="checkbox" [formControl]="rememberLoginControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var CheckboxControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function CheckboxControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "checked" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.writeValue = function (value) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return CheckboxControlValueAccessor;
            }());
            CheckboxControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                            host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                            providers: [CHECKBOX_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            CheckboxControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var DEFAULT_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return DefaultValueAccessor; })),
                multi: true
            };
            /**
             * We must check whether the agent is Android because composition events
             * behave differently between iOS and Android.
             * @return {?}
             */
            function _isAndroid() {
                /** @type {?} */
                var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
                return /android (\d+)/.test(userAgent.toLowerCase());
            }
            /**
             * \@description
             * Provide this token to control if form directives buffer IME input until
             * the "compositionend" event occurs.
             * \@publicApi
             * @type {?}
             */
            var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
            /**
             * \@description
             * The default `ControlValueAccessor` for writing a value and listening to changes on input
             * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using the default value accessor
             *
             * The following example shows how to use an input element that activates the default value accessor
             * (in this case, a text field).
             *
             * ```ts
             * const firstNameControl = new FormControl();
             * ```
             *
             * ```
             * <input type="text" [formControl]="firstNameControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var DefaultValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 * @param {?} _compositionMode
                 */
                function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this._compositionMode = _compositionMode;
                    /**
                     * \@description
                     * The registered callback function called when an input event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * Whether the user is creating a composition string (IME events).
                     */
                    this._composing = false;
                    if (this._compositionMode == null) {
                        this._compositionMode = !_isAndroid();
                    }
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.writeValue = function (value) {
                    /** @type {?} */
                    var normalizedValue = value == null ? '' : value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._handleInput = function (value) {
                    if (!this._compositionMode || (this._compositionMode && !this._composing)) {
                        this.onChange(value);
                    }
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._compositionEnd = function (value) {
                    this._composing = false;
                    this._compositionMode && this.onChange(value);
                };
                return DefaultValueAccessor;
            }());
            DefaultValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                            // TODO: vsavkin replace the above selector with the one below it once
                            // https://github.com/angular/angular/issues/3011 is implemented
                            // selector: '[ngModel],[formControl],[formControlName]',
                            host: {
                                '(input)': '$any(this)._handleInput($event.target.value)',
                                '(blur)': 'onTouched()',
                                '(compositionstart)': '$any(this)._compositionStart()',
                                '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                            },
                            providers: [DEFAULT_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            DefaultValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPOSITION_BUFFER_MODE,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * \@description
             * Base class for control directives.
             *
             * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
             *
             * \@publicApi
             * @abstract
             */
            var AbstractControlDirective = /** @class */ (function () {
                function AbstractControlDirective() {
                }
                Object.defineProperty(AbstractControlDirective.prototype, "value", {
                    /**
                     * \@description
                     * Reports the value of the control if it is present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.value : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "valid", {
                    /**
                     * \@description
                     * Reports whether the control is valid. A control is considered valid if no
                     * validation errors exist with the current value.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.valid : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
                    /**
                     * \@description
                     * Reports whether the control is invalid, meaning that an error exists in the input value.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.invalid : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "pending", {
                    /**
                     * \@description
                     * Reports whether a control is pending, meaning that that async validation is occurring and
                     * errors are not yet available for the input value. If the control is not present, null is
                     * returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.pending : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
                    /**
                     * \@description
                     * Reports whether the control is disabled, meaning that the control is disabled
                     * in the UI and is exempt from validation checks and excluded from aggregate
                     * values of ancestor controls. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.disabled : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
                    /**
                     * \@description
                     * Reports whether the control is enabled, meaning that the control is included in ancestor
                     * calculations of validity or value. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.enabled : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "errors", {
                    /**
                     * \@description
                     * Reports the control's validation errors. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.errors : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
                    /**
                     * \@description
                     * Reports whether the control is pristine, meaning that the user has not yet changed
                     * the value in the UI. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.pristine : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
                    /**
                     * \@description
                     * Reports whether the control is dirty, meaning that the user has changed
                     * the value in the UI. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.dirty : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "touched", {
                    /**
                     * \@description
                     * Reports whether the control is touched, meaning that the user has triggered
                     * a `blur` event on it. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.touched : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "status", {
                    /**
                     * \@description
                     * Reports the validation status of the control. Possible values include:
                     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.status : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
                    /**
                     * \@description
                     * Reports whether the control is untouched, meaning that the user has not yet triggered
                     * a `blur` event on it. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.untouched : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
                    /**
                     * \@description
                     * Returns a multicasting observable that emits a validation status whenever it is
                     * calculated for the control. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () {
                        return this.control ? this.control.statusChanges : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
                    /**
                     * \@description
                     * Returns a multicasting observable of value changes for the control that emits every time the
                     * value of the control changes in the UI or programmatically.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () {
                        return this.control ? this.control.valueChanges : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Resets the control with the provided value if the control is present.
                 * @param {?=} value
                 * @return {?}
                 */
                AbstractControlDirective.prototype.reset = function (value) {
                    if (value === void 0) { value = undefined; }
                    if (this.control)
                        this.control.reset(value);
                };
                /**
                 * \@description
                 * Reports whether the control with the given path has the error specified.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * If no path is given, this method checks for the error on the current control.
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} whether the given error is present in the control at the given path.
                 *
                 * If the control is not present, false is returned.
                 */
                AbstractControlDirective.prototype.hasError = function (errorCode, path) {
                    return this.control ? this.control.hasError(errorCode, path) : false;
                };
                /**
                 * \@description
                 * Reports error data for the control with the given path.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} error data for that particular error. If the control or error is not present,
                 * null is returned.
                 */
                AbstractControlDirective.prototype.getError = function (errorCode, path) {
                    return this.control ? this.control.getError(errorCode, path) : null;
                };
                return AbstractControlDirective;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * A base class for directives that contain multiple registered instances of `NgControl`.
             * Only used by the forms module.
             *
             * \@publicApi
             * @abstract
             */
            var ControlContainer = /** @class */ (function (_super) {
                __extends(ControlContainer, _super);
                function ControlContainer() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(ControlContainer.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level form directive for the control.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ControlContainer.prototype, "path", {
                    /**
                     * \@description
                     * The path to this group.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                return ControlContainer;
            }(AbstractControlDirective));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @return {?}
             */
            function unimplemented() {
                throw new Error('unimplemented');
            }
            /**
             * \@description
             * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
             * object to a DOM element.
             *
             * \@publicApi
             * @abstract
             */
            var NgControl = /** @class */ (function (_super) {
                __extends(NgControl, _super);
                function NgControl() {
                    var _this = _super.apply(this, __spread(arguments)) || this;
                    /**
                     * \@description
                     * The parent form for the control.
                     *
                     * \@internal
                     */
                    _this._parent = null;
                    /**
                     * \@description
                     * The name for the control
                     */
                    _this.name = null;
                    /**
                     * \@description
                     * The value accessor for the control
                     */
                    _this.valueAccessor = null;
                    /**
                     * \@description
                     * The uncomposed array of synchronous validators for the control
                     *
                     * \@internal
                     */
                    _this._rawValidators = [];
                    /**
                     * \@description
                     * The uncomposed array of async validators for the control
                     *
                     * \@internal
                     */
                    _this._rawAsyncValidators = [];
                    return _this;
                }
                Object.defineProperty(NgControl.prototype, "validator", {
                    /**
                     * \@description
                     * The registered synchronous validator function for the control
                     *
                     * @throws An exception that this method is not implemented
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(unimplemented())); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgControl.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * The registered async validator function for the control
                     *
                     * @throws An exception that this method is not implemented
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(unimplemented())); },
                    enumerable: true,
                    configurable: true
                });
                return NgControl;
            }(AbstractControlDirective));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var AbstractControlStatus = /** @class */ (function () {
                /**
                 * @param {?} cd
                 */
                function AbstractControlStatus(cd) {
                    this._cd = cd;
                }
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.untouched : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.touched : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.pristine : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.dirty : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.valid : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.invalid : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.pending : false; },
                    enumerable: true,
                    configurable: true
                });
                return AbstractControlStatus;
            }());
            if (false) { }
            /** @type {?} */
            var ngControlStatusHost = {
                '[class.ng-untouched]': 'ngClassUntouched',
                '[class.ng-touched]': 'ngClassTouched',
                '[class.ng-pristine]': 'ngClassPristine',
                '[class.ng-dirty]': 'ngClassDirty',
                '[class.ng-valid]': 'ngClassValid',
                '[class.ng-invalid]': 'ngClassInvalid',
                '[class.ng-pending]': 'ngClassPending',
            };
            /**
             * \@description
             * Directive automatically applied to Angular form controls that sets CSS classes
             * based on control status.
             *
             * \@usageNotes
             *
             * ### CSS classes applied
             *
             * The following classes are applied as the properties become true:
             *
             * * ng-valid
             * * ng-invalid
             * * ng-pending
             * * ng-pristine
             * * ng-dirty
             * * ng-untouched
             * * ng-touched
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgControlStatus = /** @class */ (function (_super) {
                __extends(NgControlStatus, _super);
                /**
                 * @param {?} cd
                 */
                function NgControlStatus(cd) {
                    return _super.call(this, cd) || this;
                }
                return NgControlStatus;
            }(AbstractControlStatus));
            NgControlStatus.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] }
            ];
            /** @nocollapse */
            NgControlStatus.ctorParameters = function () { return [
                { type: NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
            ]; };
            /**
             * \@description
             * Directive automatically applied to Angular form groups that sets CSS classes
             * based on control status (valid/invalid/dirty/etc).
             *
             * @see `NgControlStatus`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgControlStatusGroup = /** @class */ (function (_super) {
                __extends(NgControlStatusGroup, _super);
                /**
                 * @param {?} cd
                 */
                function NgControlStatusGroup(cd) {
                    return _super.call(this, cd) || this;
                }
                return NgControlStatusGroup;
            }(AbstractControlStatus));
            NgControlStatusGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                            host: ngControlStatusHost
                        },] }
            ];
            /** @nocollapse */
            NgControlStatusGroup.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} value
             * @return {?}
             */
            function isEmptyInputValue(value) {
                // we don't check for string here so it also works with arrays
                return value == null || value.length === 0;
            }
            /**
             * \@description
             * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
             *
             * @see `NG_ASYNC_VALIDATORS`
             *
             * \@usageNotes
             *
             * ### Providing a custom validator
             *
             * The following example registers a custom validator directive. Adding the validator to the
             * existing collection of validators requires the `multi: true` option.
             *
             * ```typescript
             * \@Directive({
             *   selector: '[customValidator]',
             *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
             * })
             * class CustomValidatorDirective implements Validator {
             *   validate(control: AbstractControl): ValidationErrors | null {
             *     return { 'custom': true };
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @type {?}
             */
            var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
            /**
             * \@description
             * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
             *
             * @see `NG_VALIDATORS`
             *
             * \@publicApi
             * @type {?}
             */
            var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
            /**
             * A regular expression that matches valid e-mail addresses.
             *
             * At a high level, this regexp matches e-mail addresses of the format `local-part\@tld`, where:
             * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
             *   punctuation symbols).
             * - `local-part` cannot begin or end with a period (`.`).
             * - `local-part` cannot be longer than 64 characters.
             * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
             *   `foo.com`.
             * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
             *   periods (`.`)).
             * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
             * - A `label` cannot be longer than 63 characters.
             * - The whole address cannot be longer than 254 characters.
             *
             * ## Implementation background
             *
             * This regexp was ported over from AngularJS (see there for git history):
             * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
             * It is based on the
             * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
             * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
             * lengths of different parts of the address). The main differences from the WHATWG version are:
             *   - Disallow `local-part` to begin or end with a period (`.`).
             *   - Disallow `local-part` length to exceed 64 characters.
             *   - Disallow total address length to exceed 254 characters.
             *
             * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
             * @type {?}
             */
            var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            /**
             * \@description
             * Provides a set of built-in validators that can be used by form controls.
             *
             * A validator is a function that processes a `FormControl` or collection of
             * controls and returns an error map or null. A null map means that validation has passed.
             *
             * @see [Form Validation](/guide/form-validation)
             *
             * \@publicApi
             */
            var Validators = /** @class */ (function () {
                function Validators() {
                }
                /**
                 * \@description
                 * Validator that requires the control's value to be greater than or equal to the provided number.
                 * The validator exists only as a function and not as a directive.
                 *
                 * \@usageNotes
                 *
                 * ### Validate against a minimum of 3
                 *
                 * ```typescript
                 * const control = new FormControl(2, Validators.min(3));
                 *
                 * console.log(control.errors); // {min: {min: 3, actual: 2}}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} min
                 * @return {?} A validator function that returns an error map with the
                 * `min` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.min = function (min) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = parseFloat(control.value);
                        // Controls with NaN values after parsing should be treated as not having a
                        // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
                        return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control's value to be less than or equal to the provided number.
                 * The validator exists only as a function and not as a directive.
                 *
                 * \@usageNotes
                 *
                 * ### Validate against a maximum of 15
                 *
                 * ```typescript
                 * const control = new FormControl(16, Validators.max(15));
                 *
                 * console.log(control.errors); // {max: {max: 15, actual: 16}}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} max
                 * @return {?} A validator function that returns an error map with the
                 * `max` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.max = function (max) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = parseFloat(control.value);
                        // Controls with NaN values after parsing should be treated as not having a
                        // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
                        return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control have a non-empty value.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field is non-empty
                 *
                 * ```typescript
                 * const control = new FormControl('', Validators.required);
                 *
                 * console.log(control.errors); // {required: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map with the `required` property
                 * if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.required = function (control) {
                    return isEmptyInputValue(control.value) ? { 'required': true } : null;
                };
                /**
                 * \@description
                 * Validator that requires the control's value be true. This validator is commonly
                 * used for required checkboxes.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field value is true
                 *
                 * ```typescript
                 * const control = new FormControl('', Validators.requiredTrue);
                 *
                 * console.log(control.errors); // {required: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map that contains the `required` property
                 * set to `true` if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.requiredTrue = function (control) {
                    return control.value === true ? null : { 'required': true };
                };
                /**
                 * \@description
                 * Validator that requires the control's value pass an email validation test.
                 *
                 * Tests the value using a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
                 * pattern suitable for common usecases. The pattern is based on the definition of a valid email
                 * address in the [WHATWG HTML specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)
                 * with some enhancements to incorporate more RFC rules (such as rules related to domain names and
                 * the lengths of different parts of the address).
                 *
                 * The differences from the WHATWG version include:
                 * - Disallow `local-part` (the part before the `\@` symbol) to begin or end with a period (`.`).
                 * - Disallow `local-part` to be longer than 64 characters.
                 * - Disallow the whole address to be longer than 254 characters.
                 *
                 * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
                 * validate the value against a different pattern.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field matches a valid email pattern
                 *
                 * ```typescript
                 * const control = new FormControl('bad\@', Validators.email);
                 *
                 * console.log(control.errors); // {email: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map with the `email` property
                 * if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.email = function (control) {
                    if (isEmptyInputValue(control.value)) {
                        return null; // don't validate empty values to allow optional controls
                    }
                    return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
                };
                /**
                 * \@description
                 * Validator that requires the length of the control's value to be greater than or equal
                 * to the provided minimum length. This validator is also provided by default if you use the
                 * the HTML5 `minlength` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field has a minimum of 3 characters
                 *
                 * ```typescript
                 * const control = new FormControl('ng', Validators.minLength(3));
                 *
                 * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
                 * ```
                 *
                 * ```html
                 * <input minlength="5">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} minLength
                 * @return {?} A validator function that returns an error map with the
                 * `minlength` if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.minLength = function (minLength) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var length = control.value ? control.value.length : 0;
                        return length < minLength ?
                            { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                            null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the length of the control's value to be less than or equal
                 * to the provided maximum length. This validator is also provided by default if you use the
                 * the HTML5 `maxlength` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field has maximum of 5 characters
                 *
                 * ```typescript
                 * const control = new FormControl('Angular', Validators.maxLength(5));
                 *
                 * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
                 * ```
                 *
                 * ```html
                 * <input maxlength="5">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} maxLength
                 * @return {?} A validator function that returns an error map with the
                 * `maxlength` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.maxLength = function (maxLength) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var length = control.value ? control.value.length : 0;
                        return length > maxLength ?
                            { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                            null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control's value to match a regex pattern. This validator is also
                 * provided by default if you use the HTML5 `pattern` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field only contains letters or spaces
                 *
                 * ```typescript
                 * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
                 *
                 * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
                 * ```
                 *
                 * ```html
                 * <input pattern="[a-zA-Z ]*">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} pattern A regular expression to be used as is to test the values, or a string.
                 * If a string is passed, the `^` character is prepended and the `$` character is
                 * appended to the provided string (if not already present), and the resulting regular
                 * expression is used to test the values.
                 *
                 * @return {?} A validator function that returns an error map with the
                 * `pattern` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.pattern = function (pattern) {
                    if (!pattern)
                        return Validators.nullValidator;
                    /** @type {?} */
                    var regex;
                    /** @type {?} */
                    var regexStr;
                    if (typeof pattern === 'string') {
                        regexStr = '';
                        if (pattern.charAt(0) !== '^')
                            regexStr += '^';
                        regexStr += pattern;
                        if (pattern.charAt(pattern.length - 1) !== '$')
                            regexStr += '$';
                        regex = new RegExp(regexStr);
                    }
                    else {
                        regexStr = pattern.toString();
                        regex = pattern;
                    }
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = control.value;
                        return regex.test(value) ? null :
                            { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
                    });
                };
                /**
                 * \@description
                 * Validator that performs no operation.
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?}
                 */
                Validators.nullValidator = function (control) { return null; };
                /**
                 * @param {?} validators
                 * @return {?}
                 */
                Validators.compose = function (validators) {
                    if (!validators)
                        return null;
                    /** @type {?} */
                    var presentValidators = ( /** @type {?} */(validators.filter(isPresent)));
                    if (presentValidators.length == 0)
                        return null;
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        return _mergeErrors(_executeValidators(control, presentValidators));
                    });
                };
                /**
                 * \@description
                 * Compose multiple async validators into a single function that returns the union
                 * of the individual error objects for the provided control.
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} validators
                 * @return {?} A validator function that returns an error map with the
                 * merged error objects of the async validators if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.composeAsync = function (validators) {
                    if (!validators)
                        return null;
                    /** @type {?} */
                    var presentValidators = ( /** @type {?} */(validators.filter(isPresent)));
                    if (presentValidators.length == 0)
                        return null;
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
                    });
                };
                return Validators;
            }());
            /**
             * @param {?} o
             * @return {?}
             */
            function isPresent(o) {
                return o != null;
            }
            /**
             * @param {?} r
             * @return {?}
             */
            function toObservable(r) {
                /** @type {?} */
                var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
                if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs))) {
                    throw new Error("Expected validator to return Promise or Observable.");
                }
                return obs;
            }
            /**
             * @param {?} control
             * @param {?} validators
             * @return {?}
             */
            function _executeValidators(control, validators) {
                return validators.map(( /**
                 * @param {?} v
                 * @return {?}
                 */function (/**
                 * @param {?} v
                 * @return {?}
                 */ v) { return v(control); }));
            }
            /**
             * @param {?} control
             * @param {?} validators
             * @return {?}
             */
            function _executeAsyncValidators(control, validators) {
                return validators.map(( /**
                 * @param {?} v
                 * @return {?}
                 */function (/**
                 * @param {?} v
                 * @return {?}
                 */ v) { return v(control); }));
            }
            /**
             * @param {?} arrayOfErrors
             * @return {?}
             */
            function _mergeErrors(arrayOfErrors) {
                /** @type {?} */
                var res = arrayOfErrors.reduce(( /**
                 * @param {?} res
                 * @param {?} errors
                 * @return {?}
                 */function (res, errors) {
                    return errors != null ? Object.assign({}, ( /** @type {?} */(res)), errors) : ( /** @type {?} */(res));
                }), {});
                return Object.keys(res).length === 0 ? null : res;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @param {?} validator
             * @return {?}
             */
            function normalizeValidator(validator) {
                if ((( /** @type {?} */(validator))).validate) {
                    return ( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return (( /** @type {?} */(validator))).validate(c); });
                }
                else {
                    return ( /** @type {?} */(validator));
                }
            }
            /**
             * @param {?} validator
             * @return {?}
             */
            function normalizeAsyncValidator(validator) {
                if ((( /** @type {?} */(validator))).validate) {
                    return ( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return (( /** @type {?} */(validator))).validate(c); });
                }
                else {
                    return ( /** @type {?} */(validator));
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NUMBER_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NumberValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * The `ControlValueAccessor` for writing a number value and listening to number input changes.
             * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
             * directives.
             *
             * \@usageNotes
             *
             * ### Using a number input with a reactive form.
             *
             * The following example shows how to use a number input with a reactive form.
             *
             * ```ts
             * const totalCountControl = new FormControl();
             * ```
             *
             * ```
             * <input type="number" [formControl]="totalCountControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NumberValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function NumberValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change or input event occurs on the input
                     * element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                NumberValueAccessor.prototype.writeValue = function (value) {
                    // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
                    /** @type {?} */
                    var normalizedValue = value == null ? '' : value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                NumberValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = ( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) { fn(value == '' ? null : parseFloat(value)); });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return NumberValueAccessor;
            }());
            NumberValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                            host: {
                                '(change)': 'onChange($event.target.value)',
                                '(input)': 'onChange($event.target.value)',
                                '(blur)': 'onTouched()'
                            },
                            providers: [NUMBER_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            NumberValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var RADIO_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RadioControlValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * Class used by Angular to track radio buttons. For internal use only.
             */
            var RadioControlRegistry = /** @class */ (function () {
                function RadioControlRegistry() {
                    this._accessors = [];
                }
                /**
                 * \@description
                 * Adds a control to the internal registry. For internal use only.
                 * @param {?} control
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.add = function (control, accessor) {
                    this._accessors.push([control, accessor]);
                };
                /**
                 * \@description
                 * Removes a control from the internal registry. For internal use only.
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.remove = function (accessor) {
                    for (var i = this._accessors.length - 1; i >= 0; --i) {
                        if (this._accessors[i][1] === accessor) {
                            this._accessors.splice(i, 1);
                            return;
                        }
                    }
                };
                /**
                 * \@description
                 * Selects a radio button. For internal use only.
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.select = function (accessor) {
                    var _this = this;
                    this._accessors.forEach(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) {
                        if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                            c[1].fireUncheck(accessor.value);
                        }
                    }));
                };
                /**
                 * @private
                 * @param {?} controlPair
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
                    if (!controlPair[0].control)
                        return false;
                    return controlPair[0]._parent === accessor._control._parent &&
                        controlPair[1].name === accessor.name;
                };
                return RadioControlRegistry;
            }());
            RadioControlRegistry.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            if (false) { }
            /**
             * \@description
             * The `ControlValueAccessor` for writing radio control values and listening to radio control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using radio buttons with reactive form directives
             *
             * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
             * a reactive form, radio buttons in the same group should have the same `formControlName`.
             * Providing a `name` attribute is optional.
             *
             * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var RadioControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 * @param {?} _registry
                 * @param {?} _injector
                 */
                function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this._registry = _registry;
                    this._injector = _injector;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive is initialized. For internal use only.
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.ngOnInit = function () {
                    this._control = this._injector.get(NgControl);
                    this._checkName();
                    this._registry.add(this._control, this);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
                /**
                 * \@description
                 * Sets the "checked" property value on the radio input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.writeValue = function (value) {
                    this._state = value === this.value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this._fn = fn;
                    this.onChange = ( /**
                     * @return {?}
                     */function () {
                        fn(_this.value);
                        _this._registry.select(_this);
                    });
                };
                /**
                 * Sets the "value" on the radio input element and unchecks it.
                 *
                 * @param {?} value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * @private
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype._checkName = function () {
                    if (this.name && this.formControlName && this.name !== this.formControlName) {
                        this._throwNameError();
                    }
                    if (!this.name && this.formControlName)
                        this.name = this.formControlName;
                };
                /**
                 * @private
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype._throwNameError = function () {
                    throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
                };
                return RadioControlValueAccessor;
            }());
            RadioControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                            host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                            providers: [RADIO_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            RadioControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: RadioControlRegistry },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
            ]; };
            RadioControlValueAccessor.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var RANGE_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RangeValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * The `ControlValueAccessor` for writing a range value and listening to range input changes.
             * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
             * directives.
             *
             * \@usageNotes
             *
             * ### Using a range input with a reactive form
             *
             * The following example shows how to use a range input with a reactive form.
             *
             * ```ts
             * const ageControl = new FormControl();
             * ```
             *
             * ```
             * <input type="range" [formControl]="ageControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var RangeValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function RangeValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change or input event occurs on the input
                     * element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                RangeValueAccessor.prototype.writeValue = function (value) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RangeValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = ( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) { fn(value == '' ? null : parseFloat(value)); });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the range input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return RangeValueAccessor;
            }());
            RangeValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                            host: {
                                '(change)': 'onChange($event.target.value)',
                                '(input)': 'onChange($event.target.value)',
                                '(blur)': 'onTouched()'
                            },
                            providers: [RANGE_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            RangeValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /** @type {?} */
            var FormErrorExamples = {
                formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
                formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
                formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
                ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
                ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var ReactiveErrors = /** @class */ (function () {
                function ReactiveErrors() {
                }
                /**
                 * @return {?}
                 */
                ReactiveErrors.controlParentException = function () {
                    throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.ngModelGroupException = function () {
                    throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.missingFormException = function () {
                    throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.groupParentException = function () {
                    throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.arrayParentException = function () {
                    throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.disabledAttrWarning = function () {
                    console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
                };
                /**
                 * @param {?} directiveName
                 * @return {?}
                 */
                ReactiveErrors.ngModelWarning = function (directiveName) {
                    console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
                        : 'FormControlName') + "#use-with-ngmodel\n    ");
                };
                return ReactiveErrors;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SELECT_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return SelectControlValueAccessor; })),
                multi: true
            };
            /**
             * @param {?} id
             * @param {?} value
             * @return {?}
             */
            function _buildValueString(id, value) {
                if (id == null)
                    return "" + value;
                if (value && typeof value === 'object')
                    value = 'Object';
                return (id + ": " + value).slice(0, 50);
            }
            /**
             * @param {?} valueString
             * @return {?}
             */
            function _extractId(valueString) {
                return valueString.split(':')[0];
            }
            /**
             * \@description
             * The `ControlValueAccessor` for writing select control values and listening to select control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using select controls in a reactive form
             *
             * The following examples show how to use a select control in a reactive form.
             *
             * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
             *
             * ### Using select controls in a template-driven form
             *
             * To use a select in a template-driven form, simply add an `ngModel` and a `name`
             * attribute to the main `<select>` tag.
             *
             * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
             *
             * ### Customizing option selection
             *
             * Angular uses object identity to select option. It's possible for the identities of items
             * to change while the data does not. This can happen, for example, if the items are produced
             * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
             * second response will produce objects with different identities.
             *
             * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
             * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
             * If `compareWith` is given, Angular selects option by the return value of the function.
             *
             * ```ts
             * const selectedCountriesControl = new FormControl();
             * ```
             *
             * ```
             * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
             *     <option *ngFor="let country of countries" [ngValue]="country">
             *         {{country.name}}
             *     </option>
             * </select>
             *
             * compareFn(c1: Country, c2: Country): boolean {
             *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
             * }
             * ```
             *
             * **Note:** We listen to the 'change' event because 'input' events aren't fired
             * for selects in Firefox and IE:
             * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
             * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var SelectControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function SelectControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@internal
                     */
                    this._optionMap = new Map();
                    /**
                     * \@internal
                     */
                    this._idCounter = 0;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
                }
                Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
                    /**
                     * \@description
                     * Tracks the option comparison algorithm for tracking identities when
                     * checking for changes.
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (typeof fn !== 'function') {
                            throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                        }
                        this._compareWith = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the "value" property on the input element. The "selectedIndex"
                 * property is also set if an ID is provided on the option element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.writeValue = function (value) {
                    this.value = value;
                    /** @type {?} */
                    var id = this._getOptionId(value);
                    if (id == null) {
                        this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
                    }
                    /** @type {?} */
                    var valueString = _buildValueString(id, value);
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this.onChange = ( /**
                     * @param {?} valueString
                     * @return {?}
                     */function (valueString) {
                        _this.value = _this._getOptionValue(valueString);
                        fn(_this.value);
                    });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the select input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._getOptionId = function (value) {
                    var e_1, _a;
                    try {
                        for (var _b = __values(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var id = _c.value;
                            if (this._compareWith(this._optionMap.get(id), value))
                                return id;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return null;
                };
                /**
                 * \@internal
                 * @param {?} valueString
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
                    /** @type {?} */
                    var id = _extractId(valueString);
                    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
                };
                return SelectControlValueAccessor;
            }());
            SelectControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                            providers: [SELECT_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            SelectControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            SelectControlValueAccessor.propDecorators = {
                compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Marks `<option>` as dynamic, so Angular can be notified when options change.
             *
             * @see `SelectControlValueAccessor`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgSelectOption = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _renderer
                 * @param {?} _select
                 */
                function NgSelectOption(_element, _renderer, _select) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._select = _select;
                    if (this._select)
                        this.id = this._select._registerOption();
                }
                Object.defineProperty(NgSelectOption.prototype, "ngValue", {
                    /**
                     * \@description
                     * Tracks the value bound to the option element. Unlike the value binding,
                     * ngValue supports binding to objects.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select == null)
                            return;
                        this._select._optionMap.set(this.id, value);
                        this._setElementValue(_buildValueString(this.id, value));
                        this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgSelectOption.prototype, "value", {
                    /**
                     * \@description
                     * Tracks simple string values bound to the option element.
                     * For objects, use the `ngValue` input binding.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._setElementValue(value);
                        if (this._select)
                            this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                NgSelectOption.prototype._setElementValue = function (value) {
                    this._renderer.setProperty(this._element.nativeElement, 'value', value);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                NgSelectOption.prototype.ngOnDestroy = function () {
                    if (this._select) {
                        this._select._optionMap.delete(this.id);
                        this._select.writeValue(this._select.value);
                    }
                };
                return NgSelectOption;
            }());
            NgSelectOption.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
            ];
            /** @nocollapse */
            NgSelectOption.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: SelectControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
            ]; };
            NgSelectOption.propDecorators = {
                ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SELECT_MULTIPLE_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return SelectMultipleControlValueAccessor; })),
                multi: true
            };
            /**
             * @param {?} id
             * @param {?} value
             * @return {?}
             */
            function _buildValueString$1(id, value) {
                if (id == null)
                    return "" + value;
                if (typeof value === 'string')
                    value = "'" + value + "'";
                if (value && typeof value === 'object')
                    value = 'Object';
                return (id + ": " + value).slice(0, 50);
            }
            /**
             * @param {?} valueString
             * @return {?}
             */
            function _extractId$1(valueString) {
                return valueString.split(':')[0];
            }
            /**
             * Mock interface for HTML Options
             * @record
             */
            function HTMLOption() { }
            if (false) { }
            /**
             * Mock interface for HTMLCollection
             * @abstract
             */
            var HTMLCollection = /** @class */ (function () {
                function HTMLCollection() {
                }
                return HTMLCollection;
            }());
            if (false) { }
            /**
             * \@description
             * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
             * directives.
             *
             * @see `SelectControlValueAccessor`
             *
             * \@usageNotes
             *
             * ### Using a multi-select control
             *
             * The follow example shows you how to use a multi-select control with a reactive form.
             *
             * ```ts
             * const countryControl = new FormControl();
             * ```
             *
             * ```
             * <select multiple name="countries" [formControl]="countryControl">
             *   <option *ngFor="let country of countries" [ngValue]="country">
             *     {{ country.name }}
             *   </option>
             * </select>
             * ```
             *
             * ### Customizing option selection
             *
             * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
             * See the `SelectControlValueAccessor` for usage.
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var SelectMultipleControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@internal
                     */
                    this._optionMap = new Map();
                    /**
                     * \@internal
                     */
                    this._idCounter = 0;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
                }
                Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
                    /**
                     * \@description
                     * Tracks the option comparison algorithm for tracking identities when
                     * checking for changes.
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (typeof fn !== 'function') {
                            throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                        }
                        this._compareWith = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the "value" property on one or of more
                 * of the select's options.
                 *
                 * @param {?} value The value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
                    var _this = this;
                    this.value = value;
                    /** @type {?} */
                    var optionSelectedStateSetter;
                    if (Array.isArray(value)) {
                        // convert values to ids
                        /** @type {?} */
                        var ids_1 = value.map(( /**
                         * @param {?} v
                         * @return {?}
                         */function (v) { return _this._getOptionId(v); }));
                        optionSelectedStateSetter = ( /**
                         * @param {?} opt
                         * @param {?} o
                         * @return {?}
                         */function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); });
                    }
                    else {
                        optionSelectedStateSetter = ( /**
                         * @param {?} opt
                         * @param {?} o
                         * @return {?}
                         */function (opt, o) { opt._setSelected(false); });
                    }
                    this._optionMap.forEach(optionSelectedStateSetter);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes
                 * and writes an array of the selected options.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) {
                        /** @type {?} */
                        var selected = [];
                        if (_.hasOwnProperty('selectedOptions')) {
                            /** @type {?} */
                            var options = _.selectedOptions;
                            for (var i = 0; i < options.length; i++) {
                                /** @type {?} */
                                var opt = options.item(i);
                                /** @type {?} */
                                var val = _this._getOptionValue(opt.value);
                                selected.push(val);
                            }
                        }
                        // Degrade on IE
                        else {
                            /** @type {?} */
                            var options = ( /** @type {?} */(_.options));
                            for (var i = 0; i < options.length; i++) {
                                /** @type {?} */
                                var opt = options.item(i);
                                if (opt.selected) {
                                    /** @type {?} */
                                    var val = _this._getOptionValue(opt.value);
                                    selected.push(val);
                                }
                            }
                        }
                        _this.value = selected;
                        fn(selected);
                    });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the select input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
                    /** @type {?} */
                    var id = (this._idCounter++).toString();
                    this._optionMap.set(id, value);
                    return id;
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
                    var e_2, _a;
                    try {
                        for (var _b = __values(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var id = _c.value;
                            if (this._compareWith(( /** @type {?} */(this._optionMap.get(id)))._value, value))
                                return id;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return null;
                };
                /**
                 * \@internal
                 * @param {?} valueString
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
                    /** @type {?} */
                    var id = _extractId$1(valueString);
                    return this._optionMap.has(id) ? ( /** @type {?} */(this._optionMap.get(id)))._value : valueString;
                };
                return SelectMultipleControlValueAccessor;
            }());
            SelectMultipleControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                            host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            SelectMultipleControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            SelectMultipleControlValueAccessor.propDecorators = {
                compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Marks `<option>` as dynamic, so Angular can be notified when options change.
             *
             * @see `SelectMultipleControlValueAccessor`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var ɵNgSelectMultipleOption = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _renderer
                 * @param {?} _select
                 */
                function ɵNgSelectMultipleOption(_element, _renderer, _select) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._select = _select;
                    if (this._select) {
                        this.id = this._select._registerOption(this);
                    }
                }
                Object.defineProperty(ɵNgSelectMultipleOption.prototype, "ngValue", {
                    /**
                     * \@description
                     * Tracks the value bound to the option element. Unlike the value binding,
                     * ngValue supports binding to objects.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select == null)
                            return;
                        this._value = value;
                        this._setElementValue(_buildValueString$1(this.id, value));
                        this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ɵNgSelectMultipleOption.prototype, "value", {
                    /**
                     * \@description
                     * Tracks simple string values bound to the option element.
                     * For objects, use the `ngValue` input binding.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select) {
                            this._value = value;
                            this._setElementValue(_buildValueString$1(this.id, value));
                            this._select.writeValue(this._select.value);
                        }
                        else {
                            this._setElementValue(value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype._setElementValue = function (value) {
                    this._renderer.setProperty(this._element.nativeElement, 'value', value);
                };
                /**
                 * \@internal
                 * @param {?} selected
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype._setSelected = function (selected) {
                    this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype.ngOnDestroy = function () {
                    if (this._select) {
                        this._select._optionMap.delete(this.id);
                        this._select.writeValue(this._select.value);
                    }
                };
                return ɵNgSelectMultipleOption;
            }());
            ɵNgSelectMultipleOption.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
            ];
            /** @nocollapse */
            ɵNgSelectMultipleOption.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
            ]; };
            ɵNgSelectMultipleOption.propDecorators = {
                ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} name
             * @param {?} parent
             * @return {?}
             */
            function controlPath(name, parent) {
                return __spread(( /** @type {?} */(parent.path)), [name]);
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpControl(control, dir) {
                if (!control)
                    _throwError(dir, 'Cannot find control with');
                if (!dir.valueAccessor)
                    _throwError(dir, 'No value accessor for form control with');
                control.validator = Validators.compose([( /** @type {?} */(control.validator)), dir.validator]);
                control.asyncValidator = Validators.composeAsync([( /** @type {?} */(control.asyncValidator)), dir.asyncValidator]);
                ( /** @type {?} */(dir.valueAccessor)).writeValue(control.value);
                setUpViewChangePipeline(control, dir);
                setUpModelChangePipeline(control, dir);
                setUpBlurPipeline(control, dir);
                if (( /** @type {?} */(dir.valueAccessor)).setDisabledState) {
                    control.registerOnDisabledChange(( /**
                     * @param {?} isDisabled
                     * @return {?}
                     */function (isDisabled) { ( /** @type {?} */(( /** @type {?} */(dir.valueAccessor)).setDisabledState))(isDisabled); }));
                }
                // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
                dir._rawValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if ((( /** @type {?} */(validator))).registerOnValidatorChange)
                        ( /** @type {?} */((( /** @type {?} */(validator))).registerOnValidatorChange))(( /**
                         * @return {?}
                         */function () { return control.updateValueAndValidity(); }));
                }));
                dir._rawAsyncValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if ((( /** @type {?} */(validator))).registerOnValidatorChange)
                        ( /** @type {?} */((( /** @type {?} */(validator))).registerOnValidatorChange))(( /**
                         * @return {?}
                         */function () { return control.updateValueAndValidity(); }));
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function cleanUpControl(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnChange(( /**
                 * @return {?}
                 */function () { return _noControlError(dir); }));
                ( /** @type {?} */(dir.valueAccessor)).registerOnTouched(( /**
                 * @return {?}
                 */function () { return _noControlError(dir); }));
                dir._rawValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if (validator.registerOnValidatorChange) {
                        validator.registerOnValidatorChange(null);
                    }
                }));
                dir._rawAsyncValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if (validator.registerOnValidatorChange) {
                        validator.registerOnValidatorChange(null);
                    }
                }));
                if (control)
                    control._clearChangeFns();
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpViewChangePipeline(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnChange(( /**
                 * @param {?} newValue
                 * @return {?}
                 */function (newValue) {
                    control._pendingValue = newValue;
                    control._pendingChange = true;
                    control._pendingDirty = true;
                    if (control.updateOn === 'change')
                        updateControl(control, dir);
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpBlurPipeline(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnTouched(( /**
                 * @return {?}
                 */function () {
                    control._pendingTouched = true;
                    if (control.updateOn === 'blur' && control._pendingChange)
                        updateControl(control, dir);
                    if (control.updateOn !== 'submit')
                        control.markAsTouched();
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function updateControl(control, dir) {
                if (control._pendingDirty)
                    control.markAsDirty();
                control.setValue(control._pendingValue, { emitModelToViewChange: false });
                dir.viewToModelUpdate(control._pendingValue);
                control._pendingChange = false;
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpModelChangePipeline(control, dir) {
                control.registerOnChange(( /**
                 * @param {?} newValue
                 * @param {?} emitModelEvent
                 * @return {?}
                 */function (newValue, emitModelEvent) {
                    // control -> view
                    ( /** @type {?} */(dir.valueAccessor)).writeValue(newValue);
                    // control -> ngModel
                    if (emitModelEvent)
                        dir.viewToModelUpdate(newValue);
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpFormContainer(control, dir) {
                if (control == null)
                    _throwError(dir, 'Cannot find control with');
                control.validator = Validators.compose([control.validator, dir.validator]);
                control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
            }
            /**
             * @param {?} dir
             * @return {?}
             */
            function _noControlError(dir) {
                return _throwError(dir, 'There is no FormControl instance attached to form control element with');
            }
            /**
             * @param {?} dir
             * @param {?} message
             * @return {?}
             */
            function _throwError(dir, message) {
                /** @type {?} */
                var messageEnd;
                if (( /** @type {?} */(dir.path)).length > 1) {
                    messageEnd = "path: '" + ( /** @type {?} */(dir.path)).join(' -> ') + "'";
                }
                else if (( /** @type {?} */(dir.path))[0]) {
                    messageEnd = "name: '" + dir.path + "'";
                }
                else {
                    messageEnd = 'unspecified name attribute';
                }
                throw new Error(message + " " + messageEnd);
            }
            /**
             * @param {?} validators
             * @return {?}
             */
            function composeValidators(validators) {
                return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
            }
            /**
             * @param {?} validators
             * @return {?}
             */
            function composeAsyncValidators(validators) {
                return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
                    null;
            }
            /**
             * @param {?} changes
             * @param {?} viewModel
             * @return {?}
             */
            function isPropertyUpdated(changes, viewModel) {
                if (!changes.hasOwnProperty('model'))
                    return false;
                /** @type {?} */
                var change = changes['model'];
                if (change.isFirstChange())
                    return true;
                return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"])(viewModel, change.currentValue);
            }
            /** @type {?} */
            var BUILTIN_ACCESSORS = [
                CheckboxControlValueAccessor,
                RangeValueAccessor,
                NumberValueAccessor,
                SelectControlValueAccessor,
                SelectMultipleControlValueAccessor,
                RadioControlValueAccessor,
            ];
            /**
             * @param {?} valueAccessor
             * @return {?}
             */
            function isBuiltInAccessor(valueAccessor) {
                return BUILTIN_ACCESSORS.some(( /**
                 * @param {?} a
                 * @return {?}
                 */function (/**
                 * @param {?} a
                 * @return {?}
                 */ a) { return valueAccessor.constructor === a; }));
            }
            /**
             * @param {?} form
             * @param {?} directives
             * @return {?}
             */
            function syncPendingControls(form, directives) {
                form._syncPendingControls();
                directives.forEach(( /**
                 * @param {?} dir
                 * @return {?}
                 */function (/**
                 * @param {?} dir
                 * @return {?}
                 */ dir) {
                    /** @type {?} */
                    var control = ( /** @type {?} */(dir.control));
                    if (control.updateOn === 'submit' && control._pendingChange) {
                        dir.viewToModelUpdate(control._pendingValue);
                        control._pendingChange = false;
                    }
                }));
            }
            // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
            /**
             * @param {?} dir
             * @param {?} valueAccessors
             * @return {?}
             */
            function selectValueAccessor(dir, valueAccessors) {
                if (!valueAccessors)
                    return null;
                if (!Array.isArray(valueAccessors))
                    _throwError(dir, 'Value accessor was not provided as an array for form control with');
                /** @type {?} */
                var defaultAccessor = undefined;
                /** @type {?} */
                var builtinAccessor = undefined;
                /** @type {?} */
                var customAccessor = undefined;
                valueAccessors.forEach(( /**
                 * @param {?} v
                 * @return {?}
                 */function (v) {
                    if (v.constructor === DefaultValueAccessor) {
                        defaultAccessor = v;
                    }
                    else if (isBuiltInAccessor(v)) {
                        if (builtinAccessor)
                            _throwError(dir, 'More than one built-in value accessor matches form control with');
                        builtinAccessor = v;
                    }
                    else {
                        if (customAccessor)
                            _throwError(dir, 'More than one custom value accessor matches form control with');
                        customAccessor = v;
                    }
                }));
                if (customAccessor)
                    return customAccessor;
                if (builtinAccessor)
                    return builtinAccessor;
                if (defaultAccessor)
                    return defaultAccessor;
                _throwError(dir, 'No valid value accessor for form control with');
                return null;
            }
            /**
             * @template T
             * @param {?} list
             * @param {?} el
             * @return {?}
             */
            function removeDir(list, el) {
                /** @type {?} */
                var index = list.indexOf(el);
                if (index > -1)
                    list.splice(index, 1);
            }
            // TODO(kara): remove after deprecation period
            /**
             * @param {?} name
             * @param {?} type
             * @param {?} instance
             * @param {?} warningConfig
             * @return {?}
             */
            function _ngModelWarning(name, type, instance, warningConfig) {
                if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never')
                    return;
                if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
                    (warningConfig === 'always' && !instance._ngModelWarningSent)) {
                    ReactiveErrors.ngModelWarning(name);
                    type._ngModelWarningSentOnce = true;
                    instance._ngModelWarningSent = true;
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Reports that a FormControl is valid, meaning that no errors exist in the input value.
             *
             * @see `status`
             * @type {?}
             */
            var VALID = 'VALID';
            /**
             * Reports that a FormControl is invalid, meaning that an error exists in the input value.
             *
             * @see `status`
             * @type {?}
             */
            var INVALID = 'INVALID';
            /**
             * Reports that a FormControl is pending, meaning that that async validation is occurring and
             * errors are not yet available for the input value.
             *
             * @see `markAsPending`
             * @see `status`
             * @type {?}
             */
            var PENDING = 'PENDING';
            /**
             * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
             * calculations of validity or value.
             *
             * @see `markAsDisabled`
             * @see `status`
             * @type {?}
             */
            var DISABLED = 'DISABLED';
            /**
             * @param {?} control
             * @param {?} path
             * @param {?} delimiter
             * @return {?}
             */
            function _find(control, path, delimiter) {
                if (path == null)
                    return null;
                if (!(path instanceof Array)) {
                    path = (( /** @type {?} */(path))).split(delimiter);
                }
                if (path instanceof Array && (path.length === 0))
                    return null;
                return (( /** @type {?} */(path))).reduce(( /**
                 * @param {?} v
                 * @param {?} name
                 * @return {?}
                 */function (v, name) {
                    if (v instanceof FormGroup) {
                        return v.controls.hasOwnProperty(( /** @type {?} */(name))) ? v.controls[name] : null;
                    }
                    if (v instanceof FormArray) {
                        return v.at(( /** @type {?} */(name))) || null;
                    }
                    return null;
                }), control);
            }
            /**
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function coerceToValidator(validatorOrOpts) {
                /** @type {?} */
                var validator = ( /** @type {?} */((isOptionsObj(validatorOrOpts) ? (( /** @type {?} */(validatorOrOpts))).validators :
                    validatorOrOpts)));
                return Array.isArray(validator) ? composeValidators(validator) : validator || null;
            }
            /**
             * @param {?=} asyncValidator
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
                /** @type {?} */
                var origAsyncValidator = ( /** @type {?} */((isOptionsObj(validatorOrOpts) ? (( /** @type {?} */(validatorOrOpts))).asyncValidators :
                    asyncValidator)));
                return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
                    origAsyncValidator || null;
            }
            /**
             * Interface for options provided to an `AbstractControl`.
             *
             * \@publicApi
             * @record
             */
            function AbstractControlOptions() { }
            if (false) { }
            /**
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function isOptionsObj(validatorOrOpts) {
                return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
                    typeof validatorOrOpts === 'object';
            }
            /**
             * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
             *
             * It provides some of the shared behavior that all controls and groups of controls have, like
             * running validators, calculating status, and resetting state. It also defines the properties
             * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
             * instantiated directly.
             *
             * @see [Forms Guide](/guide/forms)
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             * @see [Dynamic Forms Guide](/guide/dynamic-form)
             *
             * \@publicApi
             * @abstract
             */
            var AbstractControl = /** @class */ (function () {
                /**
                 * Initialize the AbstractControl instance.
                 *
                 * @param {?} validator The function that determines the synchronous validity of this control.
                 * @param {?} asyncValidator The function that determines the asynchronous validity of this
                 * control.
                 */
                function AbstractControl(validator, asyncValidator) {
                    this.validator = validator;
                    this.asyncValidator = asyncValidator;
                    /**
                     * \@internal
                     */
                    this._onCollectionChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * A control is `pristine` if the user has not yet changed
                     * the value in the UI.
                     *
                     * @return True if the user has not yet changed the value in the UI; compare `dirty`.
                     * Programmatic changes to a control's value do not mark it dirty.
                     */
                    this.pristine = true;
                    /**
                     * True if the control is marked as `touched`.
                     *
                     * A control is marked `touched` once the user has triggered
                     * a `blur` event on it.
                     */
                    this.touched = false;
                    /**
                     * \@internal
                     */
                    this._onDisabledChange = [];
                }
                Object.defineProperty(AbstractControl.prototype, "parent", {
                    /**
                     * The parent control.
                     * @return {?}
                     */
                    get: function () { return this._parent; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "valid", {
                    /**
                     * A control is `valid` when its `status` is `VALID`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control has passed all of its validation tests,
                     * false otherwise.
                     */
                    get: function () { return this.status === VALID; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "invalid", {
                    /**
                     * A control is `invalid` when its `status` is `INVALID`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if this control has failed one or more of its validation checks,
                     * false otherwise.
                     */
                    get: function () { return this.status === INVALID; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "pending", {
                    /**
                     * A control is `pending` when its `status` is `PENDING`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if this control is in the process of conducting a validation check,
                     * false otherwise.
                     */
                    get: function () { return this.status == PENDING; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "disabled", {
                    /**
                     * A control is `disabled` when its `status` is `DISABLED`.
                     *
                     * Disabled controls are exempt from validation checks and
                     * are not included in the aggregate value of their ancestor
                     * controls.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control is disabled, false otherwise.
                     */
                    get: function () { return this.status === DISABLED; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "enabled", {
                    /**
                     * A control is `enabled` as long as its `status` is not `DISABLED`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control has any status other than 'DISABLED',
                     * false if the status is 'DISABLED'.
                     *
                     */
                    get: function () { return this.status !== DISABLED; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "dirty", {
                    /**
                     * A control is `dirty` if the user has changed the value
                     * in the UI.
                     *
                     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
                     * Programmatic changes to a control's value do not mark it dirty.
                     */
                    get: function () { return !this.pristine; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "untouched", {
                    /**
                     * True if the control has not been marked as touched
                     *
                     * A control is `untouched` if the user has not yet triggered
                     * a `blur` event on it.
                     * @return {?}
                     */
                    get: function () { return !this.touched; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "updateOn", {
                    /**
                     * Reports the update strategy of the `AbstractControl` (meaning
                     * the event on which the control updates itself).
                     * Possible values: `'change'` | `'blur'` | `'submit'`
                     * Default value: `'change'`
                     * @return {?}
                     */
                    get: function () {
                        return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the synchronous validators that are active on this control.  Calling
                 * this overwrites any existing sync validators.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @param {?} newValidator
                 * @return {?}
                 */
                AbstractControl.prototype.setValidators = function (newValidator) {
                    this.validator = coerceToValidator(newValidator);
                };
                /**
                 * Sets the async validators that are active on this control. Calling this
                 * overwrites any existing async validators.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @param {?} newValidator
                 * @return {?}
                 */
                AbstractControl.prototype.setAsyncValidators = function (newValidator) {
                    this.asyncValidator = coerceToAsyncValidator(newValidator);
                };
                /**
                 * Empties out the sync validator list.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.clearValidators = function () { this.validator = null; };
                /**
                 * Empties out the async validator list.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
                /**
                 * Marks the control as `touched`. A control is touched by focus and
                 * blur events that do not change the value.
                 *
                 * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsTouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = true;
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsTouched(opts);
                    }
                };
                /**
                 * Marks the control and all its descendant controls as `touched`.
                 * @see `markAsTouched()`
                 * @return {?}
                 */
                AbstractControl.prototype.markAllAsTouched = function () {
                    this.markAsTouched({ onlySelf: true });
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.markAllAsTouched(); }));
                };
                /**
                 * Marks the control as `untouched`.
                 *
                 * If the control has any children, also marks all children as `untouched`
                 * and recalculates the `touched` status of all parent controls.
                 *
                 * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events after the marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsUntouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = false;
                    this._pendingTouched = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.markAsUntouched({ onlySelf: true }); }));
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updateTouched(opts);
                    }
                };
                /**
                 * Marks the control as `dirty`. A control becomes dirty when
                 * the control's value is changed through the UI; compare `markAsTouched`.
                 *
                 * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsDirty = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = false;
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsDirty(opts);
                    }
                };
                /**
                 * Marks the control as `pristine`.
                 *
                 * If the control has any children, marks all children as `pristine`,
                 * and recalculates the `pristine` status of all parent
                 * controls.
                 *
                 * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
                 *
                 * @param {?=} opts Configuration options that determine how the control emits events after
                 * marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * @return {?}
                 */
                AbstractControl.prototype.markAsPristine = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = true;
                    this._pendingDirty = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.markAsPristine({ onlySelf: true }); }));
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updatePristine(opts);
                    }
                };
                /**
                 * Marks the control as `pending`.
                 *
                 * A control is pending while the control performs async validation.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes and
                 * emits events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
                 * observable emits an event with the latest status the control is marked pending.
                 * When false, no events are emitted.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.markAsPending = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).status = PENDING;
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsPending(opts);
                    }
                };
                /**
                 * Disables the control. This means the control is exempt from validation checks and
                 * excluded from the aggregate value of any parent. Its status is `DISABLED`.
                 *
                 * If the control has children, all children are also disabled.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates
                 * changes and emits events after the control is disabled.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is disabled.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.disable = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    // If parent has been marked artificially dirty we don't want to re-calculate the
                    // parent's dirtiness based on the children.
                    /** @type {?} */
                    var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
                    (( /** @type {?} */(this))).status = DISABLED;
                    (( /** @type {?} */(this))).errors = null;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.disable(Object.assign({}, opts, { onlySelf: true })); }));
                    this._updateValue();
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.valueChanges))).emit(this.value);
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    this._updateAncestors(Object.assign({}, opts, { skipPristineCheck: skipPristineCheck }));
                    this._onDisabledChange.forEach(( /**
                     * @param {?} changeFn
                     * @return {?}
                     */function (changeFn) { return changeFn(true); }));
                };
                /**
                 * Enables the control. This means the control is included in validation checks and
                 * the aggregate value of its parent. Its status recalculates based on its value and
                 * its validators.
                 *
                 * By default, if the control has children, all children are enabled.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configure options that control how the control propagates changes and
                 * emits events when marked as untouched
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is enabled.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.enable = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    // If parent has been marked artificially dirty we don't want to re-calculate the
                    // parent's dirtiness based on the children.
                    /** @type {?} */
                    var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
                    (( /** @type {?} */(this))).status = VALID;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.enable(Object.assign({}, opts, { onlySelf: true })); }));
                    this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
                    this._updateAncestors(Object.assign({}, opts, { skipPristineCheck: skipPristineCheck }));
                    this._onDisabledChange.forEach(( /**
                     * @param {?} changeFn
                     * @return {?}
                     */function (changeFn) { return changeFn(false); }));
                };
                /**
                 * @private
                 * @param {?} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateAncestors = function (opts) {
                    if (this._parent && !opts.onlySelf) {
                        this._parent.updateValueAndValidity(opts);
                        if (!opts.skipPristineCheck) {
                            this._parent._updatePristine();
                        }
                        this._parent._updateTouched();
                    }
                };
                /**
                 * @param {?} parent Sets the parent of the control
                 * @return {?}
                 */
                AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
                /**
                 * Recalculates the value and validation status of the control.
                 *
                 * By default, it also updates the value and validity of its ancestors.
                 *
                 * @param {?=} opts Configuration options determine how the control propagates changes and emits events
                 * after updates and validity checks are applied.
                 * * `onlySelf`: When true, only update this control. When false or not supplied,
                 * update all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is updated.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.updateValueAndValidity = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    this._setInitialStatus();
                    this._updateValue();
                    if (this.enabled) {
                        this._cancelExistingSubscription();
                        (( /** @type {?} */(this))).errors = this._runValidator();
                        (( /** @type {?} */(this))).status = this._calculateStatus();
                        if (this.status === VALID || this.status === PENDING) {
                            this._runAsyncValidator(opts.emitEvent);
                        }
                    }
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.valueChanges))).emit(this.value);
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent && !opts.onlySelf) {
                        this._parent.updateValueAndValidity(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateTreeValidity = function (opts) {
                    if (opts === void 0) { opts = { emitEvent: true }; }
                    this._forEachChild(( /**
                     * @param {?} ctrl
                     * @return {?}
                     */function (ctrl) { return ctrl._updateTreeValidity(opts); }));
                    this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._setInitialStatus = function () {
                    (( /** @type {?} */(this))).status = this._allControlsDisabled() ? DISABLED : VALID;
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._runValidator = function () {
                    return this.validator ? this.validator(this) : null;
                };
                /**
                 * @private
                 * @param {?=} emitEvent
                 * @return {?}
                 */
                AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
                    var _this = this;
                    if (this.asyncValidator) {
                        (( /** @type {?} */(this))).status = PENDING;
                        /** @type {?} */
                        var obs = toObservable(this.asyncValidator(this));
                        this._asyncValidationSubscription =
                            obs.subscribe(( /**
                             * @param {?} errors
                             * @return {?}
                             */function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); }));
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._cancelExistingSubscription = function () {
                    if (this._asyncValidationSubscription) {
                        this._asyncValidationSubscription.unsubscribe();
                    }
                };
                /**
                 * Sets errors on a form control when running validations manually, rather than automatically.
                 *
                 * Calling `setErrors` also updates the validity of the parent control.
                 *
                 * \@usageNotes
                 * ### Manually set the errors for a control
                 *
                 * ```
                 * const login = new FormControl('someLogin');
                 * login.setErrors({
                 *   notUnique: true
                 * });
                 *
                 * expect(login.valid).toEqual(false);
                 * expect(login.errors).toEqual({ notUnique: true });
                 *
                 * login.setValue('someOtherLogin');
                 *
                 * expect(login.valid).toEqual(true);
                 * ```
                 * @param {?} errors
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype.setErrors = function (errors, opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).errors = errors;
                    this._updateControlsErrors(opts.emitEvent !== false);
                };
                /**
                 * Retrieves a child control given the control's name or path.
                 *
                 * \@usageNotes
                 * ### Retrieve a nested control
                 *
                 * For example, to get a `name` control nested within a `person` sub-group:
                 *
                 * * `this.form.get('person.name');`
                 *
                 * -OR-
                 *
                 * * `this.form.get(['person', 'name']);`
                 * @param {?} path A dot-delimited string or array of string/number values that define the path to the
                 * control.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
                /**
                 * \@description
                 * Reports error data for the control with the given path.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} error data for that particular error. If the control or error is not present,
                 * null is returned.
                 */
                AbstractControl.prototype.getError = function (errorCode, path) {
                    /** @type {?} */
                    var control = path ? this.get(path) : this;
                    return control && control.errors ? control.errors[errorCode] : null;
                };
                /**
                 * \@description
                 * Reports whether the control with the given path has the error specified.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * If no path is given, this method checks for the error on the current control.
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} whether the given error is present in the control at the given path.
                 *
                 * If the control is not present, false is returned.
                 */
                AbstractControl.prototype.hasError = function (errorCode, path) {
                    return !!this.getError(errorCode, path);
                };
                Object.defineProperty(AbstractControl.prototype, "root", {
                    /**
                     * Retrieves the top-level ancestor of this control.
                     * @return {?}
                     */
                    get: function () {
                        /** @type {?} */
                        var x = this;
                        while (x._parent) {
                            x = x._parent;
                        }
                        return x;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} emitEvent
                 * @return {?}
                 */
                AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
                    (( /** @type {?} */(this))).status = this._calculateStatus();
                    if (emitEvent) {
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent) {
                        this._parent._updateControlsErrors(emitEvent);
                    }
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._initObservables = function () {
                    (( /** @type {?} */(this))).valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    (( /** @type {?} */(this))).statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._calculateStatus = function () {
                    if (this._allControlsDisabled())
                        return DISABLED;
                    if (this.errors)
                        return INVALID;
                    if (this._anyControlsHaveStatus(PENDING))
                        return PENDING;
                    if (this._anyControlsHaveStatus(INVALID))
                        return INVALID;
                    return VALID;
                };
                /**
                 * \@internal
                 * @param {?} status
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsHaveStatus = function (status) {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.status === status; }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsDirty = function () {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.dirty; }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsTouched = function () {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.touched; }));
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updatePristine = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = !this._anyControlsDirty();
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updatePristine(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateTouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = this._anyControlsTouched();
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updateTouched(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?} formState
                 * @return {?}
                 */
                AbstractControl.prototype._isBoxedValue = function (formState) {
                    return typeof formState === 'object' && formState !== null &&
                        Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
                };
                /**
                 * \@internal
                 * @param {?} fn
                 * @return {?}
                 */
                AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._setUpdateStrategy = function (opts) {
                    if (isOptionsObj(opts) && (( /** @type {?} */(opts))).updateOn != null) {
                        this._updateOn = ( /** @type {?} */((( /** @type {?} */(opts))).updateOn));
                    }
                };
                /**
                 * Check to see if parent has been marked artificially dirty.
                 *
                 * \@internal
                 * @private
                 * @param {?=} onlySelf
                 * @return {?}
                 */
                AbstractControl.prototype._parentMarkedDirty = function (onlySelf) {
                    /** @type {?} */
                    var parentDirty = this._parent && this._parent.dirty;
                    return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
                };
                return AbstractControl;
            }());
            if (false) { }
            /**
             * Tracks the value and validation status of an individual form control.
             *
             * This is one of the three fundamental building blocks of Angular forms, along with
             * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
             * implements most of the base functionality for accessing the value, validation status,
             * user interactions and events.
             *
             * @see `AbstractControl`
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see [Usage Notes](#usage-notes)
             *
             * \@usageNotes
             *
             * ### Initializing Form Controls
             *
             * Instantiate a `FormControl`, with an initial value.
             *
             * ```ts
             * const control = new FormControl('some value');
             * console.log(control.value);     // 'some value'
             * ```
             *
             * The following example initializes the control with a form state object. The `value`
             * and `disabled` keys are required in this case.
             *
             * ```ts
             * const control = new FormControl({ value: 'n/a', disabled: true });
             * console.log(control.value);     // 'n/a'
             * console.log(control.status);    // 'DISABLED'
             * ```
             *
             * The following example initializes the control with a sync validator.
             *
             * ```ts
             * const control = new FormControl('', Validators.required);
             * console.log(control.value);      // ''
             * console.log(control.status);     // 'INVALID'
             * ```
             *
             * The following example initializes the control using an options object.
             *
             * ```ts
             * const control = new FormControl('', {
             *    validators: Validators.required,
             *    asyncValidators: myAsyncValidator
             * });
             * ```
             *
             * ### Configure the control to update on a blur event
             *
             * Set the `updateOn` option to `'blur'` to update on the blur `event`.
             *
             * ```ts
             * const control = new FormControl('', { updateOn: 'blur' });
             * ```
             *
             * ### Configure the control to update on a submit event
             *
             * Set the `updateOn` option to `'submit'` to update on a submit `event`.
             *
             * ```ts
             * const control = new FormControl('', { updateOn: 'submit' });
             * ```
             *
             * ### Reset the control back to an initial value
             *
             * You reset to a specific form state by passing through a standalone
             * value or a form state object that contains both a value and a disabled state
             * (these are the only two properties that cannot be calculated).
             *
             * ```ts
             * const control = new FormControl('Nancy');
             *
             * console.log(control.value); // 'Nancy'
             *
             * control.reset('Drew');
             *
             * console.log(control.value); // 'Drew'
             * ```
             *
             * ### Reset the control back to an initial value and disabled
             *
             * ```
             * const control = new FormControl('Nancy');
             *
             * console.log(control.value); // 'Nancy'
             * console.log(control.status); // 'VALID'
             *
             * control.reset({ value: 'Drew', disabled: true });
             *
             * console.log(control.value); // 'Drew'
             * console.log(control.status); // 'DISABLED'
             * ```
             *
             * \@publicApi
             */
            var FormControl = /** @class */ (function (_super) {
                __extends(FormControl, _super);
                /**
                 * Creates a new `FormControl` instance.
                 *
                 * @param {?=} formState Initializes the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormControl(formState, validatorOrOpts, asyncValidator) {
                    if (formState === void 0) { formState = null; }
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    /**
                     * \@internal
                     */
                    _this._onChange = [];
                    _this._applyFormState(formState);
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    _this._initObservables();
                    return _this;
                }
                /**
                 * Sets a new value for the form control.
                 *
                 * @param {?} value The new value for the control.
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events when the value changes.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
                 * `onChange` event to
                 * update the view.
                 * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
                 * `ngModelChange`
                 * event to update the model.
                 *
                 * @return {?}
                 */
                FormControl.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    (( /** @type {?} */(this))).value = this._pendingValue = value;
                    if (this._onChange.length && options.emitModelToViewChange !== false) {
                        this._onChange.forEach(( /**
                         * @param {?} changeFn
                         * @return {?}
                         */function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); }));
                    }
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of a control.
                 *
                 * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
                 * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
                 * `FormArrays`, where it does behave differently.
                 *
                 * @see `setValue` for options
                 * @param {?} value
                 * @param {?=} options
                 * @return {?}
                 */
                FormControl.prototype.patchValue = function (value, options) {
                    if (options === void 0) { options = {}; }
                    this.setValue(value, options);
                };
                /**
                 * Resets the form control, marking it `pristine` and `untouched`, and setting
                 * the value to null.
                 *
                 * @param {?=} formState Resets the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events after the value changes.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 *
                 * @return {?}
                 */
                FormControl.prototype.reset = function (formState, options) {
                    if (formState === void 0) { formState = null; }
                    if (options === void 0) { options = {}; }
                    this._applyFormState(formState);
                    this.markAsPristine(options);
                    this.markAsUntouched(options);
                    this.setValue(this.value, options);
                    this._pendingChange = false;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._updateValue = function () { };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormControl.prototype._anyControls = function (condition) { return false; };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
                /**
                 * Register a listener for change events.
                 *
                 * @param {?} fn The method that is called when the value changes
                 * @return {?}
                 */
                FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._clearChangeFns = function () {
                    this._onChange = [];
                    this._onDisabledChange = [];
                    this._onCollectionChange = ( /**
                     * @return {?}
                     */function () { });
                };
                /**
                 * Register a listener for disabled events.
                 *
                 * @param {?} fn The method that is called when the disabled status changes.
                 * @return {?}
                 */
                FormControl.prototype.registerOnDisabledChange = function (fn) {
                    this._onDisabledChange.push(fn);
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormControl.prototype._forEachChild = function (cb) { };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._syncPendingControls = function () {
                    if (this.updateOn === 'submit') {
                        if (this._pendingDirty)
                            this.markAsDirty();
                        if (this._pendingTouched)
                            this.markAsTouched();
                        if (this._pendingChange) {
                            this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                            return true;
                        }
                    }
                    return false;
                };
                /**
                 * @private
                 * @param {?} formState
                 * @return {?}
                 */
                FormControl.prototype._applyFormState = function (formState) {
                    if (this._isBoxedValue(formState)) {
                        (( /** @type {?} */(this))).value = this._pendingValue = formState.value;
                        formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                            this.enable({ onlySelf: true, emitEvent: false });
                    }
                    else {
                        (( /** @type {?} */(this))).value = this._pendingValue = formState;
                    }
                };
                return FormControl;
            }(AbstractControl));
            if (false) { }
            /**
             * Tracks the value and validity state of a group of `FormControl` instances.
             *
             * A `FormGroup` aggregates the values of each child `FormControl` into one object,
             * with each control name as the key.  It calculates its status by reducing the status values
             * of its children. For example, if one of the controls in a group is invalid, the entire
             * group becomes invalid.
             *
             * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
             * along with `FormControl` and `FormArray`.
             *
             * When instantiating a `FormGroup`, pass in a collection of child controls as the first
             * argument. The key for each child registers the name for the control.
             *
             * \@usageNotes
             *
             * ### Create a form group with 2 controls
             *
             * ```
             * const form = new FormGroup({
             *   first: new FormControl('Nancy', Validators.minLength(2)),
             *   last: new FormControl('Drew'),
             * });
             *
             * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
             * console.log(form.status);  // 'VALID'
             * ```
             *
             * ### Create a form group with a group-level validator
             *
             * You include group-level validators as the second arg, or group-level async
             * validators as the third arg. These come in handy when you want to perform validation
             * that considers the value of more than one child control.
             *
             * ```
             * const form = new FormGroup({
             *   password: new FormControl('', Validators.minLength(2)),
             *   passwordConfirm: new FormControl('', Validators.minLength(2)),
             * }, passwordMatchValidator);
             *
             *
             * function passwordMatchValidator(g: FormGroup) {
             *    return g.get('password').value === g.get('passwordConfirm').value
             *       ? null : {'mismatch': true};
             * }
             * ```
             *
             * Like `FormControl` instances, you choose to pass in
             * validators and async validators as part of an options object.
             *
             * ```
             * const form = new FormGroup({
             *   password: new FormControl('')
             *   passwordConfirm: new FormControl('')
             * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
             * ```
             *
             * ### Set the updateOn property for all controls in a form group
             *
             * The options object is used to set a default value for each child
             * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
             * group level, all child controls default to 'blur', unless the child
             * has explicitly specified a different `updateOn` value.
             *
             * ```ts
             * const c = new FormGroup({
             *   one: new FormControl()
             * }, { updateOn: 'blur' });
             * ```
             *
             * \@publicApi
             */
            var FormGroup = /** @class */ (function (_super) {
                __extends(FormGroup, _super);
                /**
                 * Creates a new `FormGroup` instance.
                 *
                 * @param {?} controls A collection of child controls. The key for each child is the name
                 * under which it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormGroup(controls, validatorOrOpts, asyncValidator) {
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    _this.controls = controls;
                    _this._initObservables();
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this._setUpControls();
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    return _this;
                }
                /**
                 * Registers a control with the group's list of controls.
                 *
                 * This method does not update the value or validity of the control.
                 * Use {\@link FormGroup#addControl addControl} instead.
                 *
                 * @param {?} name The control name to register in the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.registerControl = function (name, control) {
                    if (this.controls[name])
                        return this.controls[name];
                    this.controls[name] = control;
                    control.setParent(this);
                    control._registerOnCollectionChange(this._onCollectionChange);
                    return control;
                };
                /**
                 * Add a control to this group.
                 *
                 * This method also updates the value and validity of the control.
                 *
                 * @param {?} name The control name to add to the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.addControl = function (name, control) {
                    this.registerControl(name, control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Remove a control from this group.
                 *
                 * @param {?} name The control name to remove from the collection
                 * @return {?}
                 */
                FormGroup.prototype.removeControl = function (name) {
                    if (this.controls[name])
                        this.controls[name]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    delete (this.controls[name]);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Replace an existing control.
                 *
                 * @param {?} name The control name to replace in the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.setControl = function (name, control) {
                    if (this.controls[name])
                        this.controls[name]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    delete (this.controls[name]);
                    if (control)
                        this.registerControl(name, control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Check whether there is an enabled control with the given name in the group.
                 *
                 * Reports false for disabled controls. If you'd like to check for existence in the group
                 * only, use {\@link AbstractControl#get get} instead.
                 *
                 * @param {?} controlName The control name to check for existence in the collection
                 *
                 * @return {?} false for disabled controls, true otherwise.
                 */
                FormGroup.prototype.contains = function (controlName) {
                    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
                };
                /**
                 * Sets the value of the `FormGroup`. It accepts an object that matches
                 * the structure of the group, with control names as keys.
                 *
                 * \@usageNotes
                 * ### Set the complete value for the form group
                 *
                 * ```
                 * const form = new FormGroup({
                 *   first: new FormControl(),
                 *   last: new FormControl()
                 * });
                 *
                 * console.log(form.value);   // {first: null, last: null}
                 *
                 * form.setValue({first: 'Nancy', last: 'Drew'});
                 * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
                 * ```
                 *
                 * @throws When strict checks fail, such as setting the value of a control
                 * that doesn't exist or if you exclude a value of a control that does exist.
                 *
                 * @param {?} value The new value for the control that matches the structure of the group.
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events after the value changes.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                FormGroup.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    this._checkAllValuesPresent(value);
                    Object.keys(value).forEach(( /**
                     * @param {?} name
                     * @return {?}
                     */function (/**
                     * @param {?} name
                     * @return {?}
                     */ name) {
                        _this._throwIfControlMissing(name);
                        _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of the `FormGroup`. It accepts an object with control
                 * names as keys, and does its best to match the values to the correct controls
                 * in the group.
                 *
                 * It accepts both super-sets and sub-sets of the group without throwing an error.
                 *
                 * \@usageNotes
                 * ### Patch the value for a form group
                 *
                 * ```
                 * const form = new FormGroup({
                 *    first: new FormControl(),
                 *    last: new FormControl()
                 * });
                 * console.log(form.value);   // {first: null, last: null}
                 *
                 * form.patchValue({first: 'Nancy'});
                 * console.log(form.value);   // {first: 'Nancy', last: null}
                 * ```
                 *
                 * @param {?} value The object that matches the structure of the group.
                 * @param {?=} options Configuration options that determine how the control propagates changes and
                 * emits events after the value is patched.
                 * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
                 * true.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormGroup.prototype.patchValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    Object.keys(value).forEach(( /**
                     * @param {?} name
                     * @return {?}
                     */function (/**
                     * @param {?} name
                     * @return {?}
                     */ name) {
                        if (_this.controls[name]) {
                            _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                        }
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
                 * the value of all descendants to null.
                 *
                 * You reset to a specific form state by passing in a map of states
                 * that matches the structure of your form, with control names as keys. The state
                 * is a standalone value or a form state object with both a value and a disabled
                 * status.
                 *
                 * \@usageNotes
                 *
                 * ### Reset the form group values
                 *
                 * ```ts
                 * const form = new FormGroup({
                 *   first: new FormControl('first name'),
                 *   last: new FormControl('last name')
                 * });
                 *
                 * console.log(form.value);  // {first: 'first name', last: 'last name'}
                 *
                 * form.reset({ first: 'name', last: 'last name' });
                 *
                 * console.log(form.value);  // {first: 'name', last: 'last name'}
                 * ```
                 *
                 * ### Reset the form group values and disabled status
                 *
                 * ```
                 * const form = new FormGroup({
                 *   first: new FormControl('first name'),
                 *   last: new FormControl('last name')
                 * });
                 *
                 * form.reset({
                 *   first: {value: 'name', disabled: true},
                 *   last: 'last'
                 * });
                 *
                 * console.log(this.form.value);  // {first: 'name', last: 'last name'}
                 * console.log(this.form.get('first').status);  // 'DISABLED'
                 * ```
                 * @param {?=} value Resets the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events when the group is reset.
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * @return {?}
                 */
                FormGroup.prototype.reset = function (value, options) {
                    if (value === void 0) { value = {}; }
                    if (options === void 0) { options = {}; }
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this._updatePristine(options);
                    this._updateTouched(options);
                    this.updateValueAndValidity(options);
                };
                /**
                 * The aggregate value of the `FormGroup`, including any disabled controls.
                 *
                 * Retrieves all values regardless of disabled status.
                 * The `value` property is the best way to get the value of the group, because
                 * it excludes disabled controls in the `FormGroup`.
                 * @return {?}
                 */
                FormGroup.prototype.getRawValue = function () {
                    return this._reduceChildren({}, ( /**
                     * @param {?} acc
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (acc, control, name) {
                        acc[name] = control instanceof FormControl ? control.value : (( /** @type {?} */(control))).getRawValue();
                        return acc;
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._syncPendingControls = function () {
                    /** @type {?} */
                    var subtreeUpdated = this._reduceChildren(false, ( /**
                     * @param {?} updated
                     * @param {?} child
                     * @return {?}
                     */function (updated, child) {
                        return child._syncPendingControls() ? true : updated;
                    }));
                    if (subtreeUpdated)
                        this.updateValueAndValidity({ onlySelf: true });
                    return subtreeUpdated;
                };
                /**
                 * \@internal
                 * @param {?} name
                 * @return {?}
                 */
                FormGroup.prototype._throwIfControlMissing = function (name) {
                    if (!Object.keys(this.controls).length) {
                        throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    }
                    if (!this.controls[name]) {
                        throw new Error("Cannot find form control with name: " + name + ".");
                    }
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormGroup.prototype._forEachChild = function (cb) {
                    var _this = this;
                    Object.keys(this.controls).forEach(( /**
                     * @param {?} k
                     * @return {?}
                     */function (/**
                     * @param {?} k
                     * @return {?}
                     */ k) { return cb(_this.controls[k], k); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._setUpControls = function () {
                    var _this = this;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        control.setParent(_this);
                        control._registerOnCollectionChange(_this._onCollectionChange);
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._updateValue = function () { (( /** @type {?} */(this))).value = this._reduceValue(); };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormGroup.prototype._anyControls = function (condition) {
                    var _this = this;
                    /** @type {?} */
                    var res = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        res = res || (_this.contains(name) && condition(control));
                    }));
                    return res;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._reduceValue = function () {
                    var _this = this;
                    return this._reduceChildren({}, ( /**
                     * @param {?} acc
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (acc, control, name) {
                        if (control.enabled || _this.disabled) {
                            acc[name] = control.value;
                        }
                        return acc;
                    }));
                };
                /**
                 * \@internal
                 * @param {?} initValue
                 * @param {?} fn
                 * @return {?}
                 */
                FormGroup.prototype._reduceChildren = function (initValue, fn) {
                    /** @type {?} */
                    var res = initValue;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) { res = fn(res, control, name); }));
                    return res;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._allControlsDisabled = function () {
                    var e_3, _a;
                    try {
                        for (var _b = __values(Object.keys(this.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var controlName = _c.value;
                            if (this.controls[controlName].enabled) {
                                return false;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    return Object.keys(this.controls).length > 0 || this.disabled;
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                FormGroup.prototype._checkAllValuesPresent = function (value) {
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        if (value[name] === undefined) {
                            throw new Error("Must supply a value for form control with name: '" + name + "'.");
                        }
                    }));
                };
                return FormGroup;
            }(AbstractControl));
            if (false) { }
            /**
             * Tracks the value and validity state of an array of `FormControl`,
             * `FormGroup` or `FormArray` instances.
             *
             * A `FormArray` aggregates the values of each child `FormControl` into an array.
             * It calculates its status by reducing the status values of its children. For example, if one of
             * the controls in a `FormArray` is invalid, the entire array becomes invalid.
             *
             * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
             * along with `FormControl` and `FormGroup`.
             *
             * \@usageNotes
             *
             * ### Create an array of form controls
             *
             * ```
             * const arr = new FormArray([
             *   new FormControl('Nancy', Validators.minLength(2)),
             *   new FormControl('Drew'),
             * ]);
             *
             * console.log(arr.value);   // ['Nancy', 'Drew']
             * console.log(arr.status);  // 'VALID'
             * ```
             *
             * ### Create a form array with array-level validators
             *
             * You include array-level validators and async validators. These come in handy
             * when you want to perform validation that considers the value of more than one child
             * control.
             *
             * The two types of validators are passed in separately as the second and third arg
             * respectively, or together as part of an options object.
             *
             * ```
             * const arr = new FormArray([
             *   new FormControl('Nancy'),
             *   new FormControl('Drew')
             * ], {validators: myValidator, asyncValidators: myAsyncValidator});
             * ```
             *
             * ### Set the updateOn property for all controls in a form array
             *
             * The options object is used to set a default value for each child
             * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
             * array level, all child controls default to 'blur', unless the child
             * has explicitly specified a different `updateOn` value.
             *
             * ```ts
             * const arr = new FormArray([
             *    new FormControl()
             * ], {updateOn: 'blur'});
             * ```
             *
             * ### Adding or removing controls from a form array
             *
             * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
             * in `FormArray` itself. These methods ensure the controls are properly tracked in the
             * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
             * the `FormArray` directly, as that result in strange and unexpected behavior such
             * as broken change detection.
             *
             * \@publicApi
             */
            var FormArray = /** @class */ (function (_super) {
                __extends(FormArray, _super);
                /**
                 * Creates a new `FormArray` instance.
                 *
                 * @param {?} controls An array of child controls. Each child control is given an index
                 * where it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormArray(controls, validatorOrOpts, asyncValidator) {
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    _this.controls = controls;
                    _this._initObservables();
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this._setUpControls();
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    return _this;
                }
                /**
                 * Get the `AbstractControl` at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to retrieve the control
                 * @return {?}
                 */
                FormArray.prototype.at = function (index) { return this.controls[index]; };
                /**
                 * Insert a new `AbstractControl` at the end of the array.
                 *
                 * @param {?} control Form control to be inserted
                 * @return {?}
                 */
                FormArray.prototype.push = function (control) {
                    this.controls.push(control);
                    this._registerControl(control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Insert a new `AbstractControl` at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to insert the control
                 * @param {?} control Form control to be inserted
                 * @return {?}
                 */
                FormArray.prototype.insert = function (index, control) {
                    this.controls.splice(index, 0, control);
                    this._registerControl(control);
                    this.updateValueAndValidity();
                };
                /**
                 * Remove the control at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to remove the control
                 * @return {?}
                 */
                FormArray.prototype.removeAt = function (index) {
                    if (this.controls[index])
                        this.controls[index]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this.controls.splice(index, 1);
                    this.updateValueAndValidity();
                };
                /**
                 * Replace an existing control.
                 *
                 * @param {?} index Index in the array to replace the control
                 * @param {?} control The `AbstractControl` control to replace the existing control
                 * @return {?}
                 */
                FormArray.prototype.setControl = function (index, control) {
                    if (this.controls[index])
                        this.controls[index]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this.controls.splice(index, 1);
                    if (control) {
                        this.controls.splice(index, 0, control);
                        this._registerControl(control);
                    }
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                Object.defineProperty(FormArray.prototype, "length", {
                    /**
                     * Length of the control array.
                     * @return {?}
                     */
                    get: function () { return this.controls.length; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the value of the `FormArray`. It accepts an array that matches
                 * the structure of the control.
                 *
                 * This method performs strict checks, and throws an error if you try
                 * to set the value of a control that doesn't exist or if you exclude the
                 * value of a control.
                 *
                 * \@usageNotes
                 * ### Set the values for the controls in the form array
                 *
                 * ```
                 * const arr = new FormArray([
                 *   new FormControl(),
                 *   new FormControl()
                 * ]);
                 * console.log(arr.value);   // [null, null]
                 *
                 * arr.setValue(['Nancy', 'Drew']);
                 * console.log(arr.value);   // ['Nancy', 'Drew']
                 * ```
                 *
                 * @param {?} value Array of values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    this._checkAllValuesPresent(value);
                    value.forEach(( /**
                     * @param {?} newValue
                     * @param {?} index
                     * @return {?}
                     */function (newValue, index) {
                        _this._throwIfControlMissing(index);
                        _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of the `FormArray`. It accepts an array that matches the
                 * structure of the control, and does its best to match the values to the correct
                 * controls in the group.
                 *
                 * It accepts both super-sets and sub-sets of the array without throwing an error.
                 *
                 * \@usageNotes
                 * ### Patch the values for controls in a form array
                 *
                 * ```
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * console.log(arr.value);   // [null, null]
                 *
                 * arr.patchValue(['Nancy']);
                 * console.log(arr.value);   // ['Nancy', null]
                 * ```
                 *
                 * @param {?} value Array of latest values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.patchValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    value.forEach(( /**
                     * @param {?} newValue
                     * @param {?} index
                     * @return {?}
                     */function (newValue, index) {
                        if (_this.at(index)) {
                            _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                        }
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
                 * value of all descendants to null or null maps.
                 *
                 * You reset to a specific form state by passing in an array of states
                 * that matches the structure of the control. The state is a standalone value
                 * or a form state object with both a value and a disabled status.
                 *
                 * \@usageNotes
                 * ### Reset the values in a form array
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * arr.reset(['name', 'last name']);
                 *
                 * console.log(this.arr.value);  // ['name', 'last name']
                 * ```
                 *
                 * ### Reset the values in a form array and the disabled status for the first control
                 *
                 * ```
                 * this.arr.reset([
                 *   {value: 'name', disabled: true},
                 *   'last'
                 * ]);
                 *
                 * console.log(this.arr.value);  // ['name', 'last name']
                 * console.log(this.arr.get(0).status);  // 'DISABLED'
                 * ```
                 *
                 * @param {?=} value Array of values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.reset = function (value, options) {
                    if (value === void 0) { value = []; }
                    if (options === void 0) { options = {}; }
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} index
                     * @return {?}
                     */function (control, index) {
                        control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this._updatePristine(options);
                    this._updateTouched(options);
                    this.updateValueAndValidity(options);
                };
                /**
                 * The aggregate value of the array, including any disabled controls.
                 *
                 * Reports all values regardless of disabled status.
                 * For enabled controls only, the `value` property is the best way to get the value of the array.
                 * @return {?}
                 */
                FormArray.prototype.getRawValue = function () {
                    return this.controls.map(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        return control instanceof FormControl ? control.value : (( /** @type {?} */(control))).getRawValue();
                    }));
                };
                /**
                 * Remove all controls in the `FormArray`.
                 *
                 * \@usageNotes
                 * ### Remove all elements from a FormArray
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * console.log(arr.length);  // 2
                 *
                 * arr.clear();
                 * console.log(arr.length);  // 0
                 * ```
                 *
                 * It's a simpler and more efficient alternative to removing all elements one by one:
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 *
                 * while (arr.length) {
                 *    arr.removeAt(0);
                 * }
                 * ```
                 * @return {?}
                 */
                FormArray.prototype.clear = function () {
                    if (this.controls.length < 1)
                        return;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control._registerOnCollectionChange(( /**
                     * @return {?}
                     */function () { })); }));
                    this.controls.splice(0);
                    this.updateValueAndValidity();
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._syncPendingControls = function () {
                    /** @type {?} */
                    var subtreeUpdated = this.controls.reduce(( /**
                     * @param {?} updated
                     * @param {?} child
                     * @return {?}
                     */function (updated, child) {
                        return child._syncPendingControls() ? true : updated;
                    }), false);
                    if (subtreeUpdated)
                        this.updateValueAndValidity({ onlySelf: true });
                    return subtreeUpdated;
                };
                /**
                 * \@internal
                 * @param {?} index
                 * @return {?}
                 */
                FormArray.prototype._throwIfControlMissing = function (index) {
                    if (!this.controls.length) {
                        throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    }
                    if (!this.at(index)) {
                        throw new Error("Cannot find form control at index " + index);
                    }
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormArray.prototype._forEachChild = function (cb) {
                    this.controls.forEach(( /**
                     * @param {?} control
                     * @param {?} index
                     * @return {?}
                     */function (control, index) { cb(control, index); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._updateValue = function () {
                    var _this = this;
                    (( /** @type {?} */(this))).value =
                        this.controls.filter(( /**
                         * @param {?} control
                         * @return {?}
                         */function (control) { return control.enabled || _this.disabled; }))
                            .map(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.value; }));
                };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormArray.prototype._anyControls = function (condition) {
                    return this.controls.some(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.enabled && condition(control); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._setUpControls = function () {
                    var _this = this;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return _this._registerControl(control); }));
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                FormArray.prototype._checkAllValuesPresent = function (value) {
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} i
                     * @return {?}
                     */function (control, i) {
                        if (value[i] === undefined) {
                            throw new Error("Must supply a value for form control at index: " + i + ".");
                        }
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._allControlsDisabled = function () {
                    var e_4, _a;
                    try {
                        for (var _b = __values(this.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var control = _c.value;
                            if (control.enabled)
                                return false;
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    return this.controls.length > 0 || this.disabled;
                };
                /**
                 * @private
                 * @param {?} control
                 * @return {?}
                 */
                FormArray.prototype._registerControl = function (control) {
                    control.setParent(this);
                    control._registerOnCollectionChange(this._onCollectionChange);
                };
                return FormArray;
            }(AbstractControl));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formDirectiveProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgForm; }))
            };
            var ɵ0 = /**
             * @return {?}
             */ function () { return Promise.resolve(null); };
            /** @type {?} */
            var resolvedPromise = ((ɵ0))();
            /**
             * \@description
             * Creates a top-level `FormGroup` instance and binds it to a form
             * to track aggregate form value and validation status.
             *
             * As soon as you import the `FormsModule`, this directive becomes active by default on
             * all `<form>` tags.  You don't need to add a special selector.
             *
             * You optionally export the directive into a local template variable using `ngForm` as the key
             * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
             * `FormGroup` instance are duplicated on the directive itself, so a reference to it
             * gives you access to the aggregate value and validity status of the form, as well as
             * user interaction properties like `dirty` and `touched`.
             *
             * To register child controls with the form, use `NgModel` with a `name`
             * attribute. You may use `NgModelGroup` to create sub-groups within the form.
             *
             * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
             * triggered a form submission. The `ngSubmit` event emits the original form
             * submission event.
             *
             * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
             * To import the `FormsModule` but skip its usage in some forms,
             * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
             * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
             * unnecessary because the `<form>` tags are inert. In that case, you would
             * refrain from using the `formGroup` directive.
             *
             * \@usageNotes
             *
             * ### Migrating from deprecated ngForm selector
             *
             * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
             * in Angular v9.
             *
             * This has been deprecated to keep selectors consistent with other core Angular selectors,
             * as element selectors are typically written in kebab-case.
             *
             * Now deprecated:
             * ```html
             * <ngForm #myForm="ngForm">
             * ```
             *
             * After:
             * ```html
             * <ng-form #myForm="ngForm">
             * ```
             *
             * ### Listening for form submission
             *
             * The following example shows how to capture the form values from the "ngSubmit" event.
             *
             * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
             *
             * ### Setting the update options
             *
             * The following example shows you how to change the "updateOn" option from its default using
             * ngFormOptions.
             *
             * ```html
             * <form [ngFormOptions]="{updateOn: 'blur'}">
             *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
             * </form>
             * ```
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgForm = /** @class */ (function (_super) {
                __extends(NgForm, _super);
                /**
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function NgForm(validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    /**
                     * \@description
                     * Returns whether the form submission has been triggered.
                     */
                    _this.submitted = false;
                    _this._directives = [];
                    /**
                     * \@description
                     * Event emitter for the "ngSubmit" event
                     */
                    _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.form =
                        new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
                    return _this;
                }
                /**
                 * \@description
                 * Lifecycle method called after the view is initialized. For internal use only.
                 * @return {?}
                 */
                NgForm.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); };
                Object.defineProperty(NgForm.prototype, "formDirective", {
                    /**
                     * \@description
                     * The directive instance.
                     * @return {?}
                     */
                    get: function () { return this; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "control", {
                    /**
                     * \@description
                     * The internal `FormGroup` instance.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array representing the path to this group. Because this directive
                     * always lives at the top level of a form, it is always an empty array.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "controls", {
                    /**
                     * \@description
                     * Returns a map of the controls in this group.
                     * @return {?}
                     */
                    get: function () { return this.form.controls; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that sets up the control directive in this group, re-calculates its value
                 * and validity, and adds the instance to the internal list of directives.
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.addControl = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        (( /** @type {?} */(dir))).control =
                            ( /** @type {?} */(container.registerControl(dir.name, dir.control)));
                        setUpControl(dir.control, dir);
                        dir.control.updateValueAndValidity({ emitEvent: false });
                        _this._directives.push(dir);
                    }));
                };
                /**
                 * \@description
                 * Retrieves the `FormControl` instance from the provided `NgModel` directive.
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.getControl = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * \@description
                 * Removes the `NgModel` instance from the internal list of directives
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.removeControl = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        if (container) {
                            container.removeControl(dir.name);
                        }
                        removeDir(_this._directives, dir);
                    }));
                };
                /**
                 * \@description
                 * Adds a new `NgModelGroup` directive instance to the form.
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.addFormGroup = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        /** @type {?} */
                        var group = new FormGroup({});
                        setUpFormContainer(group, dir);
                        container.registerControl(dir.name, group);
                        group.updateValueAndValidity({ emitEvent: false });
                    }));
                };
                /**
                 * \@description
                 * Removes the `NgModelGroup` directive instance from the form.
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.removeFormGroup = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        if (container) {
                            container.removeControl(dir.name);
                        }
                    }));
                };
                /**
                 * \@description
                 * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.getFormGroup = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Sets the new value for the provided `NgControl` directive.
                 *
                 * @param {?} dir The `NgControl` directive instance.
                 * @param {?} value The new value for the directive's control.
                 * @return {?}
                 */
                NgForm.prototype.updateModel = function (dir, value) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var ctrl = ( /** @type {?} */(_this.form.get(( /** @type {?} */(dir.path)))));
                        ctrl.setValue(value);
                    }));
                };
                /**
                 * \@description
                 * Sets the value for this `FormGroup`.
                 *
                 * @param {?} value The new value
                 * @return {?}
                 */
                NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
                /**
                 * \@description
                 * Method called when the "submit" event is triggered on the form.
                 * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
                 *
                 * @param {?} $event The "submit" event object
                 * @return {?}
                 */
                NgForm.prototype.onSubmit = function ($event) {
                    (( /** @type {?} */(this))).submitted = true;
                    syncPendingControls(this.form, this._directives);
                    this.ngSubmit.emit($event);
                    return false;
                };
                /**
                 * \@description
                 * Method called when the "reset" event is triggered on the form.
                 * @return {?}
                 */
                NgForm.prototype.onReset = function () { this.resetForm(); };
                /**
                 * \@description
                 * Resets the form to an initial value and resets its submitted status.
                 *
                 * @param {?=} value The new value for the form.
                 * @return {?}
                 */
                NgForm.prototype.resetForm = function (value) {
                    if (value === void 0) { value = undefined; }
                    this.form.reset(value);
                    (( /** @type {?} */(this))).submitted = false;
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgForm.prototype._setUpdateStrategy = function () {
                    if (this.options && this.options.updateOn != null) {
                        this.form._updateOn = this.options.updateOn;
                    }
                };
                /**
                 * \@internal
                 * @param {?} path
                 * @return {?}
                 */
                NgForm.prototype._findContainer = function (path) {
                    path.pop();
                    return path.length ? ( /** @type {?} */(this.form.get(path))) : this.form;
                };
                return NgForm;
            }(ControlContainer));
            NgForm.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
                            providers: [formDirectiveProvider],
                            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                            outputs: ['ngSubmit'],
                            exportAs: 'ngForm'
                        },] }
            ];
            /** @nocollapse */
            NgForm.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            NgForm.propDecorators = {
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngFormOptions',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var TemplateDrivenErrors = /** @class */ (function () {
                function TemplateDrivenErrors() {
                }
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.modelParentException = function () {
                    throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.formGroupNameException = function () {
                    throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.missingNameException = function () {
                    throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.modelGroupParentException = function () {
                    throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.ngFormWarning = function () {
                    console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
                };
                return TemplateDrivenErrors;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
             * @type {?}
             */
            var NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgFormSelectorWarning');
            /**
             * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
             *
             * @deprecated in Angular v6 and will be removed in Angular v9.
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgFormSelectorWarning = /** @class */ (function () {
                /**
                 * @param {?} ngFormWarning
                 */
                function NgFormSelectorWarning(ngFormWarning) {
                    if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning._ngFormWarning) ||
                        ngFormWarning === 'always') {
                        TemplateDrivenErrors.ngFormWarning();
                        NgFormSelectorWarning._ngFormWarning = true;
                    }
                }
                return NgFormSelectorWarning;
            }());
            /**
             * Static property used to track whether the deprecation warning for this selector has been sent.
             * Used to support warning config of "once".
             *
             * \@internal
             */
            NgFormSelectorWarning._ngFormWarning = false;
            NgFormSelectorWarning.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngForm' },] }
            ];
            /** @nocollapse */
            NgFormSelectorWarning.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_FORM_SELECTOR_WARNING,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
             *
             * \@publicApi
             */
            var AbstractFormGroupDirective = /** @class */ (function (_super) {
                __extends(AbstractFormGroupDirective, _super);
                function AbstractFormGroupDirective() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * \@description
                 * An internal callback method triggered on the instance after the inputs are set.
                 * Registers the group with its parent group.
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype.ngOnInit = function () {
                    this._checkParentType();
                    ( /** @type {?} */(this.formDirective)).addFormGroup(this);
                };
                /**
                 * \@description
                 * An internal callback method triggered before the instance is destroyed.
                 * Removes the group from its parent group.
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeFormGroup(this);
                    }
                };
                Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
                    /**
                     * \@description
                     * The `FormGroup` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(this.formDirective)).getFormGroup(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
                    /**
                     * \@description
                     * The path to this group from the top-level directive.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, this._parent); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
                    /**
                     * \@description
                     * The synchronous validators registered with this group.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._validators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * The async validators registered with this group.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._asyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype._checkParentType = function () { };
                return AbstractFormGroupDirective;
            }(ControlContainer));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var modelGroupProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgModelGroup; }))
            };
            /**
             * \@description
             * Creates and binds a `FormGroup` instance to a DOM element.
             *
             * This directive can only be used as a child of `NgForm` (within `<form>` tags).
             *
             * Use this directive to validate a sub-group of your form separately from the
             * rest of your form, or if some values in your domain model make more sense
             * to consume together in a nested object.
             *
             * Provide a name for the sub-group and it will become the key
             * for the sub-group in the form's full value. If you need direct access, export the directive into
             * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
             *
             * \@usageNotes
             *
             * ### Consuming controls in a grouping
             *
             * The following example shows you how to combine controls together in a sub-group
             * of the form.
             *
             * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgModelGroup = /** @class */ (function (_super) {
                __extends(NgModelGroup, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function NgModelGroup(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@internal
                 * @return {?}
                 */
                NgModelGroup.prototype._checkParentType = function () {
                    if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                        TemplateDrivenErrors.modelGroupParentException();
                    }
                };
                return NgModelGroup;
            }(AbstractFormGroupDirective));
            NgModelGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] }
            ];
            /** @nocollapse */
            NgModelGroup.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            NgModelGroup.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelGroup',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formControlBinding = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgModel; }))
            };
            var ɵ0$1 = /**
             * @return {?}
             */ function () { return Promise.resolve(null); };
            /**
             * `ngModel` forces an additional change detection run when its inputs change:
             * E.g.:
             * ```
             * <div>{{myModel.valid}}</div>
             * <input [(ngModel)]="myValue" #myModel="ngModel">
             * ```
             * I.e. `ngModel` can export itself on the element and then be used in the template.
             * Normally, this would result in expressions before the `input` that use the exported directive
             * to have and old value as they have been
             * dirty checked before. As this is a very common case for `ngModel`, we added this second change
             * detection run.
             *
             * Notes:
             * - this is just one extra run no matter how many `ngModel` have been changed.
             * - this is a general problem when using `exportAs` for directives!
             * @type {?}
             */
            var resolvedPromise$1 = ((ɵ0$1))();
            /**
             * \@description
             * Creates a `FormControl` instance from a domain model and binds it
             * to a form control element.
             *
             * The `FormControl` instance tracks the value, user interaction, and
             * validation status of the control and keeps the view synced with the model. If used
             * within a parent form, the directive also registers itself with the form as a child
             * control.
             *
             * This directive is used by itself or as part of a larger form. Use the
             * `ngModel` selector to activate it.
             *
             * It accepts a domain model as an optional `Input`. If you have a one-way binding
             * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
             * class sets the value in the view. If you have a two-way binding with `[()]` syntax
             * (also known as 'banana-box syntax'), the value in the UI always syncs back to
             * the domain model in your class.
             *
             * To inspect the properties of the associated `FormControl` (like validity state),
             * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
             * You then access the control using the directive's `control` property,
             * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
             * See a full list of properties directly available in `AbstractControlDirective`.
             *
             * @see `RadioControlValueAccessor`
             * @see `SelectControlValueAccessor`
             *
             * \@usageNotes
             *
             * ### Using ngModel on a standalone control
             *
             * The following examples show a simple standalone control using `ngModel`:
             *
             * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
             *
             * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
             * so that the control can be registered with the parent form under that name.
             *
             * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
             * as the parent form syncs the value for you. You access its properties by exporting it into a
             * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
             * needed on form submission.
             *
             * If you do need to populate initial values into your form, using a one-way binding for
             * `ngModel` tends to be sufficient as long as you use the exported form's value rather
             * than the domain model's value on submit.
             *
             * ### Using ngModel within a form
             *
             * The following example shows controls using `ngModel` within a form:
             *
             * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
             *
             * ### Using a standalone ngModel within a group
             *
             * The following example shows you how to use a standalone ngModel control
             * within a form. This controls the display of the form, but doesn't contain form data.
             *
             * ```html
             * <form>
             *   <input name="login" ngModel placeholder="Login">
             *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
             * </form>
             * <!-- form value: {login: ''} -->
             * ```
             *
             * ### Setting the ngModel name attribute through options
             *
             * The following example shows you an alternate way to set the name attribute. The name attribute is used
             * within a custom form component, and the name `\@Input` property serves a different purpose.
             *
             * ```html
             * <form>
             *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
             *   </my-person-control>
             * </form>
             * <!-- form value: {user: ''} -->
             * ```
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgModel = /** @class */ (function (_super) {
                __extends(NgModel, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 */
                function NgModel(parent, validators, asyncValidators, valueAccessors) {
                    var _this = _super.call(this) || this;
                    _this.control = new FormControl();
                    /**
                     * \@internal
                     */
                    _this._registered = false;
                    /**
                     * \@description
                     * Event emitter for producing the `ngModelChange` event after
                     * the view model updates.
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this._parent = parent;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                NgModel.prototype.ngOnChanges = function (changes) {
                    this._checkForErrors();
                    if (!this._registered)
                        this._setUpControl();
                    if ('isDisabled' in changes) {
                        this._updateDisabled(changes);
                    }
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        this._updateValue(this.model);
                        this.viewModel = this.model;
                    }
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal
                 * use only.
                 * @return {?}
                 */
                NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
                Object.defineProperty(NgModel.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () {
                        return this._parent ? controlPath(this.name, this._parent) : [this.name];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this control if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._rawAsyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value emitted by `ngModelChange`.
                 * @return {?}
                 */
                NgModel.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpControl = function () {
                    this._setUpdateStrategy();
                    this._isStandalone() ? this._setUpStandalone() :
                        this.formDirective.addControl(this);
                    this._registered = true;
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpdateStrategy = function () {
                    if (this.options && this.options.updateOn != null) {
                        this.control._updateOn = this.options.updateOn;
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._isStandalone = function () {
                    return !this._parent || !!(this.options && this.options.standalone);
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpStandalone = function () {
                    setUpControl(this.control, this);
                    this.control.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkForErrors = function () {
                    if (!this._isStandalone()) {
                        this._checkParentType();
                    }
                    this._checkName();
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkParentType = function () {
                    if (!(this._parent instanceof NgModelGroup) &&
                        this._parent instanceof AbstractFormGroupDirective) {
                        TemplateDrivenErrors.formGroupNameException();
                    }
                    else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                        TemplateDrivenErrors.modelParentException();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkName = function () {
                    if (this.options && this.options.name)
                        this.name = this.options.name;
                    if (!this._isStandalone() && !this.name) {
                        TemplateDrivenErrors.missingNameException();
                    }
                };
                /**
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                NgModel.prototype._updateValue = function (value) {
                    var _this = this;
                    resolvedPromise$1.then(( /**
                     * @return {?}
                     */function () { _this.control.setValue(value, { emitViewToModelChange: false }); }));
                };
                /**
                 * @private
                 * @param {?} changes
                 * @return {?}
                 */
                NgModel.prototype._updateDisabled = function (changes) {
                    var _this = this;
                    /** @type {?} */
                    var disabledValue = changes['isDisabled'].currentValue;
                    /** @type {?} */
                    var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
                    resolvedPromise$1.then(( /**
                     * @return {?}
                     */function () {
                        if (isDisabled && !_this.control.disabled) {
                            _this.control.disable();
                        }
                        else if (!isDisabled && _this.control.disabled) {
                            _this.control.enable();
                        }
                    }));
                };
                return NgModel;
            }(NgControl));
            NgModel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngModel]:not([formControlName]):not([formControl])',
                            providers: [formControlBinding],
                            exportAs: 'ngModel'
                        },] }
            ];
            /** @nocollapse */
            NgModel.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] }
            ]; };
            NgModel.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelOptions',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             *
             * Adds `novalidate` attribute to all forms by default.
             *
             * `novalidate` is used to disable browser's native form validation.
             *
             * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
             *
             * ```
             * <form ngNativeValidate></form>
             * ```
             *
             * \@publicApi
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             */
            var ɵNgNoValidate = /** @class */ (function () {
                function ɵNgNoValidate() {
                }
                return ɵNgNoValidate;
            }());
            ɵNgNoValidate.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                            host: { 'novalidate': '' },
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Token to provide to turn off the ngModel warning on formControl and formControlName.
             * @type {?}
             */
            var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
            /** @type {?} */
            var formControlBinding$1 = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormControlDirective; }))
            };
            /**
             * \@description
             * * Syncs a standalone `FormControl` instance to a form control element.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `FormControl`
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Registering a single form control
             *
             * The following examples shows how to register a standalone control and set its value.
             *
             * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
             *
             * ### Use with ngModel
             *
             * Support for using the `ngModel` input property and `ngModelChange` event with reactive
             * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
             *
             * Now deprecated:
             *
             * ```html
             * <input [formControl]="control" [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * This has been deprecated for a few reasons. First, developers have found this pattern
             * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
             * an input/output property named `ngModel` on the reactive form directive that simply
             * approximates (some of) its behavior. Specifically, it allows getting/setting the value
             * and intercepting value events. However, some of `ngModel`'s other features - like
             * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
             * which has understandably caused some confusion.
             *
             * In addition, this pattern mixes template-driven and reactive forms strategies, which
             * we generally don't recommend because it doesn't take advantage of the full benefits of
             * either strategy. Setting the value in the template violates the template-agnostic
             * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
             * the class removes the convenience of defining forms in the template.
             *
             * To update your code before v7, you'll want to decide whether to stick with reactive form
             * directives (and get/set values using reactive forms patterns) or switch over to
             * template-driven directives.
             *
             * After (choice 1 - use reactive forms):
             *
             * ```html
             * <input [formControl]="control">
             * ```
             *
             * ```ts
             * this.control.setValue('some value');
             * ```
             *
             * After (choice 2 - use template-driven forms):
             *
             * ```html
             * <input [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * By default, when you use this pattern, you will see a deprecation warning once in dev
             * mode. You can choose to silence this warning by providing a config for
             * `ReactiveFormsModule` at import time:
             *
             * ```ts
             * imports: [
             *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
             * ]
             * ```
             *
             * Alternatively, you can choose to surface a separate warning for each instance of this
             * pattern with a config value of `"always"`. This may help to track down where in the code
             * the pattern is being used as the code is being updated.
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormControlDirective = /** @class */ (function (_super) {
                __extends(FormControlDirective, _super);
                /**
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 * @param {?} _ngModelWarningConfig
                 */
                function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
                    var _this = _super.call(this) || this;
                    _this._ngModelWarningConfig = _ngModelWarningConfig;
                    /**
                     * @deprecated as of v6
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * \@description
                     * Instance property used to track whether an ngModel warning has been sent out for this
                     * particular `FormControlDirective` instance. Used to support warning config of "always".
                     *
                     * \@internal
                     */
                    _this._ngModelWarningSent = false;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
                    /**
                     * \@description
                     * Triggers a warning that this input should not be used with reactive forms.
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormControlDirective.prototype.ngOnChanges = function (changes) {
                    if (this._isControlChanged(changes)) {
                        setUpControl(this.form, this);
                        if (this.control.disabled && ( /** @type {?} */(this.valueAccessor)).setDisabledState) {
                            ( /** @type {?} */(( /** @type {?} */(this.valueAccessor)).setDisabledState))(true);
                        }
                        this.form.updateValueAndValidity({ emitEvent: false });
                    }
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);
                        this.form.setValue(this.model);
                        this.viewModel = this.model;
                    }
                };
                Object.defineProperty(FormControlDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._rawAsyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "control", {
                    /**
                     * \@description
                     * The `FormControl` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value for the view model.
                 * @return {?}
                 */
                FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                /**
                 * @private
                 * @param {?} changes
                 * @return {?}
                 */
                FormControlDirective.prototype._isControlChanged = function (changes) {
                    return changes.hasOwnProperty('form');
                };
                return FormControlDirective;
            }(NgControl));
            /**
             * \@description
             * Static property used to track whether any ngModel warnings have been sent across
             * all instances of FormControlDirective. Used to support warning config of "once".
             *
             * \@internal
             */
            FormControlDirective._ngModelWarningSentOnce = false;
            FormControlDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] }
            ];
            /** @nocollapse */
            FormControlDirective.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
            ]; };
            FormControlDirective.propDecorators = {
                form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControl',] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formDirectiveProvider$1 = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormGroupDirective; }))
            };
            /**
             * \@description
             *
             * Binds an existing `FormGroup` to a DOM element.
             *
             * This directive accepts an existing `FormGroup` instance. It will then use this
             * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
             * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
             * and `FormArrayName` directives.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `AbstractControl`
             *
             * ### Register Form Group
             *
             * The following example registers a `FormGroup` with first name and last name controls,
             * and listens for the *ngSubmit* event when the button is clicked.
             *
             * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormGroupDirective = /** @class */ (function (_super) {
                __extends(FormGroupDirective, _super);
                /**
                 * @param {?} _validators
                 * @param {?} _asyncValidators
                 */
                function FormGroupDirective(_validators, _asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._validators = _validators;
                    _this._asyncValidators = _asyncValidators;
                    /**
                     * \@description
                     * Reports whether the form submission has been triggered.
                     */
                    _this.submitted = false;
                    /**
                     * \@description
                     * Tracks the list of added `FormControlName` instances
                     */
                    _this.directives = [];
                    /**
                     * \@description
                     * Tracks the `FormGroup` bound to this directive.
                     */
                    _this.form = ( /** @type {?} */(null));
                    /**
                     * \@description
                     * Emits an event when the form submission has been triggered.
                     */
                    _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormGroupDirective.prototype.ngOnChanges = function (changes) {
                    this._checkFormPresent();
                    if (changes.hasOwnProperty('form')) {
                        this._updateValidators();
                        this._updateDomValue();
                        this._updateRegistrations();
                    }
                };
                Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
                    /**
                     * \@description
                     * Returns this directive's instance.
                     * @return {?}
                     */
                    get: function () { return this; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormGroupDirective.prototype, "control", {
                    /**
                     * \@description
                     * Returns the `FormGroup` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormGroupDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array representing the path to this group. Because this directive
                     * always lives at the top level of a form, it always an empty array.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that sets up the control directive in this group, re-calculates its value
                 * and validity, and adds the instance to the internal list of directives.
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addControl = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpControl(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                    this.directives.push(dir);
                    return ctrl;
                };
                /**
                 * \@description
                 * Retrieves the `FormControl` instance from the provided `FormControlName` directive
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getControl = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * \@description
                 * Removes the `FormControlName` instance from the internal list of directives
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeControl = function (dir) { removeDir(this.directives, dir); };
                /**
                 * Adds a new `FormGroupName` directive instance to the form.
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addFormGroup = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpFormContainer(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * No-op method to remove the form group.
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeFormGroup = function (dir) { };
                /**
                 * \@description
                 * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getFormGroup = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Adds a new `FormArrayName` directive instance to the form.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addFormArray = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpFormContainer(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * No-op method to remove the form array.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeFormArray = function (dir) { };
                /**
                 * \@description
                 * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getFormArray = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Sets the new value for the provided `FormControlName` directive.
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @param {?} value The new value for the directive's control.
                 * @return {?}
                 */
                FormGroupDirective.prototype.updateModel = function (dir, value) {
                    /** @type {?} */
                    var ctrl = ( /** @type {?} */(this.form.get(dir.path)));
                    ctrl.setValue(value);
                };
                /**
                 * \@description
                 * Method called with the "submit" event is triggered on the form.
                 * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
                 *
                 * @param {?} $event The "submit" event object
                 * @return {?}
                 */
                FormGroupDirective.prototype.onSubmit = function ($event) {
                    (( /** @type {?} */(this))).submitted = true;
                    syncPendingControls(this.form, this.directives);
                    this.ngSubmit.emit($event);
                    return false;
                };
                /**
                 * \@description
                 * Method called when the "reset" event is triggered on the form.
                 * @return {?}
                 */
                FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
                /**
                 * \@description
                 * Resets the form to an initial value and resets its submitted status.
                 *
                 * @param {?=} value The new value for the form.
                 * @return {?}
                 */
                FormGroupDirective.prototype.resetForm = function (value) {
                    if (value === void 0) { value = undefined; }
                    this.form.reset(value);
                    (( /** @type {?} */(this))).submitted = false;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateDomValue = function () {
                    var _this = this;
                    this.directives.forEach(( /**
                     * @param {?} dir
                     * @return {?}
                     */function (/**
                     * @param {?} dir
                     * @return {?}
                     */ dir) {
                        /** @type {?} */
                        var newCtrl = _this.form.get(dir.path);
                        if (dir.control !== newCtrl) {
                            cleanUpControl(dir.control, dir);
                            if (newCtrl)
                                setUpControl(newCtrl, dir);
                            (( /** @type {?} */(dir))).control = newCtrl;
                        }
                    }));
                    this.form._updateTreeValidity({ emitEvent: false });
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateRegistrations = function () {
                    var _this = this;
                    this.form._registerOnCollectionChange(( /**
                     * @return {?}
                     */function () { return _this._updateDomValue(); }));
                    if (this._oldForm)
                        this._oldForm._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this._oldForm = this.form;
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateValidators = function () {
                    /** @type {?} */
                    var sync = composeValidators(this._validators);
                    this.form.validator = Validators.compose([( /** @type {?} */(this.form.validator)), ( /** @type {?} */(sync))]);
                    /** @type {?} */
                    var async = composeAsyncValidators(this._asyncValidators);
                    this.form.asyncValidator = Validators.composeAsync([( /** @type {?} */(this.form.asyncValidator)), ( /** @type {?} */(async))]);
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._checkFormPresent = function () {
                    if (!this.form) {
                        ReactiveErrors.missingFormException();
                    }
                };
                return FormGroupDirective;
            }(ControlContainer));
            FormGroupDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[formGroup]',
                            providers: [formDirectiveProvider$1],
                            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                            exportAs: 'ngForm'
                        },] }
            ];
            /** @nocollapse */
            FormGroupDirective.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormGroupDirective.propDecorators = {
                form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroup',] }],
                ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formGroupNameProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormGroupName; }))
            };
            /**
             * \@description
             *
             * Syncs a nested `FormGroup` to a DOM element.
             *
             * This directive can only be used with a parent `FormGroupDirective`.
             *
             * It accepts the string name of the nested `FormGroup` to link, and
             * looks for a `FormGroup` registered with that name in the parent
             * `FormGroup` instance you passed into `FormGroupDirective`.
             *
             * Use nested form groups to validate a sub-group of a
             * form separately from the rest or to group the values of certain
             * controls into their own nested object.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             *
             * \@usageNotes
             *
             * ### Access the group by name
             *
             * The following example uses the {\@link AbstractControl#get get} method to access the
             * associated `FormGroup`
             *
             * ```ts
             *   this.form.get('name');
             * ```
             *
             * ### Access individual controls in the group
             *
             * The following example uses the {\@link AbstractControl#get get} method to access
             * individual controls within the group using dot syntax.
             *
             * ```ts
             *   this.form.get('name.first');
             * ```
             *
             * ### Register a nested `FormGroup`.
             *
             * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
             * and provides methods to retrieve the nested `FormGroup` and individual controls.
             *
             * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormGroupName = /** @class */ (function (_super) {
                __extends(FormGroupName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function FormGroupName(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroupName.prototype._checkParentType = function () {
                    if (_hasInvalidParent(this._parent)) {
                        ReactiveErrors.groupParentException();
                    }
                };
                return FormGroupName;
            }(AbstractFormGroupDirective));
            FormGroupName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] }
            ];
            /** @nocollapse */
            FormGroupName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormGroupName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroupName',] }]
            };
            if (false) { }
            /** @type {?} */
            var formArrayNameProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormArrayName; }))
            };
            /**
             * \@description
             *
             * Syncs a nested `FormArray` to a DOM element.
             *
             * This directive is designed to be used with a parent `FormGroupDirective` (selector:
             * `[formGroup]`).
             *
             * It accepts the string name of the nested `FormArray` you want to link, and
             * will look for a `FormArray` registered with that name in the parent
             * `FormGroup` instance you passed into `FormGroupDirective`.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Example
             *
             * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormArrayName = /** @class */ (function (_super) {
                __extends(FormArrayName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function FormArrayName(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs are initialized. For internal use only.
                 *
                 * @throws If the directive does not have a valid parent.
                 * @return {?}
                 */
                FormArrayName.prototype.ngOnInit = function () {
                    this._checkParentType();
                    ( /** @type {?} */(this.formDirective)).addFormArray(this);
                };
                /**
                 * \@description
                 * A lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                FormArrayName.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeFormArray(this);
                    }
                };
                Object.defineProperty(FormArrayName.prototype, "control", {
                    /**
                     * \@description
                     * The `FormArray` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(this.formDirective)).getFormArray(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () {
                        return this._parent ? ( /** @type {?} */(this._parent.formDirective)) : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, this._parent); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._validators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._asyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                FormArrayName.prototype._checkParentType = function () {
                    if (_hasInvalidParent(this._parent)) {
                        ReactiveErrors.arrayParentException();
                    }
                };
                return FormArrayName;
            }(ControlContainer));
            FormArrayName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] }
            ];
            /** @nocollapse */
            FormArrayName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormArrayName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formArrayName',] }]
            };
            if (false) { }
            /**
             * @param {?} parent
             * @return {?}
             */
            function _hasInvalidParent(parent) {
                return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
                    !(parent instanceof FormArrayName);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var controlNameBinding = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormControlName; }))
            };
            /**
             * \@description
             * Syncs a `FormControl` in an existing `FormGroup` to a form control
             * element by name.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `FormControl`
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Register `FormControl` within a group
             *
             * The following example shows how to register multiple form controls within a form group
             * and set their value.
             *
             * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
             *
             * To see `formControlName` examples with different form control types, see:
             *
             * * Radio buttons: `RadioControlValueAccessor`
             * * Selects: `SelectControlValueAccessor`
             *
             * ### Use with ngModel
             *
             * Support for using the `ngModel` input property and `ngModelChange` event with reactive
             * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
             *
             * Now deprecated:
             *
             * ```html
             * <form [formGroup]="form">
             *   <input formControlName="first" [(ngModel)]="value">
             * </form>
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * This has been deprecated for a few reasons. First, developers have found this pattern
             * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
             * an input/output property named `ngModel` on the reactive form directive that simply
             * approximates (some of) its behavior. Specifically, it allows getting/setting the value
             * and intercepting value events. However, some of `ngModel`'s other features - like
             * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
             * which has understandably caused some confusion.
             *
             * In addition, this pattern mixes template-driven and reactive forms strategies, which
             * we generally don't recommend because it doesn't take advantage of the full benefits of
             * either strategy. Setting the value in the template violates the template-agnostic
             * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
             * the class removes the convenience of defining forms in the template.
             *
             * To update your code before v7, you'll want to decide whether to stick with reactive form
             * directives (and get/set values using reactive forms patterns) or switch over to
             * template-driven directives.
             *
             * After (choice 1 - use reactive forms):
             *
             * ```html
             * <form [formGroup]="form">
             *   <input formControlName="first">
             * </form>
             * ```
             *
             * ```ts
             * this.form.get('first').setValue('some value');
             * ```
             *
             * After (choice 2 - use template-driven forms):
             *
             * ```html
             * <input [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * By default, when you use this pattern, you will see a deprecation warning once in dev
             * mode. You can choose to silence this warning by providing a config for
             * `ReactiveFormsModule` at import time:
             *
             * ```ts
             * imports: [
             *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
             * ]
             * ```
             *
             * Alternatively, you can choose to surface a separate warning for each instance of this
             * pattern with a config value of `"always"`. This may help to track down where in the code
             * the pattern is being used as the code is being updated.
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormControlName = /** @class */ (function (_super) {
                __extends(FormControlName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 * @param {?} _ngModelWarningConfig
                 */
                function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
                    var _this = _super.call(this) || this;
                    _this._ngModelWarningConfig = _ngModelWarningConfig;
                    _this._added = false;
                    /**
                     * @deprecated as of v6
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * \@description
                     * Instance property used to track whether an ngModel warning has been sent out for this
                     * particular FormControlName instance. Used to support warning config of "always".
                     *
                     * \@internal
                     */
                    _this._ngModelWarningSent = false;
                    _this._parent = parent;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                Object.defineProperty(FormControlName.prototype, "isDisabled", {
                    /**
                     * \@description
                     * Triggers a warning that this input should not be used with reactive forms.
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormControlName.prototype.ngOnChanges = function (changes) {
                    if (!this._added)
                        this._setUpControl();
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);
                        this.viewModel = this.model;
                        this.formDirective.updateModel(this, this.model);
                    }
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                FormControlName.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeControl(this);
                    }
                };
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value for the view model.
                 * @return {?}
                 */
                FormControlName.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                Object.defineProperty(FormControlName.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, ( /** @type {?} */(this._parent))); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return ( /** @type {?} */(composeAsyncValidators(this._rawAsyncValidators)));
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                FormControlName.prototype._checkParentType = function () {
                    if (!(this._parent instanceof FormGroupName) &&
                        this._parent instanceof AbstractFormGroupDirective) {
                        ReactiveErrors.ngModelGroupException();
                    }
                    else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
                        !(this._parent instanceof FormArrayName)) {
                        ReactiveErrors.controlParentException();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormControlName.prototype._setUpControl = function () {
                    this._checkParentType();
                    (( /** @type {?} */(this))).control = this.formDirective.addControl(this);
                    if (this.control.disabled && ( /** @type {?} */(this.valueAccessor)).setDisabledState) {
                        ( /** @type {?} */(( /** @type {?} */(this.valueAccessor)).setDisabledState))(true);
                    }
                    this._added = true;
                };
                return FormControlName;
            }(NgControl));
            /**
             * \@description
             * Static property used to track whether any ngModel warnings have been sent across
             * all instances of FormControlName. Used to support warning config of "once".
             *
             * \@internal
             */
            FormControlName._ngModelWarningSentOnce = false;
            FormControlName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] }
            ];
            /** @nocollapse */
            FormControlName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
            ]; };
            FormControlName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControlName',] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * An interface implemented by classes that perform synchronous validation.
             *
             * \@usageNotes
             *
             * ### Provide a custom validator
             *
             * The following example implements the `Validator` interface to create a
             * validator directive with a custom error key.
             *
             * ```typescript
             * \@Directive({
             *   selector: '[customValidator]',
             *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
             * })
             * class CustomValidatorDirective implements Validator {
             *   validate(control: AbstractControl): ValidationErrors|null {
             *     return {'custom': true};
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @record
             */
            function Validator() { }
            if (false) { }
            /**
             * \@description
             * An interface implemented by classes that perform asynchronous validation.
             *
             * \@usageNotes
             *
             * ### Provide a custom async validator directive
             *
             * The following example implements the `AsyncValidator` interface to create an
             * async validator directive with a custom error key.
             *
             * ```typescript
             * import { of as observableOf } from 'rxjs';
             *
             * \@Directive({
             *   selector: '[customAsyncValidator]',
             *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
             * true}]
             * })
             * class CustomAsyncValidatorDirective implements AsyncValidator {
             *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
             *     return observableOf({'custom': true});
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @record
             */
            function AsyncValidator() { }
            if (false) { }
            /**
             * \@description
             * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var REQUIRED_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RequiredValidator; })),
                multi: true
            };
            /**
             * \@description
             * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var CHECKBOX_REQUIRED_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return CheckboxRequiredValidator; })),
                multi: true
            };
            /**
             * \@description
             * A directive that adds the `required` validator to any controls marked with the
             * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a required validator using template-driven forms
             *
             * ```
             * <input name="fullName" ngModel required>
             * ```
             *
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var RequiredValidator = /** @class */ (function () {
                function RequiredValidator() {
                }
                Object.defineProperty(RequiredValidator.prototype, "required", {
                    /**
                     * \@description
                     * Tracks changes to the required attribute bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this._required; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._required = value != null && value !== false && "" + value !== 'false';
                        if (this._onChange)
                            this._onChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that validates whether the control is empty.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                RequiredValidator.prototype.validate = function (control) {
                    return this.required ? Validators.required(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                return RequiredValidator;
            }());
            RequiredValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                            providers: [REQUIRED_VALIDATOR],
                            host: { '[attr.required]': 'required ? "" : null' }
                        },] }
            ];
            RequiredValidator.propDecorators = {
                required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * A Directive that adds the `required` validator to checkbox controls marked with the
             * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a required checkbox validator using template-driven forms
             *
             * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
             *
             * ```
             * <input type="checkbox" name="active" ngModel required>
             * ```
             *
             * \@publicApi
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             */
            var CheckboxRequiredValidator = /** @class */ (function (_super) {
                __extends(CheckboxRequiredValidator, _super);
                function CheckboxRequiredValidator() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * \@description
                 * Method that validates whether or not the checkbox has been checked.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                CheckboxRequiredValidator.prototype.validate = function (control) {
                    return this.required ? Validators.requiredTrue(control) : null;
                };
                return CheckboxRequiredValidator;
            }(RequiredValidator));
            CheckboxRequiredValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                            providers: [CHECKBOX_REQUIRED_VALIDATOR],
                            host: { '[attr.required]': 'required ? "" : null' }
                        },] }
            ];
            /**
             * \@description
             * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var EMAIL_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return EmailValidator; })),
                multi: true
            };
            /**
             * A directive that adds the `email` validator to controls marked with the
             * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding an email validator
             *
             * The following example shows how to add an email validator to an input attached to an ngModel binding.
             *
             * ```
             * <input type="email" name="email" ngModel email>
             * <input type="email" name="email" ngModel email="true">
             * <input type="email" name="email" ngModel [email]="true">
             * ```
             *
             * \@publicApi
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             */
            var EmailValidator = /** @class */ (function () {
                function EmailValidator() {
                }
                Object.defineProperty(EmailValidator.prototype, "email", {
                    /**
                     * \@description
                     * Tracks changes to the email attribute bound to this directive.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._enabled = value === '' || value === true || value === 'true';
                        if (this._onChange)
                            this._onChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that validates whether an email address is valid.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                EmailValidator.prototype.validate = function (control) {
                    return this._enabled ? Validators.email(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                return EmailValidator;
            }());
            EmailValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                            providers: [EMAIL_VALIDATOR]
                        },] }
            ];
            EmailValidator.propDecorators = {
                email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * A function that receives a control and synchronously returns a map of
             * validation errors if present, otherwise null.
             *
             * \@publicApi
             * @record
             */
            function ValidatorFn() { }
            /**
             * \@description
             * A function that receives a control and returns a Promise or observable
             * that emits validation errors if present, otherwise null.
             *
             * \@publicApi
             * @record
             */
            function AsyncValidatorFn() { }
            /**
             * \@description
             * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var MIN_LENGTH_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MinLengthValidator; })),
                multi: true
            };
            /**
             * A directive that adds minimum length validation to controls marked with the
             * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a minimum length validator
             *
             * The following example shows how to add a minimum length validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel minlength="4">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var MinLengthValidator = /** @class */ (function () {
                function MinLengthValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                MinLengthValidator.prototype.ngOnChanges = function (changes) {
                    if ('minlength' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value meets a minimum length
                 * requirement. Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                MinLengthValidator.prototype.validate = function (control) {
                    return this.minlength == null ? null : this._validator(control);
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                MinLengthValidator.prototype._createValidator = function () {
                    this._validator = Validators.minLength(parseInt(this.minlength, 10));
                };
                return MinLengthValidator;
            }());
            MinLengthValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                            providers: [MIN_LENGTH_VALIDATOR],
                            host: { '[attr.minlength]': 'minlength ? minlength : null' }
                        },] }
            ];
            MinLengthValidator.propDecorators = {
                minlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var MAX_LENGTH_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MaxLengthValidator; })),
                multi: true
            };
            /**
             * A directive that adds max length validation to controls marked with the
             * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a maximum length validator
             *
             * The following example shows how to add a maximum length validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel maxlength="25">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var MaxLengthValidator = /** @class */ (function () {
                function MaxLengthValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                MaxLengthValidator.prototype.ngOnChanges = function (changes) {
                    if ('maxlength' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value exceeds
                 * the maximum length requirement.
                 * @param {?} control
                 * @return {?}
                 */
                MaxLengthValidator.prototype.validate = function (control) {
                    return this.maxlength != null ? this._validator(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                MaxLengthValidator.prototype._createValidator = function () {
                    this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
                };
                return MaxLengthValidator;
            }());
            MaxLengthValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                            providers: [MAX_LENGTH_VALIDATOR],
                            host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
                        },] }
            ];
            MaxLengthValidator.propDecorators = {
                maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var PATTERN_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return PatternValidator; })),
                multi: true
            };
            /**
             * \@description
             * A directive that adds regex pattern validation to controls marked with the
             * `pattern` attribute. The regex must match the entire control value.
             * The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a pattern validator
             *
             * The following example shows how to add a pattern validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var PatternValidator = /** @class */ (function () {
                function PatternValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                PatternValidator.prototype.ngOnChanges = function (changes) {
                    if ('pattern' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value matches the
                 * the pattern requirement.
                 * @param {?} control
                 * @return {?}
                 */
                PatternValidator.prototype.validate = function (control) { return this._validator(control); };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
                return PatternValidator;
            }());
            PatternValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                            providers: [PATTERN_VALIDATOR],
                            host: { '[attr.pattern]': 'pattern ? pattern : null' }
                        },] }
            ];
            PatternValidator.propDecorators = {
                pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SHARED_FORM_DIRECTIVES = [
                ɵNgNoValidate,
                NgSelectOption,
                ɵNgSelectMultipleOption,
                DefaultValueAccessor,
                NumberValueAccessor,
                RangeValueAccessor,
                CheckboxControlValueAccessor,
                SelectControlValueAccessor,
                SelectMultipleControlValueAccessor,
                RadioControlValueAccessor,
                NgControlStatus,
                NgControlStatusGroup,
                RequiredValidator,
                MinLengthValidator,
                MaxLengthValidator,
                PatternValidator,
                CheckboxRequiredValidator,
                EmailValidator,
            ];
            /** @type {?} */
            var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
            /** @type {?} */
            var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
            /**
             * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
             */
            var ɵInternalFormsSharedModule = /** @class */ (function () {
                function ɵInternalFormsSharedModule() {
                }
                return ɵInternalFormsSharedModule;
            }());
            ɵInternalFormsSharedModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: SHARED_FORM_DIRECTIVES,
                            exports: SHARED_FORM_DIRECTIVES,
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} options
             * @return {?}
             */
            function isAbstractControlOptions(options) {
                return (( /** @type {?} */(options))).asyncValidators !== undefined ||
                    (( /** @type {?} */(options))).validators !== undefined ||
                    (( /** @type {?} */(options))).updateOn !== undefined;
            }
            /**
             * \@description
             * Creates an `AbstractControl` from a user-specified configuration.
             *
             * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
             * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
             * forms.
             *
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             *
             * \@publicApi
             */
            var FormBuilder = /** @class */ (function () {
                function FormBuilder() {
                }
                /**
                 * \@description
                 * Construct a new `FormGroup` instance.
                 *
                 * @param {?} controlsConfig A collection of child controls. The key for each child is the name
                 * under which it is registered.
                 *
                 * @param {?=} options Configuration options object for the `FormGroup`. The object can
                 * have two shapes:
                 *
                 * 1) `AbstractControlOptions` object (preferred), which consists of:
                 * * `validators`: A synchronous validator function, or an array of validator functions
                 * * `asyncValidators`: A single async validator or array of async validator functions
                 * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
                 * submit')
                 *
                 * 2) Legacy configuration object, which consists of:
                 * * `validator`: A synchronous validator function, or an array of validator functions
                 * * `asyncValidator`: A single async validator or array of async validator functions
                 *
                 * @return {?}
                 */
                FormBuilder.prototype.group = function (controlsConfig, options) {
                    if (options === void 0) { options = null; }
                    /** @type {?} */
                    var controls = this._reduceControls(controlsConfig);
                    /** @type {?} */
                    var validators = null;
                    /** @type {?} */
                    var asyncValidators = null;
                    /** @type {?} */
                    var updateOn = undefined;
                    if (options != null) {
                        if (isAbstractControlOptions(options)) {
                            // `options` are `AbstractControlOptions`
                            validators = options.validators != null ? options.validators : null;
                            asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                            updateOn = options.updateOn != null ? options.updateOn : undefined;
                        }
                        else {
                            // `options` are legacy form group options
                            validators = options['validator'] != null ? options['validator'] : null;
                            asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
                        }
                    }
                    return new FormGroup(controls, { asyncValidators: asyncValidators, updateOn: updateOn, validators: validators });
                };
                /**
                 * \@description
                 * Construct a new `FormControl` with the given state, validators and options.
                 *
                 * \@usageNotes
                 *
                 * ### Initialize a control as disabled
                 *
                 * The following example returns a control with an initial value in a disabled state.
                 *
                 * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
                 * </code-example>
                 * @param {?} formState Initializes the control with an initial state value, or
                 * with an object that contains both a value and a disabled status.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains
                 * validation functions and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator
                 * functions.
                 *
                 * @return {?}
                 */
                FormBuilder.prototype.control = function (formState, validatorOrOpts, asyncValidator) {
                    return new FormControl(formState, validatorOrOpts, asyncValidator);
                };
                /**
                 * Constructs a new `FormArray` from the given array of configurations,
                 * validators and options.
                 *
                 * @param {?} controlsConfig An array of child controls or control configs. Each
                 * child control is given an index when it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains
                 * validation functions and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator
                 * functions.
                 * @return {?}
                 */
                FormBuilder.prototype.array = function (controlsConfig, validatorOrOpts, asyncValidator) {
                    var _this = this;
                    /** @type {?} */
                    var controls = controlsConfig.map(( /**
                     * @param {?} c
                     * @return {?}
                     */function (/**
                     * @param {?} c
                     * @return {?}
                     */ c) { return _this._createControl(c); }));
                    return new FormArray(controls, validatorOrOpts, asyncValidator);
                };
                /**
                 * \@internal
                 * @param {?} controlsConfig
                 * @return {?}
                 */
                FormBuilder.prototype._reduceControls = function (controlsConfig) {
                    var _this = this;
                    /** @type {?} */
                    var controls = {};
                    Object.keys(controlsConfig).forEach(( /**
                     * @param {?} controlName
                     * @return {?}
                     */function (/**
                     * @param {?} controlName
                     * @return {?}
                     */ controlName) {
                        controls[controlName] = _this._createControl(controlsConfig[controlName]);
                    }));
                    return controls;
                };
                /**
                 * \@internal
                 * @param {?} controlConfig
                 * @return {?}
                 */
                FormBuilder.prototype._createControl = function (controlConfig) {
                    if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
                        controlConfig instanceof FormArray) {
                        return controlConfig;
                    }
                    else if (Array.isArray(controlConfig)) {
                        /** @type {?} */
                        var value = controlConfig[0];
                        /** @type {?} */
                        var validator = controlConfig.length > 1 ? controlConfig[1] : null;
                        /** @type {?} */
                        var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                        return this.control(value, validator, asyncValidator);
                    }
                    else {
                        return this.control(controlConfig);
                    }
                };
                return FormBuilder;
            }());
            FormBuilder.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@publicApi
             * @type {?}
             */
            var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.14');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Exports the required providers and directives for template-driven forms,
             * making them available for import by NgModules that import this module.
             *
             * @see [Forms Guide](/guide/forms)
             *
             * \@publicApi
             */
            var FormsModule = /** @class */ (function () {
                function FormsModule() {
                }
                /**
                 * \@description
                 * Provides options for configuring the template-driven forms module.
                 *
                 * @param {?} opts An object of configuration options
                 * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
                 * `ngForm` selector is used.
                 * @return {?}
                 */
                FormsModule.withConfig = function (opts) {
                    return {
                        ngModule: FormsModule,
                        providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
                    };
                };
                return FormsModule;
            }());
            FormsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                            providers: [RadioControlRegistry],
                            exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                        },] }
            ];
            /**
             * Exports the required infrastructure and directives for reactive forms,
             * making them available for import by NgModules that import this module.
             * @see [Forms](guide/reactive-forms)
             *
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             *
             * \@publicApi
             */
            var ReactiveFormsModule = /** @class */ (function () {
                function ReactiveFormsModule() {
                }
                /**
                 * \@description
                 * Provides options for configuring the reactive forms module.
                 *
                 * @param {?} opts An object of configuration options
                 * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
                 * binding is used with reactive form directives.
                 * @return {?}
                 */
                ReactiveFormsModule.withConfig = function (opts) {
                    return {
                        ngModule: ReactiveFormsModule,
                        providers: [{
                                provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                                useValue: opts.warnOnNgModelWithFormControl
                            }]
                    };
                };
                return ReactiveFormsModule;
            }());
            ReactiveFormsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                            providers: [FormBuilder, RadioControlRegistry],
                            exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=forms.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/components/cards/cards.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/components/cards/cards.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\" col-lg-12 col-xl-12 col-md-12  col-sm-6 col-12 font-proxima-reg padding-5\" >\n    <div class=\"row\">\n            <div class=\"col-lg-12 col-xl-12 col-md-12  col-sm-6 col-12 mt-4\" >\n                    <h3 class=\"heading\" > My Wallets</h3>\n                    <span class=\"add-card-fa\" data-toggle=\"modal\" data-target=\"#addCardModal\">\n                           \n                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                        </span>\n            </div>\n    </div>\n   <div class=\"row justify-content-center card-padding\"  *ngFor=\"let card of cards;\" >\n        <div  class=\"card-outer card-color\" [ngClass]=\"{'border-outer': card.id === selectedCardId}\"  style=\"cursor: pointer\" (click)=\"getCardInfo(card.id)\">\n                <div class=\"text-left\" >\n                <img class=\"visa-type\" src=\"{{card.type}}\">\n                <span [hidden]=\"card.validity\"  style=\"color:red\">\n                    INACTIVE\n                  </span>\n                </div>\n                \n                <div class=\"text-left\">\n                        {{card.card_number}}\n\n                </div>\n                <div class=\"text-left\" style=\"color:gray\">\n                       Valid Thru:{{card.valid}}\n                </div>\n            </div>\n   </div>\n \n    \n<!-- </div> -->\n      \n      <!-- Modal to Add Card -->\n      <div class=\"modal fade\" id=\"addCardModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addCardModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"addCardModalLabel\">Add Card</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n\n      \n    <form  [formGroup]=\"paymentForm\" >\n        <div class=\"creditcard\">\n            <div class=\"mt-2\">\n                <p class=\"cardnumber\">CARD NUMBER</p>\n          <div class=\"form-group\">\n\n            <input type=\"text\" maxlength=\"19\"    placeholder=\"Card Number\" class=\"card-input\" formControlName=\"cardNumber\"\n                   >    \n            <control-messages style=\"position: absolute;\" [control]=\"paymentForm['controls'].cardNumber\"></control-messages>\n          </div>\n            </div>\n            <div class=\"mt-4\">\n                <p class=\"cardnumber\"  >CARD TYPE</p>\n                <div class=\"form-group\">\n                    <select class=\"form-control\" id=\"card-type\"   formControlName=\"cardType\" > \n                        <option value=\"\" disabled selected >Select Card Type</option> \n                        <option value=\"./assets/images/visa.jpeg\">Visa</option> \n                        <option value=\"./assets/images/mastercard.jpeg\">Master Card</option> \n                        <option value=\"./assets/images/amex.jpeg\">Amex</option> \n                        <option value=\"./assets/images/discover.png\">Discover</option> \n                        <option value=\"./assets/images/maestro.png\">Mastero</option> \n                        </select>\n              </div>\n            </div>\n            <div class=\"mt-4\">\n              <p class=\"cardnumber\">VALID THRU</p>\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"mm/yy\"   class=\"card-input\"  formControlName=\"validDate\">\n                <control-messages style=\"position: absolute;\" [control]=\"paymentForm['controls'].validDate\"></control-messages>\n              </div>\n            </div>\n            <div class=\"mt-4\">\n              <p class=\"cardnumber\"  >CVV</p>\n              <div class=\"form-group\">\n              <input type=\"text\"  placeholder=\"CVV\" class=\"card-input\" formControlName=\"cvv\" maxlength=\"4\">\n              <control-messages style=\"position: absolute;\" [control]=\"paymentForm['controls'].cvv\"></control-messages>\n            \n            </div>\n          </div>\n          \n        </div>\n      </form>          \n  \n  </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" [disabled]=\"!paymentForm.valid\" (click) =\"cardDetails()\" class=\"btn btn-primary\">Save Card</button>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n\n<script>\n        $(document).ready(function() {\n          $(\"#addCardModal\").modal();\n        });\n      </script>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/components/transactions/transactions.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/components/transactions/transactions.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\" col-lg-12 col-xl-12 col-md-12  col-sm-6 col-12 font-proxima-reg background_transaction padding-5\"  (idTrans)=\"getTransactions()\">\n        <div class=\"row\">\n                <div class=\"col-lg-12 col-xl-12 col-md-12  col-sm-6 col-12 mt-4\" style=\"display: flex\">\n                        \n                        <h3 class=\"heading col-lg-6\"> Current Balance</h3>\n                        <h3 class=\"heading col-lg-6 text-center mr-2\" [ngStyle]=\"{'color': balance>=900  ? 'yellowgreen':'mediumpurple'}\">\n                                       $ {{balance.toFixed(0)}}\n                                       \n                        </h3>\n                       \n                </div>\n\n        </div>\n        <hr>\n        <div class=\"col-12\">\n                <div class=\"row\" *ngFor=\"let trans of transactions;\">\n                        \n                        <div class=\"col-8\">\n                            <div style=\"display: flex\">\n                                    <span class=\"pr-2\" (click)=\"expand(trans.id)\">\n                                            <i *ngIf=\"expanded && (trans.id=== expandedId)\"  class=\"fa fa-minus-circle\" aria-hidden=\"true\"></i>\n                                            <i [hidden]=\"expanded && (trans.id=== expandedId)\" class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                                        </span>\n                                    <h4 class=\"transname\">\n                                            {{trans.product_name}}\n                                    </h4>\n                           \n                            </div>\n                               \n                                \n                                <div class=\"d-inlineflex\" style=\"color:gray\" *ngIf=\"expanded && (trans.id=== expandedId)\" >\n                                        <p class=\"pl-2\">{{trans.description}} </p>\n                                        <p class=\"pl-2\"># {{trans.id}} </p>\n                                        <p class=\"pl-2\">{{trans.date }} </p>\n\n\n                                </div>\n\n\n\n                        </div>\n                        <div class=\"col-4\">\n                          <span [ngStyle]=\"{'color': trans.price >=900  ? 'yellowgreen':'mediumpurple'}\">\n                                $ {{trans.price}}\n                          </span>    \n                        </div>\n                </div>\n\n        </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/payments.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/payments.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"loggedIn\">\n   \n\n    <div class=\"col-lg-5 background_cards\">\n        \n        <app-cards>\n    \n        </app-cards>\n    </div>\n    \n    \n    <div class=\"col-lg-7 background_transaction\">\n            <div class=\"logout\" >\n                    <button type=\"button\"  (click) =\"logout()\" class=\"btn btn-primary\">Logout</button>\n        \n            </div>\n        <app-transactions >\n    \n        </app-transactions>\n    </div>\n</div>\n<div *ngIf=\"!loggedIn\" class=\"display-flex\">\n        <button type=\"button\"  (click) =\"welcome()\" class=\"btn btn-primary welcome-btn\">WELCOME (click me!)</button>\n\n</div>\n\n\n\n");
            /***/ 
        }),
        /***/ "./src/app/modules/payments/components/cards/cards.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/modules/payments/components/cards/cards.component.ts ***!
          \**********************************************************************/
        /*! exports provided: CardsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function () { return CardsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../payments.service */ "./src/app/modules/payments/payments.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_modules_payments_components_validations_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/payments/components/validations/validation.service */ "./src/app/modules/payments/components/validations/validation.service.ts");
            var CardsComponent = /** @class */ (function () {
                function CardsComponent(formBuilder, router, paymentService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.paymentService = paymentService;
                    this.cards = [];
                }
                CardsComponent.prototype.ngOnInit = function () {
                    this.initPaymentForm();
                    this.getData();
                };
                CardsComponent.prototype.initPaymentForm = function () {
                    this.paymentForm = this.formBuilder.group({
                        'cardNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_app_modules_payments_components_validations_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].creditCardValidator])],
                        'cardType': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        'validDate': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_app_modules_payments_components_validations_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].dateValidityCheck]],
                        'cvv': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), src_app_modules_payments_components_validations_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].NumberValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(4)]]
                    });
                };
                CardsComponent.prototype.cardDetails = function () {
                    if (!this.paymentForm.valid) {
                        this.validateAllFormFields(this.paymentForm);
                        return;
                    }
                    else {
                        var cardexpiry = this.paymentForm.value.validDate;
                        var cardObj = {};
                        cardObj['card_number'] = this.paymentForm.value.cardNumber;
                        cardObj['type'] = this.paymentForm.value.cardType;
                        cardObj['valid'] = this.paymentForm.value.validDate;
                        cardObj['cvv'] = this.paymentForm.value.cvv;
                        cardObj['validity'] = true;
                        cardObj['id'] = Math.floor(Math.random() * 6 + 1);
                        cardObj['name'] = "New Name";
                        cardObj['transactions'] = [];
                        $('#addCardModal').modal('toggle');
                        this.cards.push(cardObj);
                        localStorage.setItem('data', JSON.stringify(this.cards));
                        this.getData();
                    }
                };
                CardsComponent.prototype.getData = function () {
                    this.cards = JSON.parse(localStorage.getItem('data'));
                    this.selectedCardId = this.cards[0].id;
                };
                CardsComponent.prototype.validateAllFormFields = function (form) {
                    var _this = this;
                    var keys = Object.keys(form.controls);
                    keys.forEach(function (field) {
                        var control = form.get(field);
                        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]) {
                            control.markAsTouched({ onlySelf: true });
                            control.markAsDirty({ onlySelf: true });
                        }
                        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                            _this.validateAllFormFields(control);
                        }
                        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]) {
                            control.controls.forEach(function (element) {
                                _this.validateAllFormFields(element);
                            });
                        }
                    });
                };
                CardsComponent.prototype.getCardInfo = function (id) {
                    this.selectedCardId = id;
                    this.paymentService.newEvent(id);
                    this.paymentService.setCardId(id);
                };
                return CardsComponent;
            }());
            CardsComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _payments_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] }
            ]; };
            CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cards',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cards.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/components/cards/cards.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cards.scss */ "./src/app/modules/payments/components/cards/cards.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../../app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], CardsComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/payments/components/cards/cards.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/modules/payments/components/cards/cards.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".visa-type {\n  height: 40px;\n  width: 40px;\n}\n\n.card-padding {\n  padding-bottom: 12px;\n}\n\n.card-color {\n  background-color: white;\n}\n\n.add-card-fa {\n  float: right;\n  color: gray;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.card-outer {\n  width: 230px;\n  height: 135px;\n  display: block;\n  white-space: nowrap;\n  text-decoration: none;\n  font-family: ProximaNova-Regular;\n  text-align: center;\n  margin: 0;\n  min-width: 83px;\n  line-height: 36px;\n  padding: 2%;\n  border-radius: 4px;\n  overflow: visible;\n  border: 1px solid #bdbebd;\n}\n\n.cardnumber {\n  opacity: 0.5;\n  font-size: 10px;\n  letter-spacing: 0.6px;\n  text-align: left;\n  margin-bottom: 2px;\n  color: #333;\n}\n\n.card-input {\n  display: block;\n  width: 100%;\n  height: 35px;\n  padding: 5px;\n  color: #3a3f51;\n  background-color: #fff;\n  border: 1px solid #dde6e9;\n  border-radius: 2px;\n  box-shadow: none;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  background-image: none;\n  font-size: 14px;\n  line-height: 1.52857143;\n}\n\n.border-outer {\n  border: 2px solid purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wdW5yZWV0a2F1ci9EZXNrdG9wL3B1bnJlZXQvd2FsbGV0TWFuYWdlbWVudC9zcmMvYXBwL21vZHVsZXMvcGF5bWVudHMvY29tcG9uZW50cy9jYXJkcy9jYXJkcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BheW1lbnRzL2NvbXBvbmVudHMvY2FyZHMvY2FyZHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBRENFO0VBQ0UsdUJBQUE7QUNFSjs7QURBRTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNHTjs7QUREQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFFQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdFQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIRTtFQUNFLHdCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BheW1lbnRzL2NvbXBvbmVudHMvY2FyZHMvY2FyZHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnZpc2EtdHlwZXtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG4uY2FyZC1wYWRkaW5ne1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB9XG4gIC5jYXJkLWNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB3aGl0ZTtcbiAgfVxuICAuYWRkLWNhcmQtZmF7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuLmNhcmQtb3V0ZXJ7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDogMTM1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLy8gdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hTm92YS1SZWd1bGFyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgbWluLXdpZHRoOiA4M3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZWJkO1xufVxuLmNhcmRudW1iZXIge1xuICAgIG9wYWNpdHk6IC41O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuLmNhcmQtaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6ICMzYTNmNTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRlNmU5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41Mjg1NzE0MztcbiAgfVxuICAuYm9yZGVyLW91dGVye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZVxuXG4gIH0iLCIudmlzYS10eXBlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLmNhcmQtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uY2FyZC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYWRkLWNhcmQtZmEge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtb3V0ZXIge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMTM1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBQcm94aW1hTm92YS1SZWd1bGFyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgbWluLXdpZHRoOiA4M3B4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGJlYmQ7XG59XG5cbi5jYXJkbnVtYmVyIHtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmNhcmQtaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzNhM2Y1MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZTZlOTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTI4NTcxNDM7XG59XG5cbi5ib3JkZXItb3V0ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/payments/components/transactions/transactions.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/payments/components/transactions/transactions.component.ts ***!
          \************************************************************************************/
        /*! exports provided: TransactionsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function () { return TransactionsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _payments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../payments.service */ "./src/app/modules/payments/payments.service.ts");
            var TransactionsComponent = /** @class */ (function () {
                function TransactionsComponent(paymentService) {
                    this.paymentService = paymentService;
                    // @Input ('idTrans') idTrans:Observable <string>
                    this.transactions = [];
                }
                TransactionsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.getData();
                    this.paymentService.events$.forEach(function (event) { return _this.getData(); });
                };
                TransactionsComponent.prototype.getTransactions = function () {
                };
                TransactionsComponent.prototype.getData = function () {
                    var data = this.paymentService.getTransactionById();
                    this.balance = data['total'];
                    this.transactions = data['transactions'];
                };
                TransactionsComponent.prototype.expand = function (id) {
                    this.expandedId = id;
                    this.expanded = !this.expanded;
                };
                return TransactionsComponent;
            }());
            TransactionsComponent.ctorParameters = function () { return [
                { type: _payments_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"] }
            ]; };
            TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-transactions',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transactions.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/components/transactions/transactions.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transactions.scss */ "./src/app/modules/payments/components/transactions/transactions.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../../app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], TransactionsComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/payments/components/transactions/transactions.scss": 
        /*!****************************************************************************!*\
          !*** ./src/app/modules/payments/components/transactions/transactions.scss ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".background_transaction {\n  background-color: whitesmoke;\n}\n\n.itemname {\n  text-transform: capitalize;\n}\n\n.d-inlineflex {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wdW5yZWV0a2F1ci9EZXNrdG9wL3B1bnJlZXQvd2FsbGV0TWFuYWdlbWVudC9zcmMvYXBwL21vZHVsZXMvcGF5bWVudHMvY29tcG9uZW50cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGF5bWVudHMvY29tcG9uZW50cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKOztBRENBO0VBQ0ksMEJBQUE7QUNFSjs7QURBQTtFQUNJLG9CQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BheW1lbnRzL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRfdHJhbnNhY3Rpb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5pdGVtbmFtZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5kLWlubGluZWZsZXh7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH0iLCIuYmFja2dyb3VuZF90cmFuc2FjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5pdGVtbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZC1pbmxpbmVmbGV4IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/payments/components/validations/validation.service.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/modules/payments/components/validations/validation.service.ts ***!
          \*******************************************************************************/
        /*! exports provided: ValidationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function () { return ValidationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var ValidationService = /** @class */ (function () {
                function ValidationService() {
                }
                ValidationService.prototype.getValidatorErrorMessage = function (validatorName, validatorValue) {
                    var config = {
                        'required': 'This field is required.',
                        'invalidCreditCard': 'Please enter a valid credit card number.',
                        'invalidDate': 'Please enter correct date .',
                        // 'invalidEmailAddress': 'Please enter a valid email address.'],
                        // 'invalidPassword': langJson['Please enter a valid password. Password must be at least 6 characters long.'],
                        'minlength': 'This field must be 6 characters long.',
                        'maxlength': 'This field must be 15 characters long.',
                        // 'invalidPhoneNumber': langJson['Please enter a valid phone number.'],
                        'invalidNumber': 'Please enter number only.',
                    };
                    return config[validatorName];
                };
                ValidationService.dateValidityCheck = function (control) {
                    console.log("coming to check");
                    if (control.value.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)) {
                        return null;
                    }
                    else {
                        console.log("rteurnrnrr2");
                        return { 'invalidDate': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.creditCardValidator = function (control) {
                    console.log("coming to check");
                    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
                    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
                        return null;
                    }
                    else {
                        console.log("rteurnrnrr2");
                        return { 'invalidCreditCard': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.emailValidator = function (control) {
                    // RFC 2822 compliant regex
                    if (!control.value) {
                        return null;
                    }
                    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) || control.value === '') {
                        return null;
                    }
                    else {
                        return { 'invalidEmailAddress': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.alternateEmailValidator = function (control) {
                    // RFC 2822 compliant regex
                    if (control.value === '') {
                        return null;
                    }
                    else if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) || control.value === '') {
                        return null;
                    }
                    else {
                        return { 'invalidEmailAddress': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.passwordValidator = function (control) {
                    if (!control.value) {
                        return null;
                    }
                    if (control.value.length > 5) {
                        return null;
                    }
                    else {
                        return { 'invalidPassword': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.phoneNumberValidator = function (control) {
                    // US Phone numbers
                    if ((control.value.match(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i) && (control.value.length === 10)) || (control.value === '')) {
                        return null;
                    }
                    else {
                        return { 'invalidPhoneNumber': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.NumberValidator = function (control) {
                    // Numbers
                    if (!control.value) {
                        return null;
                    }
                    if (control.value.match(/^[0-9 ]*$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidPhoneNumber': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.NumberPureValidator = function (control) {
                    // Numbers
                    if (!control.value) {
                        return null;
                    }
                    if (control.value.match(/^[0-9 ]*$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidNumber': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.whiteSpaceValidator = function (control) {
                    // Numbers
                    if (control.value && !control.value.trim()) {
                        return { 'pattern': true };
                    }
                    return null;
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.mobileNumberValidator = function (control) {
                    // US Phone numbers
                    if (control.value.match(/^[7-9]{1}[0-9]{9}$/)) {
                        return null;
                    }
                    else {
                        return { 'invalidPhoneNumber': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.VINValidator = function (control) {
                    // Vehicle VIN
                    if (control.value.length === 17) {
                        return null;
                    }
                    else {
                        return { 'invalidVIN': true };
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.capacityValidator = function (control) {
                    if (parseInt(control.value) > 5500) {
                        return { 'invalidCapacity': true };
                    }
                    else {
                        return null;
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.weightValidator = function (control) {
                    if (parseInt(control.value) > 250) {
                        return { 'invalidWeight': true };
                    }
                    else {
                        return null;
                    }
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.patternValidator = function (control, pattern) {
                    if (control.value.match(pattern) || control.value === '') {
                        return null;
                    }
                    else {
                        return { 'invalid Patteren': true };
                    }
                };
                /**
               * to fire all errors before submission
               * @param form FormGroup to be validated.
               */
                ValidationService.prototype.validateAllFormFields = function (form) {
                    var _this = this;
                    var keys = Object.keys(form.controls);
                    keys.forEach(function (field) {
                        var control = form.get(field);
                        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                            control.markAsTouched({ onlySelf: true });
                            control.markAsDirty({ onlySelf: true });
                        }
                        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                            _this.validateAllFormFields(control);
                        }
                        else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                            control.controls.forEach(function (element) {
                                _this.validateAllFormFields(element);
                            });
                        }
                    });
                };
                /**
               * function to set dynamic decimal point config to input fields
               * @param decimal_calculation_precision_point decimal precision point value for filter
               */
                // tslint:disable-next-line:member-ordering
                ValidationService.setDecimalConfigRegexPattren = function (decimal) {
                    // RFC 2822 compliant regex
                    return function (control) {
                        var decimalConfigRegex;
                        if (decimal === 0) {
                            decimalConfigRegex = '^[0-9]*?$';
                        }
                        else {
                            decimalConfigRegex = '^[0-9]*(\.[0-9]{0,' + (decimal ? decimal : 2) + '})?$';
                        }
                        var regexp = new RegExp(decimalConfigRegex);
                        if (control.value === '' || control.value === null) {
                            return null;
                        }
                        else if (regexp.test(control.value)) {
                            return null;
                        }
                        else {
                            return { 'invalidDecimalPattern': true };
                        }
                    };
                };
                // tslint:disable-next-line:member-ordering
                ValidationService.setDecimalConfigRegex = function (decimal_calculation_precision_point) {
                    var decimalConfigRegex = '^[0-9]{1,9}(\.[0-9]{1,' + (decimal_calculation_precision_point ? decimal_calculation_precision_point : 2) + '})?$';
                    var regexp = new RegExp(decimalConfigRegex);
                    console.log('regular exp', regexp);
                    return regexp.source;
                };
                /**
                 * function to validate hybrid email/phone field
                 * @param siblingName
                 * @param valueField
                 * @param countryCodeField
                 */
                // tslint:disable-next-line:member-ordering
                ValidationService.HybridEmailPhone = function (siblingName, valueField, countryCodeField) {
                    return function (control) {
                        if (control.parent) {
                            var fc = control.parent.controls[siblingName];
                            var valueControl = control.parent.controls[valueField];
                            if (!control.value)
                                return null;
                            if (control.value.match(/^[0-9 ]*$/)) {
                                fc.setValue(true);
                                valueControl.setValue(control.parent.controls[countryCodeField].value + ' ' + control.value);
                                fc.updateValueAndValidity();
                                valueControl.updateValueAndValidity();
                                return null;
                            }
                            else {
                                fc.setValue(false);
                                valueControl.setValue(control.value);
                                fc.updateValueAndValidity();
                                valueControl.updateValueAndValidity();
                                if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) || control.value === '') {
                                    return null;
                                }
                                else {
                                    return { 'invalidEmailAddress': true };
                                }
                            }
                        }
                    };
                };
                return ValidationService;
            }());
            ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ValidationService);
            /***/ 
        }),
        /***/ "./src/app/modules/payments/components/validations/validations.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/modules/payments/components/validations/validations.ts ***!
          \************************************************************************/
        /*! exports provided: ControlMessages */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessages", function () { return ControlMessages; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * Created by cl-macmini-10 on 19/09/16.
             */
            // import { TranslateService } from '../../../translate/services/translate.service';
            // import { CommonService } from '../../../../services/common.service';
            var ControlMessages = /** @class */ (function () {
                function ControlMessages() {
                    // this.decimal = this.commonService.loginData ? this.commonService.loginData.decimal_calculation_precision_point : 2;
                }
                ControlMessages.prototype.config = function (key, validatorValue) {
                    var _config = {
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
                        'validateEmail': "Enter a valid email",
                        'ccNumber': 'Please enter a valid card number',
                        'expDate': 'Invalid expiry date',
                        'decimalPoint': 'Maximum decimal value is ' + this.decimal
                    };
                    return _config[key];
                };
                Object.defineProperty(ControlMessages.prototype, "errorMessage", {
                    get: function () {
                        if (this.control.dirty && this.control.touched) {
                            for (var propertyName in this.control.errors) {
                                if (this.control.errors.hasOwnProperty(propertyName)) {
                                    return this.control.errors.label || this.config(propertyName, this.control.errors);
                                }
                            }
                        }
                        return '';
                    },
                    enumerable: true,
                    configurable: true
                });
                return ControlMessages;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ControlMessages.prototype, "control", void 0);
            ControlMessages = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'control-messages',
                    template: "<div  class=\"error\">{{errorMessage }}</div>",
                    styles: ["\n        .error{\n            color:red;\n            font-family: ProximaNova-Regular;\n            font-size: 14px;\n        }\n    "]
                })
            ], ControlMessages);
            /***/ 
        }),
        /***/ "./src/app/modules/payments/payment.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/modules/payments/payment.component.ts ***!
          \*******************************************************/
        /*! exports provided: PaymentsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function () { return PaymentsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments.service */ "./src/app/modules/payments/payments.service.ts");
            var PaymentsComponent = /** @class */ (function () {
                function PaymentsComponent(paymentService, router) {
                    this.paymentService = paymentService;
                    this.router = router;
                    this.loggedIn = false;
                }
                PaymentsComponent.prototype.ngOnInit = function () {
                    this.loggedIn = (localStorage.getItem('login') === 'true' ? true : false);
                    if (!this.loggedIn) {
                        var data = this.paymentService.getAllTransactions();
                        localStorage.setItem('data', JSON.stringify(data));
                    }
                };
                PaymentsComponent.prototype.logout = function () {
                    this.loggedIn = false;
                    localStorage.setItem("login", 'false');
                };
                PaymentsComponent.prototype.welcome = function () {
                    this.loggedIn = true;
                    localStorage.setItem("login", 'true');
                };
                return PaymentsComponent;
            }());
            PaymentsComponent.ctorParameters = function () { return [
                { type: _payments_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-payments',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payments.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/payments.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payments.scss */ "./src/app/modules/payments/payments.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], PaymentsComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/payments/payments.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/modules/payments/payments.module.ts ***!
          \*****************************************************/
        /*! exports provided: PaymentsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function () { return PaymentsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment.component */ "./src/app/modules/payments/payment.component.ts");
            /* harmony import */ var _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/transactions/transactions.component */ "./src/app/modules/payments/components/transactions/transactions.component.ts");
            /* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/app/modules/payments/components/cards/cards.component.ts");
            /* harmony import */ var _components_validations_validations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/validations/validations */ "./src/app/modules/payments/components/validations/validations.ts");
            var paymentRoutes = [
                {
                    path: '',
                    component: _payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentsComponent"],
                },
            ];
            var PaymentsModule = /** @class */ (function () {
                function PaymentsModule() {
                }
                return PaymentsModule;
            }());
            PaymentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        // RouterModule.forChild(aclRoutes),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(paymentRoutes),
                    ],
                    declarations: [
                        _payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentsComponent"],
                        _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"],
                        _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"],
                        _components_validations_validations__WEBPACK_IMPORTED_MODULE_8__["ControlMessages"]
                    ],
                    exports: [_components_validations_validations__WEBPACK_IMPORTED_MODULE_8__["ControlMessages"]],
                })
            ], PaymentsModule);
            /***/ 
        }),
        /***/ "./src/app/modules/payments/payments.scss": 
        /*!************************************************!*\
          !*** ./src/app/modules/payments/payments.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".display-flex {\n  display: flex;\n}\n\n.h3 {\n  color: gray !important;\n}\n\n.background_cards {\n  background: lightgray;\n  min-height: 800px;\n}\n\n.background_transaction {\n  background-color: whitesmoke;\n}\n\n.welcome-btn {\n  margin: auto;\n  margin-top: 50px;\n}\n\n.logout {\n  float: right;\n  position: relative;\n  z-index: 10001;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wdW5yZWV0a2F1ci9EZXNrdG9wL3B1bnJlZXQvd2FsbGV0TWFuYWdlbWVudC9zcmMvYXBwL21vZHVsZXMvcGF5bWVudHMvcGF5bWVudHMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wYXltZW50cy9wYXltZW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0Msc0JBQUE7QUNFRDs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLDRCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXltZW50cy9wYXltZW50cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmgze1xuIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG5cbn1cbi5iYWNrZ3JvdW5kX2NhcmRze1xuICAgIGJhY2tncm91bmQ6bGlnaHRncmF5O1xuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xufVxuLmJhY2tncm91bmRfdHJhbnNhY3Rpb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi53ZWxjb21lLWJ0bntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5sb2dvdXR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDAwMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiLmRpc3BsYXktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oMyB7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kX2NhcmRzIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBtaW4taGVpZ2h0OiA4MDBweDtcbn1cblxuLmJhY2tncm91bmRfdHJhbnNhY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ud2VsY29tZS1idG4ge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5sb2dvdXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMDE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/payments/payments.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/modules/payments/payments.service.ts ***!
          \******************************************************/
        /*! exports provided: PaymentService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function () { return PaymentService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _transaction_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../transaction.json */ "./transaction.json");
            var _transaction_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../../../transaction.json */ "./transaction.json", 1);
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                })
            };
            var PaymentService = /** @class */ (function () {
                function PaymentService(http) {
                    this.http = http;
                    this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                }
                PaymentService.prototype.getAllTransactions = function () {
                    localStorage.setItem('selectedId', _transaction_json__WEBPACK_IMPORTED_MODULE_3__[0].id);
                    return _transaction_json__WEBPACK_IMPORTED_MODULE_3__;
                };
                PaymentService.prototype.setCardId = function (id) {
                    _transaction_json__WEBPACK_IMPORTED_MODULE_3__.map(function (item) {
                        if (item.id == id) {
                            localStorage.setItem('selectedId', id);
                        }
                    });
                };
                PaymentService.prototype.getTransactionById = function () {
                    var item_to_return = {};
                    var id = localStorage.getItem('selectedId');
                    if (id && id != null) {
                        _transaction_json__WEBPACK_IMPORTED_MODULE_3__.map(function (item) {
                            if (item.id == id) {
                                item_to_return = item;
                            }
                        });
                        return item_to_return;
                    }
                    else {
                        return [];
                    }
                };
                PaymentService.prototype.newEvent = function (event) {
                    this._subject.next(event);
                };
                Object.defineProperty(PaymentService.prototype, "events$", {
                    get: function () {
                        return this._subject.asObservable();
                    },
                    enumerable: true,
                    configurable: true
                });
                return PaymentService;
            }());
            PaymentService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PaymentService);
            /***/ 
        }),
        /***/ "./transaction.json": 
        /*!**************************!*\
          !*** ./transaction.json ***!
          \**************************/
        /*! exports provided: 0, 1, default */
        /***/ (function (module) {
            module.exports = JSON.parse("[{\"id\":\"P0001\",\"name\":\"Punreet Kaur\",\"card_number\":\"XXXXXXXXXXX345\",\"cvc\":499,\"type\":\"./assets/images/visa.jpeg\",\"valid\":\"2 July,2022\",\"validity\":true,\"total\":450.08,\"transactions\":[{\"id\":\"tran_123\",\"product_name\":\"apple i phone\",\"price\":433.89,\"date\":\"14 Nov 2018\",\"description\":\"new product with 6gb ram\"},{\"id\":\"tran_456\",\"product_name\":\"samsung note 10\",\"price\":901.06,\"date\":\"14 April, 2018\",\"description\":\"new product\"}]},{\"id\":\"P0002\",\"name\":\"amrit singh\",\"card_number\":\"XXXXXXXXXXX678\",\"cvc\":499,\"type\":\"/assets/images/mastercard.jpeg\",\"valid\":\"11 Nov,2015\",\"validity\":false,\"total\":950.89,\"transactions\":[{\"id\":\"tran_888\",\"product_name\":\"Phone\",\"price\":433.22,\"date\":\"16 March, 2019\",\"description\":\"new product with 6gb ram\"}]}]");
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-payments-payments-module-es2015.js.map
//# sourceMappingURL=modules-payments-payments-module-es5.js.map
//# sourceMappingURL=modules-payments-payments-module-es5.js.map