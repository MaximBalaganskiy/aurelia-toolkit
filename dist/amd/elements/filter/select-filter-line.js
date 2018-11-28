define(["require", "exports", "tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (require, exports, tslib_1, au, filter_line_base_1, filter_operator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let SelectFilterLine = class SelectFilterLine extends filter_line_base_1.FilterLineBase {
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
    exports.SelectFilterLine = SelectFilterLine;
});
