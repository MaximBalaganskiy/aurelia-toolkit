import * as tslib_1 from "tslib";
import * as au from "../aurelia";
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
export { AtColoursService };
