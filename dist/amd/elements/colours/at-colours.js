define(["require", "exports", "tslib", "../../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let AtColors = class AtColors {
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
    exports.AtColors = AtColors;
});
