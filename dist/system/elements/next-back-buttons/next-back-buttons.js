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
            NextBackButtons = class NextBackButtons {
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
            exports_1("NextBackButtons", NextBackButtons);
        }
    };
});
