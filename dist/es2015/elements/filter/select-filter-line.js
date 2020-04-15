import { __decorate, __extends, __metadata } from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
var SelectFilterLine = /** @class */ (function (_super) {
    __extends(SelectFilterLine, _super);
    function SelectFilterLine(element) {
        var _this = _super.call(this, element) || this;
        _this.operators = [FilterOperator.Is, FilterOperator.IsNot];
        return _this;
    }
    SelectFilterLine.prototype.hydrateInternal = function (fl) {
        fl.options = this.options;
        fl.displayFieldName = this.displayFieldName;
        fl.valueFieldName = this.valueFieldName;
    };
    SelectFilterLine.prototype.getDisplay = function (option) {
        if (!this.displayFieldName) {
            return option;
        }
        else if (this.displayFieldName instanceof Function) {
            return this.displayFieldName(option);
        }
        else {
            return option[this.displayFieldName];
        }
    };
    SelectFilterLine.prototype.getValue = function (option) {
        if (!this.valueFieldName) {
            return option;
        }
        else if (this.valueFieldName instanceof Function) {
            return this.valueFieldName(option);
        }
        else {
            return option[this.valueFieldName];
        }
    };
    __decorate([
        au.bindable,
        __metadata("design:type", Array)
    ], SelectFilterLine.prototype, "options", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", Object)
    ], SelectFilterLine.prototype, "displayFieldName", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", Object)
    ], SelectFilterLine.prototype, "valueFieldName", void 0);
    SelectFilterLine = __decorate([
        au.customElement("select-filter-line"),
        __metadata("design:paramtypes", [Element])
    ], SelectFilterLine);
    return SelectFilterLine;
}(FilterLineBase));
export { SelectFilterLine };
//# sourceMappingURL=select-filter-line.js.map