import { __decorate, __extends, __metadata } from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
var LookupFilterLine = /** @class */ (function (_super) {
    __extends(LookupFilterLine, _super);
    function LookupFilterLine(element) {
        var _this = _super.call(this, element) || this;
        _this.operators = [FilterOperator.Is, FilterOperator.IsNot];
        return _this;
    }
    LookupFilterLine.prototype.optionHtmlChanged = function () {
        this.getOptionHtml = Function("option", "return `" + this.optionHtml.replace(/\(/g, "{").replace(/\)/g, "}") + "`");
    };
    LookupFilterLine.prototype.hydrateInternal = function (fl) {
        fl.optionsFunction = this.optionsFunction;
        fl.displayFieldName = this.displayFieldName;
        fl.valueFieldName = this.valueFieldName;
        fl.optionHtml = this.optionHtml;
        fl.getOptionHtml = this.getOptionHtml;
    };
    __decorate([
        au.bindable,
        __metadata("design:type", Function)
    ], LookupFilterLine.prototype, "optionsFunction", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", Object)
    ], LookupFilterLine.prototype, "displayFieldName", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", Object)
    ], LookupFilterLine.prototype, "valueFieldName", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], LookupFilterLine.prototype, "optionHtml", void 0);
    LookupFilterLine = __decorate([
        au.customElement("lookup-filter-line"),
        __metadata("design:paramtypes", [Element])
    ], LookupFilterLine);
    return LookupFilterLine;
}(FilterLineBase));
export { LookupFilterLine };
//# sourceMappingURL=lookup-filter-line.js.map