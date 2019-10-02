import * as tslib_1 from "tslib";
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
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], AtColors.prototype, "headerColor", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], AtColors.prototype, "menuButtonColor", void 0);
    AtColors = tslib_1.__decorate([
        au.customElement("at-colors"),
        tslib_1.__metadata("design:paramtypes", [au.MdColorsService, AtColoursService])
    ], AtColors);
    return AtColors;
}());
export { AtColors };
//# sourceMappingURL=at-colours.js.map