System.register(["tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, filter_line_base_1, filter_operator_1, NumberFilterLine;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (filter_line_base_1_1) {
                filter_line_base_1 = filter_line_base_1_1;
            },
            function (filter_operator_1_1) {
                filter_operator_1 = filter_operator_1_1;
            }
        ],
        execute: function () {
            NumberFilterLine = class NumberFilterLine extends filter_line_base_1.FilterLineBase {
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
            exports_1("NumberFilterLine", NumberFilterLine);
        }
    };
});
