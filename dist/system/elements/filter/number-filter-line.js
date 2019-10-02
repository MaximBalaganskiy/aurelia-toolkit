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
            NumberFilterLine = /** @class */ (function (_super) {
                tslib_1.__extends(NumberFilterLine, _super);
                function NumberFilterLine(element) {
                    var _this = _super.call(this, element) || this;
                    _this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot, filter_operator_1.FilterOperator.GreaterThan, filter_operator_1.FilterOperator.LessThan];
                    _this.maxWidth = 150;
                    return _this;
                }
                NumberFilterLine.prototype.valueTextChanged = function () {
                    this.value = au.numeral(this.valueText).value();
                };
                tslib_1.__decorate([
                    au.observable,
                    tslib_1.__metadata("design:type", String)
                ], NumberFilterLine.prototype, "valueText", void 0);
                NumberFilterLine = tslib_1.__decorate([
                    au.customElement("number-filter-line"),
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], NumberFilterLine);
                return NumberFilterLine;
            }(filter_line_base_1.FilterLineBase));
            exports_1("NumberFilterLine", NumberFilterLine);
        }
    };
});
//# sourceMappingURL=number-filter-line.js.map