import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
let NumberFilterLine = class NumberFilterLine extends FilterLineBase {
    constructor(element) {
        super(element);
        this.operators = [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.GreaterThan, FilterOperator.LessThan];
        this.maxWidth = 150;
    }
    valueTextChanged() {
        this.value = au.numeral(this.valueText).value();
    }
};
tslib_1.__decorate([
    au.observable
], NumberFilterLine.prototype, "valueText", void 0);
NumberFilterLine = tslib_1.__decorate([
    au.customElement("number-filter-line")
], NumberFilterLine);
export { NumberFilterLine };
