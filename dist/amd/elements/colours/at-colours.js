define(["require", "exports", "tslib", "../../aurelia", "../../services/at-colours-service"], function (require, exports, tslib_1, au, at_colours_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            tslib_1.__metadata("design:paramtypes", [au.MdColorsService, at_colours_service_1.AtColoursService])
        ], AtColors);
        return AtColors;
    }());
    exports.AtColors = AtColors;
});
//# sourceMappingURL=at-colours.js.map