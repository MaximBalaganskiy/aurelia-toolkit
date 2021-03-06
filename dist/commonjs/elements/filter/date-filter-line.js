"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var filter_line_base_1 = require("./filter-line-base");
var filter_operator_1 = require("./filter-operator");
var DateFilterLine = /** @class */ (function (_super) {
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
exports.DateFilterLine = DateFilterLine;
//# sourceMappingURL=date-filter-line.js.map