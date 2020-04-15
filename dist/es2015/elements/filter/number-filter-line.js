import { __decorate, __extends, __metadata } from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
var NumberFilterLine = /** @class */ (function (_super) {
    __extends(NumberFilterLine, _super);
    function NumberFilterLine(element) {
        var _this = _super.call(this, element) || this;
        _this.operators = [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.GreaterThan, FilterOperator.LessThan];
        _this.maxWidth = 150;
        return _this;
    }
    NumberFilterLine.prototype.valueTextChanged = function () {
        this.value = au.numeral(this.valueText).value();
    };
    __decorate([
        au.observable,
        __metadata("design:type", String)
    ], NumberFilterLine.prototype, "valueText", void 0);
    NumberFilterLine = __decorate([
        au.customElement("number-filter-line"),
        __metadata("design:paramtypes", [Element])
    ], NumberFilterLine);
    return NumberFilterLine;
}(FilterLineBase));
export { NumberFilterLine };
//# sourceMappingURL=number-filter-line.js.map