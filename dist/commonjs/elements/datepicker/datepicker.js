"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var aurelia_materialize_bridge_1 = require("aurelia-materialize-bridge");
var Datepicker = /** @class */ (function () {
    function Datepicker(element, taskQueue) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
        this.mdUnrenderValidateResults = function (results, renderer) {
            var e_1, _a;
            try {
                for (var results_1 = tslib_1.__values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                    var result = results_1_1.value;
                    if (!result.valid) {
                        renderer.removeMessage(_this.validationContainer, result);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            renderer.removeValidationClasses(_this.input);
        };
        this.mdRenderValidateResults = function (results, renderer) {
            var e_2, _a;
            try {
                for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                    var result = results_2_1.value;
                    if (!result.valid) {
                        renderer.addMessage(_this.validationContainer, result);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (results_2_1 && !results_2_1.done && (_a = results_2.return)) _a.call(results_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            renderer.addValidationClasses(_this.input, !results.find(function (x) { return !x.valid; }));
        };
        this.controlId = "datepicker-" + Datepicker_1.id++;
    }
    Datepicker_1 = Datepicker;
    Datepicker.prototype.valueChanged = function () {
        var _this = this;
        au.fireEvent(this.element, "change");
        au.fireEvent(this.element, "blur");
        if (this.minDate && this.value < this.minDate) {
            this.value = this.minDate;
        }
        if (this.maxDate && this.value > this.maxDate) {
            this.value = this.maxDate;
        }
        this.taskQueue.queueTask(function () { return au.updateLabel(_this.input, _this.labelElement); });
    };
    Datepicker.prototype.bind = function () {
        //
    };
    Datepicker.prototype.attached = function () {
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.labelElement.classList.add(this.value ? "active" : "inactive");
    };
    Datepicker.prototype.detached = function () {
        aurelia_materialize_bridge_1.MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
        this.element.mdRenderValidateResults = null;
        this.element.mdUnrenderValidateResults = null;
    };
    Datepicker.prototype.open = function () {
        if (!this.readonly) {
            this.mdDatepicker.instance.setDate(this.value);
            this.mdDatepicker.open();
        }
    };
    Datepicker.prototype.blur = function () {
        au.fireEvent(this.element, "blur");
    };
    Datepicker.prototype.focus = function () {
        this.input.focus();
        au.fireEvent(this.element, "focus");
    };
    Datepicker.prototype.suppressMaterializeChange = function (e) {
        e.stopPropagation();
    };
    var Datepicker_1;
    Datepicker.id = 0;
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], Datepicker.prototype, "readonly", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], Datepicker.prototype, "label", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Object)
    ], Datepicker.prototype, "yearRange", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Date)
    ], Datepicker.prototype, "minDate", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Date)
    ], Datepicker.prototype, "maxDate", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Date)
    ], Datepicker.prototype, "value", void 0);
    Datepicker = Datepicker_1 = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
    ], Datepicker);
    return Datepicker;
}());
exports.Datepicker = Datepicker;
//# sourceMappingURL=datepicker.js.map