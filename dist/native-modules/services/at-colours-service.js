import * as tslib_1 from "tslib";
import * as au from "../aurelia";
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
export { AtColoursService };
//# sourceMappingURL=at-colours-service.js.map