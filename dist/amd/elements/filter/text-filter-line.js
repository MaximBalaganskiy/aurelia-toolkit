define(["require", "exports", "tslib", "../../aurelia", "./filter-line-base", "./filter-operator"], function (require, exports, tslib_1, au, filter_line_base_1, filter_operator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let TextFilterLine = class TextFilterLine extends filter_line_base_1.FilterLineBase {
        constructor(element) {
            super(element);
            this.operators = [filter_operator_1.FilterOperator.Like, filter_operator_1.FilterOperator.NotLike];
        }
    };
    TextFilterLine = tslib_1.__decorate([
        au.customElement("text-filter-line")
    ], TextFilterLine);
    exports.TextFilterLine = TextFilterLine;
});
