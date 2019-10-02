System.register(["tslib", "../../aurelia", "./filter-operator"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, filter_operator_1, FilterOperatorValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (filter_operator_1_1) {
                filter_operator_1 = filter_operator_1_1;
            }
        ],
        execute: function () {
            FilterOperatorValueConverter = class FilterOperatorValueConverter {
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
            exports_1("FilterOperatorValueConverter", FilterOperatorValueConverter);
        }
    };
});
