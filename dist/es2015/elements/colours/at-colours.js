import { __decorate, __metadata } from "tslib";
import * as au from "../../aurelia";
import { AtColoursService } from "../../services/at-colours-service";
var AtColors = /** @class */ (function () {
    function AtColors(mdCs, atCs) {
        this.mdCs = mdCs;
        this.atCs = atCs;
        this.headerColor = this.atCs.headerColor;
        this.menuButtonColor = this.atCs.menuButtonColor;
    }
    AtColors.prototype.headerColorChanged = function () {
        this.atCs.headerColor = this.headerColor;
    };
    AtColors.prototype.menuButtonColorChanged = function () {
        this.atCs.menuButtonColor = this.menuButtonColor;
    };
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], AtColors.prototype, "headerColor", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], AtColors.prototype, "menuButtonColor", void 0);
    AtColors = __decorate([
        au.customElement("at-colors"),
        __metadata("design:paramtypes", [au.MdColorsService, AtColoursService])
    ], AtColors);
    return AtColors;
}());
export { AtColors };
//# sourceMappingURL=at-colours.js.map