System.register(["tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, filter_line_base_1, filter_operator_1, LookupFilterLine;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (filter_line_base_1_1) {
                filter_line_base_1 = filter_line_base_1_1;
            },
            function (filter_operator_1_1) {
                filter_operator_1 = filter_operator_1_1;
            }
        ],
        execute: function () {
            LookupFilterLine = class LookupFilterLine extends filter_line_base_1.FilterLineBase {
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
            exports_1("LookupFilterLine", LookupFilterLine);
        }
    };
});
