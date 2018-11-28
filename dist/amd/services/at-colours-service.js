define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let AtColoursService = class AtColoursService {
        constructor(colorsService) {
            this.colorsService = colorsService;
            this.headerColor = this.colorsService.primaryColor;
            this.menuButtonColor = "white";
        }
    };
    AtColoursService = tslib_1.__decorate([
        au.autoinject
    ], AtColoursService);
    exports.AtColoursService = AtColoursService;
});
