import { __decorate, __metadata, __read, __spread } from "tslib";
import * as au from "../../aurelia";
var Datepicker = /** @class */ (function () {
    function Datepicker(element, taskQueue) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
        this.firstDay = 1;
        this.validateResults = [];
        this.mdUnrenderValidateResults = function (results, renderer) {
            _this.validateResults = _this.validateResults.filter(function (x) { return !results.find(function (y) { return y.id === x.id; }); });
            _this.validationClass = undefined;
        };
        this.mdRenderValidateResults = function (results, renderer) {
            var _a;
            (_a = _this.validateResults).push.apply(_a, __spread(results.filter(function (x) { return !x.valid; })));
            _this.validationClass = results.find(function (x) { return !x.valid; }) ? "invalid" : "valid";
        };
        this.controlId = "datepicker-" + Datepicker_1.id++;
    }
    Datepicker_1 = Datepicker;
    Datepicker.prototype.valueChanged = function () {
        var _this = this;
        au.fireEvent(this.element, "change");
        au.fireEvent(this.element, "blur");
        this.taskQueue.queueTask(function () {
            if (_this.minDate && _this.value < _this.minDate) {
                _this.value = _this.minDate;
            }
            if (_this.maxDate && _this.value > _this.maxDate) {
                _this.value = _this.maxDate;
            }
            if (_this.disableDayFn && _this.disableDayFn(_this.value)) {
                _this.value = undefined;
            }
            au.updateLabel(_this.input, _this.labelElement);
        });
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
        this.validationClass = undefined;
        this.validateResults = [];
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
    __decorate([
        au.bindable,
        __metadata("design:type", Boolean)
    ], Datepicker.prototype, "readonly", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], Datepicker.prototype, "label", void 0);
    __decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], Datepicker.prototype, "yearRange", void 0);
    __decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Date)
    ], Datepicker.prototype, "minDate", void 0);
    __decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Date)
    ], Datepicker.prototype, "maxDate", void 0);
    __decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Function)
    ], Datepicker.prototype, "disableDayFn", void 0);
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], Datepicker.prototype, "disableWeekends", void 0);
    __decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Number)
    ], Datepicker.prototype, "firstDay", void 0);
    __decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        __metadata("design:type", Date)
    ], Datepicker.prototype, "value", void 0);
    Datepicker = Datepicker_1 = __decorate([
        au.autoinject,
        __metadata("design:paramtypes", [Element, au.TaskQueue])
    ], Datepicker);
    return Datepicker;
}());
export { Datepicker };
//# sourceMappingURL=datepicker.js.map