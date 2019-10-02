"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var filter_line_base_1 = require("./filter-line-base");
var filter_operator_1 = require("./filter-operator");
var SelectFilterLine = /** @class */ (function (_super) {
    tslib_1.__extends(SelectFilterLine, _super);
    function SelectFilterLine(element) {
        var _this = _super.call(this, element) || this;
        _this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot];
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
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Array)
    ], SelectFilterLine.prototype, "options", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Object)
    ], SelectFilterLine.prototype, "displayFieldName", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Object)
    ], SelectFilterLine.prototype, "valueFieldName", void 0);
    SelectFilterLine = tslib_1.__decorate([
        au.customElement("select-filter-line"),
        tslib_1.__metadata("design:paramtypes", [Element])
    ], SelectFilterLine);
    return SelectFilterLine;
}(filter_line_base_1.FilterLineBase));
exports.SelectFilterLine = SelectFilterLine;
//# sourceMappingURL=select-filter-line.js.map