define(["require", "exports", "tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (require, exports, tslib_1, au, filter_line_base_1, filter_operator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let DateFilterLine = class DateFilterLine extends filter_line_base_1.FilterLineBase {
        constructor(element) {
            super(element);
            this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot, filter_operator_1.FilterOperator.IsBefore, filter_operator_1.FilterOperator.IsAfter];
            this.maxWidth = 150;
        }
    };
    DateFilterLine = tslib_1.__decorate([
        au.customElement("date-filter-line")
    ], DateFilterLine);
    exports.DateFilterLine = DateFilterLine;
});
