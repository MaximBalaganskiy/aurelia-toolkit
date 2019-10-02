import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
var NumberFilterLine = /** @class */ (function (_super) {
    tslib_1.__extends(NumberFilterLine, _super);
    function NumberFilterLine(element) {
        var _this = _super.call(this, element) || this;
        _this.operators = [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.GreaterThan, FilterOperator.LessThan];
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
}(FilterLineBase));
export { NumberFilterLine };
//# sourceMappingURL=number-filter-line.js.map