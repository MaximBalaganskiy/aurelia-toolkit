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
        au.ato.bindable.booleanMd
    ], FilterLineContainer.prototype, "lock", void 0);
    FilterLineContainer = tslib_1.__decorate([
        au.customElement("filter-line-container")
    ], FilterLineContainer);
    exports.FilterLineContainer = FilterLineContainer;
});
