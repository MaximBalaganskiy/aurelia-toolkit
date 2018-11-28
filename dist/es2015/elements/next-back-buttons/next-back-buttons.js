import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
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
export { NextBackButtons };
