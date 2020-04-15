import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var AtColoursService = /** @class */ (function () {
    function AtColoursService(colorsService) {
        this.colorsService = colorsService;
        this.headerColor = this.colorsService.primaryColor;
        this.menuButtonColor = "white";
    }
    AtColoursService = __decorate([
        au.autoinject,
        __metadata("design:paramtypes", [au.MdColorsService])
    ], AtColoursService);
    return AtColoursService;
}());
export { AtColoursService };
//# sourceMappingURL=at-colours-service.js.map