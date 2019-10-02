System.register(["tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, filter_line_base_1, filter_operator_1, BoolFilterLine;
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
            BoolFilterLine = /** @class */ (function (_super) {
                tslib_1.__extends(BoolFilterLine, _super);
                function BoolFilterLine(element) {
                    var _this = _super.call(this, element) || this;
                    _this.operators = [filter_operator_1.FilterOperator.Is];
                    return _this;
                }
                BoolFilterLine = tslib_1.__decorate([
                    au.customElement("bool-filter-line"),
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], BoolFilterLine);
                return BoolFilterLine;
            }(filter_line_base_1.FilterLineBase));
            exports_1("BoolFilterLine", BoolFilterLine);
        }
    };
});
//# sourceMappingURL=bool-filter-line.js.map