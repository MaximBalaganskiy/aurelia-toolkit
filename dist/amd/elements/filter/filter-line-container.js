define(["require", "exports", "tslib", "../../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.FilterLineContainer = FilterLineContainer;
});
