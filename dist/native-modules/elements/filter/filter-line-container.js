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
    au.ato.bindable.booleanMd
], FilterLineContainer.prototype, "lock", void 0);
FilterLineContainer = tslib_1.__decorate([
    au.customElement("filter-line-container")
], FilterLineContainer);
export { FilterLineContainer };
