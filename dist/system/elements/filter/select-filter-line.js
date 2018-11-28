System.register(["tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, filter_line_base_1, filter_operator_1, SelectFilterLine;
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
            SelectFilterLine = class SelectFilterLine extends filter_line_base_1.FilterLineBase {
                constructor(element) {
                    super(element);
                    this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot];
                }
                hydrateInternal(fl) {
                    fl.options = this.options;
                    fl.displayFieldName = this.displayFieldName;
                    fl.valueFieldName = this.valueFieldName;
                }
                getDisplay(option) {
                    if (!this.displayFieldName) {
                        return option;
                    }
                    else if (this.displayFieldName instanceof Function) {
                        return this.displayFieldName(option);
                    }
                    else {
                        return option[this.displayFieldName];
                    }
                }
                getValue(option) {
                    if (!this.valueFieldName) {
                        return option;
                    }
                    else if (this.valueFieldName instanceof Function) {
                        return this.valueFieldName(option);
                    }
                    else {
                        return option[this.valueFieldName];
                    }
                }
            };
            tslib_1.__decorate([
                au.bindable
            ], SelectFilterLine.prototype, "options", void 0);
            tslib_1.__decorate([
                au.bindable
            ], SelectFilterLine.prototype, "displayFieldName", void 0);
            tslib_1.__decorate([
                au.bindable
            ], SelectFilterLine.prototype, "valueFieldName", void 0);
            SelectFilterLine = tslib_1.__decorate([
                au.customElement("select-filter-line")
            ], SelectFilterLine);
            exports_1("SelectFilterLine", SelectFilterLine);
        }
    };
});
