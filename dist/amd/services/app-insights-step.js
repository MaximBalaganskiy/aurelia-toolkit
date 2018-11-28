define(["require", "exports", "tslib", "../aurelia", "applicationinsights-js"], function (require, exports, tslib_1, au, applicationinsights_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let AppInsightsStep = class AppInsightsStep {
        constructor() {
            this.logger = au.getLogger("AppInsightsStep");
            this.logger.debug("Created");
        }
        run(navigationInstruction, next) {
            let origin = window.location.pathname + window.location.hash;
            let path = origin.replace("/#/", "/").replace("#", "");
            this.logger.debug(`Tracking for ${path}`);
            applicationinsights_js_1.AppInsights.trackPageView(navigationInstruction.config.name, path, navigationInstruction.params);
            return next();
        }
    };
    AppInsightsStep = tslib_1.__decorate([
        au.autoinject
    ], AppInsightsStep);
    exports.AppInsightsStep = AppInsightsStep;
});
