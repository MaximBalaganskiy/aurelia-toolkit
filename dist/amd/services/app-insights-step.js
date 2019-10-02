define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let AppInsightsStep = class AppInsightsStep {
        constructor(appInsights) {
            this.appInsights = appInsights;
            this.logger = au.getLogger("AppInsightsStep");
            this.logger.debug("Created");
        }
        run(navigationInstruction, next) {
            let origin = window.location.pathname + window.location.hash;
            let path = origin.replace("/#/", "/").replace("#", "");
            this.logger.debug(`Tracking for ${path}`);
            this.appInsights.trackPageView({ name: navigationInstruction.config.name, uri: path, properties: navigationInstruction.params });
            return next();
        }
    };
    AppInsightsStep = tslib_1.__decorate([
        au.autoinject
    ], AppInsightsStep);
    exports.AppInsightsStep = AppInsightsStep;
});
