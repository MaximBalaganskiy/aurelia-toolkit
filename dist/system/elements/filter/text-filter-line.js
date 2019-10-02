System.register(["tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, filter_line_base_1, filter_operator_1, TextFilterLine;
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
            TextFilterLine = /** @class */ (function (_super) {
                tslib_1.__extends(TextFilterLine, _super);
                function TextFilterLine(element) {
                    var _this = _super.call(this, element) || this;
                    _this.operators = [filter_operator_1.FilterOperator.Like, filter_operator_1.FilterOperator.NotLike];
                    return _this;
                }
                TextFilterLine = tslib_1.__decorate([
                    au.customElement("text-filter-line"),
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], TextFilterLine);
                return TextFilterLine;
            }(filter_line_base_1.FilterLineBase));
            exports_1("TextFilterLine", TextFilterLine);
        }
    };
});
//# sourceMappingURL=text-filter-line.js.map