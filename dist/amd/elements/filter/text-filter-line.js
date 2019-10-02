define(["require", "exports", "tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (require, exports, tslib_1, au, filter_line_base_1, filter_operator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextFilterLine = /** @class */ (function (_super) {
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
    exports.TextFilterLine = TextFilterLine;
});
//# sourceMappingURL=text-filter-line.js.map