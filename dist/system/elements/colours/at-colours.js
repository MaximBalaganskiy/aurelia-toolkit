System.register(["tslib", "../../aurelia", "../../services/at-colours-service"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, at_colours_service_1, AtColors;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (at_colours_service_1_1) {
                at_colours_service_1 = at_colours_service_1_1;
            }
        ],
        execute: function () {
            AtColors = /** @class */ (function () {
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
            exports_1("AtColors", AtColors);
        }
    };
});
//# sourceMappingURL=at-colours.js.map