System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, AtColoursService;
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
            AtColoursService = class AtColoursService {
                constructor(colorsService) {
                    this.colorsService = colorsService;
                    this.headerColor = this.colorsService.primaryColor;
                    this.menuButtonColor = "white";
                }
            };
            AtColoursService = tslib_1.__decorate([
                au.autoinject
            ], AtColoursService);
            exports_1("AtColoursService", AtColoursService);
        }
    };
});
