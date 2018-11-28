import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";
let TextFilterLine = class TextFilterLine extends FilterLineBase {
    constructor(element) {
        super(element);
        this.operators = [FilterOperator.Like, FilterOperator.NotLike];
    }
};
TextFilterLine = tslib_1.__decorate([
    au.customElement("text-filter-line")
], TextFilterLine);
export { TextFilterLine };
