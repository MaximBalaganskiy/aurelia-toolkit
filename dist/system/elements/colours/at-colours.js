System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, AtColors;
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
            AtColors = class AtColors {
                constructor(mdCs, atCs) {
                    this.mdCs = mdCs;
                    this.atCs = atCs;
                    this.headerColor = this.atCs.headerColor;
                    this.menuButtonColor = this.atCs.menuButtonColor;
                }
                headerColorChanged() {
                    this.atCs.headerColor = this.headerColor;
                }
                menuButtonColorChanged() {
                    this.atCs.menuButtonColor = this.menuButtonColor;
                }
            };
            tslib_1.__decorate([
                au.bindable
            ], AtColors.prototype, "headerColor", void 0);
            tslib_1.__decorate([
                au.bindable
            ], AtColors.prototype, "menuButtonColor", void 0);
            AtColors = tslib_1.__decorate([
                au.customElement("at-colors")
            ], AtColors);
            exports_1("AtColors", AtColors);
        }
    };
});
