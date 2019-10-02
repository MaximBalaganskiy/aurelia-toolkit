"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../aurelia");
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
