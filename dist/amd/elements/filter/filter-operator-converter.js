define(["require", "exports", "tslib", "../../aurelia", "./filter-operator"], function (require, exports, tslib_1, au, filter_operator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let FilterOperatorValueConverter = class FilterOperatorValueConverter {
        constructor(i18n) {
            this.i18n = i18n;
            this.i18nResource = this.i18n.tr("aurelia-toolkit:filter.operator", { returnObjects: true });
        }
        toView(value) {
            switch (value) {
                case filter_operator_1.FilterOperator.Like: return this.i18nResource.like;
                case filter_operator_1.FilterOperator.NotLike: return this.i18nResource.notLike;
                case filter_operator_1.FilterOperator.Is: return this.i18nResource.is;
                case filter_operator_1.FilterOperator.IsNot: return this.i18nResource.isNot;
                case filter_operator_1.FilterOperator.LessThan: return "≤";
                case filter_operator_1.FilterOperator.GreaterThan: return "≥";
                case filter_operator_1.FilterOperator.IsBefore: return this.i18nResource.isBefore;
                case filter_operator_1.FilterOperator.IsAfter: return this.i18nResource.isAfter;
            }
        }
        fromView(value) {
            throw new Error("Not implemented");
        }
    };
    FilterOperatorValueConverter = tslib_1.__decorate([
        au.autoinject
    ], FilterOperatorValueConverter);
    exports.FilterOperatorValueConverter = FilterOperatorValueConverter;
});
