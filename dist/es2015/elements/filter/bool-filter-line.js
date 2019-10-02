import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
let BoolFilterLine = class BoolFilterLine extends FilterLineBase {
    constructor(element) {
        super(element);
        this.operators = [FilterOperator.Is];
    }
};
BoolFilterLine = tslib_1.__decorate([
    au.customElement("bool-filter-line")
], BoolFilterLine);
export { BoolFilterLine };
