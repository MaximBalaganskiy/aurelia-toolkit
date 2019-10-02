define(["require", "exports", "tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (require, exports, tslib_1, au, filter_line_base_1, filter_operator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LookupFilterLine = /** @class */ (function (_super) {
        tslib_1.__extends(LookupFilterLine, _super);
        function LookupFilterLine(element) {
            var _this = _super.call(this, element) || this;
            _this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot];
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
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", Function)
        ], LookupFilterLine.prototype, "optionsFunction", void 0);
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", Object)
        ], LookupFilterLine.prototype, "displayFieldName", void 0);
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", Object)
        ], LookupFilterLine.prototype, "valueFieldName", void 0);
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", String)
        ], LookupFilterLine.prototype, "optionHtml", void 0);
        LookupFilterLine = tslib_1.__decorate([
            au.customElement("lookup-filter-line"),
            tslib_1.__metadata("design:paramtypes", [Element])
        ], LookupFilterLine);
        return LookupFilterLine;
    }(filter_line_base_1.FilterLineBase));
    exports.LookupFilterLine = LookupFilterLine;
});
//# sourceMappingURL=lookup-filter-line.js.map