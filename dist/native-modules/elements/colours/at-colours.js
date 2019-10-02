import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
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
export { AtColors };
