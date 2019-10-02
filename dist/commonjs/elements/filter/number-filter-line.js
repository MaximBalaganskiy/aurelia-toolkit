"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var filter_line_base_1 = require("./filter-line-base");
var filter_operator_1 = require("./filter-operator");
var NumberFilterLine = /** @class */ (function (_super) {
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
exports.NumberFilterLine = NumberFilterLine;
//# sourceMappingURL=number-filter-line.js.map