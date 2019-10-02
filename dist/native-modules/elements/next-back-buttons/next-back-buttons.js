import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
var NextBackButtons = /** @class */ (function () {
    function NextBackButtons(element) {
        this.element = element;
        this.backCaption = "back";
        this.backIcon = "arrow_back";
        this.saveCaption = "Save";
        this.saveIcon = "save";
        this.nextCaption = "next";
        this.nextIcon = "arrow_forward";
    }
    NextBackButtons.prototype.back = function () {
        au.fireEvent(this.element, "back");
    };
    NextBackButtons.prototype.save = function () {
        au.fireEvent(this.element, "save");
    };
    NextBackButtons.prototype.next = function () {
        au.fireEvent(this.element, "next");
    };
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Boolean)
    ], NextBackButtons.prototype, "readonly", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], NextBackButtons.prototype, "backCaption", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], NextBackButtons.prototype, "backIcon", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], NextBackButtons.prototype, "saveCaption", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], NextBackButtons.prototype, "saveIcon", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], NextBackButtons.prototype, "nextCaption", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], NextBackButtons.prototype, "nextIcon", void 0);
    NextBackButtons = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], NextBackButtons);
    return NextBackButtons;
}());
export { NextBackButtons };
//# sourceMappingURL=next-back-buttons.js.map