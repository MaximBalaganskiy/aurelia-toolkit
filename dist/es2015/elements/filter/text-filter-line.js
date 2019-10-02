import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
var TextFilterLine = /** @class */ (function (_super) {
    tslib_1.__extends(TextFilterLine, _super);
    function TextFilterLine(element) {
        var _this = _super.call(this, element) || this;
        _this.operators = [FilterOperator.Like, FilterOperator.NotLike];
        return _this;
    }
    TextFilterLine = tslib_1.__decorate([
        au.customElement("text-filter-line"),
        tslib_1.__metadata("design:paramtypes", [Element])
    ], TextFilterLine);
    return TextFilterLine;
}(FilterLineBase));
export { TextFilterLine };
//# sourceMappingURL=text-filter-line.js.map