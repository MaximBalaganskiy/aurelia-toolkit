"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var filter_operator_1 = require("./filter-operator");
var FilterLineBase = /** @class */ (function () {
    function FilterLineBase(element) {
        this.element = element;
    }
    // tslint:disable-next-line:no-empty
    FilterLineBase.prototype.hydrateInternal = function (fl) { };
    FilterLineBase.prototype.hydrate = function (fl) {
        fl.label = this.label;
        fl.name = this.name;
        fl.operators = this.operators;
        fl.operator = this.operator;
        fl.value = this.value;
        fl.maxWidth = this.maxWidth;
        this.hydrateInternal(fl);
    };
    FilterLineBase.prototype.toJson = function () {
        return { name: this.name, operator: this.operator, value: this.value };
    };
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], FilterLineBase.prototype, "name", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", String)
    ], FilterLineBase.prototype, "label", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Object)
    ], FilterLineBase.prototype, "value", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Number)
    ], FilterLineBase.prototype, "operator", void 0);
    tslib_1.__decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Array)
    ], FilterLineBase.prototype, "operators", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
        tslib_1.__metadata("design:type", Number)
    ], FilterLineBase.prototype, "maxWidth", void 0);
    return FilterLineBase;
}());
exports.FilterLineBase = FilterLineBase;
//# sourceMappingURL=filter-line-base.js.map