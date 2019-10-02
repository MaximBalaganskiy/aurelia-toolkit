define(["require", "exports", "tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (require, exports, tslib_1, au, filter_line_base_1, filter_operator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let NumberFilterLine = class NumberFilterLine extends filter_line_base_1.FilterLineBase {
        constructor(element) {
            super(element);
            this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot, filter_operator_1.FilterOperator.GreaterThan, filter_operator_1.FilterOperator.LessThan];
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
    exports.NumberFilterLine = NumberFilterLine;
});
