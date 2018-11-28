import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
let DateFilterLine = class DateFilterLine extends FilterLineBase {
    constructor(element) {
        super(element);
        this.operators = [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.IsBefore, FilterOperator.IsAfter];
        this.maxWidth = 150;
    }
};
DateFilterLine = tslib_1.__decorate([
    au.customElement("date-filter-line")
], DateFilterLine);
export { DateFilterLine };
