import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
let SelectFilterLine = class SelectFilterLine extends FilterLineBase {
    constructor(element) {
        super(element);
        this.operators = [FilterOperator.Is, FilterOperator.IsNot];
    }
    hydrateInternal(fl) {
        fl.options = this.options;
        fl.displayFieldName = this.displayFieldName;
        fl.valueFieldName = this.valueFieldName;
    }
    getDisplay(option) {
        if (!this.displayFieldName) {
            return option;
        }
        else if (this.displayFieldName instanceof Function) {
            return this.displayFieldName(option);
        }
        else {
            return option[this.displayFieldName];
        }
    }
    getValue(option) {
        if (!this.valueFieldName) {
            return option;
        }
        else if (this.valueFieldName instanceof Function) {
            return this.valueFieldName(option);
        }
        else {
            return option[this.valueFieldName];
        }
    }
};
tslib_1.__decorate([
    au.bindable
], SelectFilterLine.prototype, "options", void 0);
tslib_1.__decorate([
    au.bindable
], SelectFilterLine.prototype, "displayFieldName", void 0);
tslib_1.__decorate([
    au.bindable
], SelectFilterLine.prototype, "valueFieldName", void 0);
SelectFilterLine = tslib_1.__decorate([
    au.customElement("select-filter-line")
], SelectFilterLine);
export { SelectFilterLine };
