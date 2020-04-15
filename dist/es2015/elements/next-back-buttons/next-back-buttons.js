import { __decorate, __metadata } from "tslib";
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
    __decorate([
        au.bindable,
        __metadata("design:type", Boolean)
    ], NextBackButtons.prototype, "readonly", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], NextBackButtons.prototype, "backCaption", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], NextBackButtons.prototype, "backIcon", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], NextBackButtons.prototype, "saveCaption", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], NextBackButtons.prototype, "saveIcon", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], NextBackButtons.prototype, "nextCaption", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], NextBackButtons.prototype, "nextIcon", void 0);
    NextBackButtons = __decorate([
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], NextBackButtons);
    return NextBackButtons;
}());
export { NextBackButtons };
//# sourceMappingURL=next-back-buttons.js.map