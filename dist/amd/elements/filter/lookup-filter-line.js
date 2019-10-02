define(["require", "exports", "tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (require, exports, tslib_1, au, filter_line_base_1, filter_operator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let LookupFilterLine = class LookupFilterLine extends filter_line_base_1.FilterLineBase {
        constructor(element) {
            super(element);
            this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot];
        }
        optionHtmlChanged() {
            this.getOptionHtml = Function("option", "return `" + this.optionHtml.replace(/\(/g, "{").replace(/\)/g, "}") + "`");
        }
        hydrateInternal(fl) {
            fl.optionsFunction = this.optionsFunction;
            fl.displayFieldName = this.displayFieldName;
            fl.valueFieldName = this.valueFieldName;
            fl.optionHtml = this.optionHtml;
            fl.getOptionHtml = this.getOptionHtml;
        }
    };
    tslib_1.__decorate([
        au.bindable
    ], LookupFilterLine.prototype, "optionsFunction", void 0);
    tslib_1.__decorate([
        au.bindable
    ], LookupFilterLine.prototype, "displayFieldName", void 0);
    tslib_1.__decorate([
        au.bindable
    ], LookupFilterLine.prototype, "valueFieldName", void 0);
    tslib_1.__decorate([
        au.bindable
    ], LookupFilterLine.prototype, "optionHtml", void 0);
    LookupFilterLine = tslib_1.__decorate([
        au.customElement("lookup-filter-line")
    ], LookupFilterLine);
    exports.LookupFilterLine = LookupFilterLine;
});
