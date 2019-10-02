"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
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
