import { __decorate, __extends, __metadata } from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
var BoolFilterLine = /** @class */ (function (_super) {
    __extends(BoolFilterLine, _super);
    function BoolFilterLine(element) {
        var _this = _super.call(this, element) || this;
        _this.operators = [FilterOperator.Is];
        return _this;
    }
    BoolFilterLine = __decorate([
        au.customElement("bool-filter-line"),
        __metadata("design:paramtypes", [Element])
    ], BoolFilterLine);
    return BoolFilterLine;
}(FilterLineBase));
export { BoolFilterLine };
//# sourceMappingURL=bool-filter-line.js.map