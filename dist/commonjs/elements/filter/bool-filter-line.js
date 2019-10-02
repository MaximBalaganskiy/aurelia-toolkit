"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var filter_line_base_1 = require("./filter-line-base");
var filter_operator_1 = require("./filter-operator");
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
//# sourceMappingURL=bool-filter-line.js.map