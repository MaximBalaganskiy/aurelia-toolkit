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
            DateFilterLine = /** @class */ (function (_super) {
                tslib_1.__extends(DateFilterLine, _super);
                function DateFilterLine(element) {
                    var _this = _super.call(this, element) || this;
                    _this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot, filter_operator_1.FilterOperator.IsBefore, filter_operator_1.FilterOperator.IsAfter];
                    _this.maxWidth = 150;
                    return _this;
                }
                DateFilterLine = tslib_1.__decorate([
                    au.customElement("date-filter-line"),
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], DateFilterLine);
                return DateFilterLine;
            }(filter_line_base_1.FilterLineBase));
            exports_1("DateFilterLine", DateFilterLine);
        }
    };
});
//# sourceMappingURL=date-filter-line.js.map