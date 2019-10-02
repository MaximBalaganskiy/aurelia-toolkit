"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
let VariantViewer = class VariantViewer {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.selectWidth = "120px";
    }
    edit() {
        au.fireEvent(this.element, "edit");
    }
    change(e) {
        // stop event and refire as a task to let value binding update first
        e.stopPropagation();
        this.taskQueue.queueTask(() => au.fireEvent(this.element, "change"));
    }
};
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
], VariantViewer.prototype, "value", void 0);
tslib_1.__decorate([
    au.bindable
], VariantViewer.prototype, "dataType", void 0);
tslib_1.__decorate([
    au.bindable
], VariantViewer.prototype, "selectWidth", void 0);
tslib_1.__decorate([
    au.bindable
], VariantViewer.prototype, "options", void 0);
VariantViewer = tslib_1.__decorate([
    au.autoinject
], VariantViewer);
exports.VariantViewer = VariantViewer;
