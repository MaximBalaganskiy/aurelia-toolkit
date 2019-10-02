import * as au from "../../aurelia";
import { FilterOperator } from "./filter-operator";
import { I18NResource } from "../../interfaces/i18n-resource";
export declare class FilterOperatorValueConverter {
    private i18n;
    constructor(i18n: au.I18N);
    i18nResource: I18NResource["filter"]["operator"];
    toView(value: FilterOperator): string;
    fromView(value: string): number;
}
