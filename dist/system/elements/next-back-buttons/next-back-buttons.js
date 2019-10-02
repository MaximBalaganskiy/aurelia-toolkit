System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, NextBackButtons;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            NextBackButtons = /** @class */ (function () {
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
            exports_1("NextBackButtons", NextBackButtons);
        }
    };
});
//# sourceMappingURL=next-back-buttons.js.map