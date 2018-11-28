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
                constructor(colorsService) {
                    this.colorsService = colorsService;
                    this.headerColor = this.colorsService.headerColor;
                    this.menuButtonColor = this.colorsService.menuButtonColor;
                }
                headerColorChanged() {
                    this.colorsService.headerColor = this.headerColor;
                }
                menuButtonColorChanged() {
                    this.colorsService.menuButtonColor = this.menuButtonColor;
                }
                attached() {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        // let css = this.loader.loadText("!css-loader!sass-loader!./at-colours.scss").toString();
                        let css = require("!css-loader!sass-loader!./at-colours.scss").toString();
                        css = css
                            .replace(/secondaryColor/g, this.colorsService.colorsService.secondaryColor)
                            .replace(/errorColor/g, this.colorsService.colorsService.errorColor)
                            .replace(/primaryColor/g, this.colorsService.colorsService.primaryColor)
                            .replace(/successColor/g, this.colorsService.colorsService.successColor)
                            .replace(/headerColor/g, this.colorsService.headerColor)
                            .replace(/menuButtonColor/g, this.colorsService.menuButtonColor);
                        au.DOM.injectStyles(css);
                    });
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
