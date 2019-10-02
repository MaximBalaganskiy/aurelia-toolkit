import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterOperator } from "./filter-operator";
var FilterOperatorValueConverter = /** @class */ (function () {
    function FilterOperatorValueConverter(i18n) {
        this.i18n = i18n;
        this.i18nResource = this.i18n.tr("aurelia-toolkit:filter.operator", { returnObjects: true });
    }
    FilterOperatorValueConverter.prototype.toView = function (value) {
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
    };
    FilterOperatorValueConverter.prototype.fromView = function (value) {
        throw new Error("Not implemented");
    };
    FilterOperatorValueConverter = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [au.I18N])
    ], FilterOperatorValueConverter);
    return FilterOperatorValueConverter;
}());
export { FilterOperatorValueConverter };
//# sourceMappingURL=filter-operator-converter.js.map