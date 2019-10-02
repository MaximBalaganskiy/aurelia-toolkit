import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterOperator } from "./filter-operator";
let FilterOperatorValueConverter = class FilterOperatorValueConverter {
    constructor(i18n) {
        this.i18n = i18n;
        this.i18nResource = this.i18n.tr("aurelia-toolkit:filter.operator", { returnObjects: true });
    }
    toView(value) {
        switch (value) {
            case FilterOperator.Like: return this.i18nResource.like;
            case FilterOperator.NotLike: return this.i18nResource.notLike;
            case FilterOperator.Is: return this.i18nResource.is;
            case FilterOperator.IsNot: return this.i18nResource.isNot;
            case FilterOperator.LessThan: return "≤";
            case FilterOperator.GreaterThan: return "≥";
            case FilterOperator.IsBefore: return this.i18nResource.isBefore;
            case FilterOperator.IsAfter: return this.i18nResource.isAfter;
        }
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
};
FilterOperatorValueConverter = tslib_1.__decorate([
    au.autoinject
], FilterOperatorValueConverter);
export { FilterOperatorValueConverter };
