"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var applicationinsights_web_1 = require("@microsoft/applicationinsights-web");
var AppInsightsStep = /** @class */ (function () {
    function AppInsightsStep(appInsights) {
        this.appInsights = appInsights;
        this.logger = au.getLogger("AppInsightsStep");
        this.logger.debug("Created");
    }
    AppInsightsStep.prototype.run = function (navigationInstruction, next) {
        var origin = window.location.pathname + window.location.hash;
        var path = origin.replace("/#/", "/").replace("#", "");
        this.logger.debug("Tracking for " + path);
        this.appInsights.trackPageView({ name: navigationInstruction.config.name, uri: path, properties: navigationInstruction.params });
        return next();
    };
    AppInsightsStep = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [applicationinsights_web_1.ApplicationInsights])
    ], AppInsightsStep);
    return AppInsightsStep;
}());
exports.AppInsightsStep = AppInsightsStep;
//# sourceMappingURL=app-insights-step.js.map