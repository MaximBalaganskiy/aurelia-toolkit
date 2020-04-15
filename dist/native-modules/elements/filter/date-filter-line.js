import { __decorate, __extends, __metadata } from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
var DateFilterLine = /** @class */ (function (_super) {
    __extends(DateFilterLine, _super);
    function DateFilterLine(element) {
        var _this = _super.call(this, element) || this;
        _this.operators = [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.IsBefore, FilterOperator.IsAfter];
        _this.maxWidth = 150;
        return _this;
    }
    DateFilterLine = __decorate([
        au.customElement("date-filter-line"),
        __metadata("design:paramtypes", [Element])
    ], DateFilterLine);
    return DateFilterLine;
}(FilterLineBase));
export { DateFilterLine };
//# sourceMappingURL=date-filter-line.js.map