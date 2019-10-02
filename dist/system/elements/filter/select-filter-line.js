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
            SelectFilterLine = /** @class */ (function (_super) {
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
            exports_1("SelectFilterLine", SelectFilterLine);
        }
    };
});
//# sourceMappingURL=select-filter-line.js.map