"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
let NextBackButtons = class NextBackButtons {
    constructor(element) {
        this.element = element;
        this.backCaption = "back";
        this.backIcon = "arrow_back";
        this.saveCaption = "Save";
        this.saveIcon = "save";
        this.nextCaption = "next";
        this.nextIcon = "arrow_forward";
    }
    back() {
        au.fireEvent(this.element, "back");
    }
    save() {
        au.fireEvent(this.element, "save");
    }
    next() {
        au.fireEvent(this.element, "next");
    }
};
tslib_1.__decorate([
    au.bindable
], NextBackButtons.prototype, "readonly", void 0);
tslib_1.__decorate([
    au.bindable
], NextBackButtons.prototype, "backCaption", void 0);
tslib_1.__decorate([
    au.bindable
], NextBackButtons.prototype, "backIcon", void 0);
tslib_1.__decorate([
    au.bindable
], NextBackButtons.prototype, "saveCaption", void 0);
tslib_1.__decorate([
    au.bindable
], NextBackButtons.prototype, "saveIcon", void 0);
tslib_1.__decorate([
    au.bindable
], NextBackButtons.prototype, "nextCaption", void 0);
tslib_1.__decorate([
    au.bindable
], NextBackButtons.prototype, "nextIcon", void 0);
NextBackButtons = tslib_1.__decorate([
    au.autoinject
], NextBackButtons);
exports.NextBackButtons = NextBackButtons;
