define(["require", "exports", "tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (require, exports, tslib_1, au, filter_line_base_1, filter_operator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoolFilterLine = /** @class */ (function (_super) {
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
    exports.BoolFilterLine = BoolFilterLine;
});
//# sourceMappingURL=bool-filter-line.js.map