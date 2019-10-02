import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
let LookupFilterLine = class LookupFilterLine extends FilterLineBase {
    constructor(element) {
        super(element);
        this.operators = [FilterOperator.Is, FilterOperator.IsNot];
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
export { LookupFilterLine };
