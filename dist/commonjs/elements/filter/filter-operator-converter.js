"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var filter_operator_1 = require("./filter-operator");
var FilterOperatorValueConverter = /** @class */ (function () {
    function FilterOperatorValueConverter(i18n) {
        this.i18n = i18n;
        this.i18nResource = this.i18n.tr("aurelia-toolkit:filter.operator", { returnObjects: true });
    }
    FilterOperatorValueConverter.prototype.toView = function (value) {
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
exports.FilterOperatorValueConverter = FilterOperatorValueConverter;
//# sourceMappingURL=filter-operator-converter.js.map