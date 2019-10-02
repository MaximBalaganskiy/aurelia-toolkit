"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var AtColoursService = /** @class */ (function () {
    function AtColoursService(colorsService) {
        this.colorsService = colorsService;
        this.headerColor = this.colorsService.primaryColor;
        this.menuButtonColor = "white";
    }
    AtColoursService = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [au.MdColorsService])
    ], AtColoursService);
    return AtColoursService;
}());
exports.AtColoursService = AtColoursService;
//# sourceMappingURL=at-colours-service.js.map