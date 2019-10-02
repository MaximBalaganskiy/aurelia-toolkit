System.register(["tslib", "../../aurelia", "aurelia-materialize-bridge"], function (exports_1, context_1) {
    "use strict";
    var Datepicker_1, tslib_1, au, aurelia_materialize_bridge_1, Datepicker;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (aurelia_materialize_bridge_1_1) {
                aurelia_materialize_bridge_1 = aurelia_materialize_bridge_1_1;
            }
        ],
        execute: function () {
            "use strict";
            Datepicker = Datepicker_1 = class Datepicker {
                constructor(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.mdUnrenderValidateResults = (results, renderer) => {
                        for (let result of results) {
                            if (!result.valid) {
                                renderer.removeMessage(this.validationContainer, result);
                            }
                        }
                        renderer.removeValidationClasses(this.input);
                    };
                    this.mdRenderValidateResults = (results, renderer) => {
                        for (let result of results) {
                            if (!result.valid) {
                                renderer.addMessage(this.validationContainer, result);
                            }
                        }
                        renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
                    };
                    this.controlId = `datepicker-${Datepicker_1.id++}`;
                }
                valueChanged() {
                    au.fireEvent(this.element, "change");
                    au.fireEvent(this.element, "blur");
                    if (this.minDate && this.value < this.minDate) {
                        this.value = this.minDate;
                    }
                    if (this.maxDate && this.value > this.maxDate) {
                        this.value = this.maxDate;
                    }
                    this.taskQueue.queueTask(() => au.updateLabel(this.input, this.labelElement));
                }
                bind() {
                    //
                }
                attached() {
                    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
                    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
                    this.labelElement.classList.add(this.value ? "active" : "inactive");
                }
                detached() {
                    aurelia_materialize_bridge_1.MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
                    this.element.mdRenderValidateResults = null;
                    this.element.mdUnrenderValidateResults = null;
                }
                open() {
                    if (!this.readonly) {
                        this.mdDatepicker.instance.setDate(this.value);
                        this.mdDatepicker.open();
                    }
                }
                blur() {
                    au.fireEvent(this.element, "blur");
                }
                focus() {
                    this.input.focus();
                    au.fireEvent(this.element, "focus");
                }
                suppressMaterializeChange(e) {
                    e.stopPropagation();
                }
            };
            Datepicker.id = 0;
            tslib_1.__decorate([
                au.bindable
            ], Datepicker.prototype, "readonly", void 0);
            tslib_1.__decorate([
                au.bindable
            ], Datepicker.prototype, "label", void 0);
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
            ], Datepicker.prototype, "yearRange", void 0);
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
            ], Datepicker.prototype, "minDate", void 0);
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
            ], Datepicker.prototype, "maxDate", void 0);
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
            ], Datepicker.prototype, "value", void 0);
            Datepicker = Datepicker_1 = tslib_1.__decorate([
                au.autoinject
            ], Datepicker);
            exports_1("Datepicker", Datepicker);
        }
    };
});
