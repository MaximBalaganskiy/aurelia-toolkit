System.register(["tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, filter_line_base_1, filter_operator_1, DateFilterLine;
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
            DateFilterLine = class DateFilterLine extends filter_line_base_1.FilterLineBase {
                constructor(element) {
                    super(element);
                    this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot, filter_operator_1.FilterOperator.IsBefore, filter_operator_1.FilterOperator.IsAfter];
                    this.maxWidth = 150;
                }
            };
            DateFilterLine = tslib_1.__decorate([
                au.customElement("date-filter-line")
            ], DateFilterLine);
            exports_1("DateFilterLine", DateFilterLine);
        }
    };
});
