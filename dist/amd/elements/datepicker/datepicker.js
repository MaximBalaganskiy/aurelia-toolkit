define(["require", "exports", "tslib", "../../aurelia", "aurelia-materialize-bridge"], function (require, exports, tslib_1, au, aurelia_materialize_bridge_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Datepicker_1;
    "use strict";
    let Datepicker = Datepicker_1 = class Datepicker {
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
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
    ], Datepicker.prototype, "value", void 0);
    Datepicker = Datepicker_1 = tslib_1.__decorate([
        au.autoinject
    ], Datepicker);
    exports.Datepicker = Datepicker;
});
