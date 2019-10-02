import * as tslib_1 from "tslib";
import * as au from "../aurelia";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
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
        tslib_1.__metadata("design:paramtypes", [ApplicationInsights])
    ], AppInsightsStep);
    return AppInsightsStep;
}());
export { AppInsightsStep };
//# sourceMappingURL=app-insights-step.js.map