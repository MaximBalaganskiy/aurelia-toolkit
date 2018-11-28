"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
class FilterLineBase {
    constructor(element) {
        this.element = element;
    }
    // tslint:disable-next-line:no-empty
    hydrateInternal(fl) { }
    hydrate(fl) {
        fl.label = this.label;
        fl.name = this.name;
        fl.operators = this.operators;
        fl.operator = this.operator;
        fl.value = this.value;
        fl.maxWidth = this.maxWidth;
        this.hydrateInternal(fl);
    }
    toJson() {
        return { name: this.name, operator: this.operator, value: this.value };
    }
}
tslib_1.__decorate([
    au.bindable
], FilterLineBase.prototype, "name", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
], FilterLineBase.prototype, "label", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
], FilterLineBase.prototype, "value", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
], FilterLineBase.prototype, "operator", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
], FilterLineBase.prototype, "operators", void 0);
tslib_1.__decorate([
    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
], FilterLineBase.prototype, "maxWidth", void 0);
exports.FilterLineBase = FilterLineBase;
