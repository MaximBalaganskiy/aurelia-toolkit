"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var filter_line_base_1 = require("./filter-line-base");
var filter_operator_1 = require("./filter-operator");
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
//# sourceMappingURL=text-filter-line.js.map