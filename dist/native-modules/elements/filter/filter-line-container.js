import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
let FilterLineContainer = class FilterLineContainer {
    constructor(element) {
        this.element = element;
    }
    remove() {
        au.fireEvent(this.element, "remove", { filterLine: this.filterLine });
    }
};
tslib_1.__decorate([
    au.children("text-filter-line,lookup-filter-line,date-filter-line,number-filter-line,select-filter-line,bool-filter-line")
], FilterLineContainer.prototype, "availableFilterLines", void 0);
FilterLineContainer = tslib_1.__decorate([
    au.customElement("filter-line-container")
], FilterLineContainer);
export { FilterLineContainer };
