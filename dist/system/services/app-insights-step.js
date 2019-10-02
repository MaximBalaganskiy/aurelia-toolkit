System.register(["tslib", "../aurelia", "@microsoft/applicationinsights-web"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, applicationinsights_web_1, AppInsightsStep;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (applicationinsights_web_1_1) {
                applicationinsights_web_1 = applicationinsights_web_1_1;
            }
        ],
        execute: function () {
            AppInsightsStep = /** @class */ (function () {
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
            exports_1("AppInsightsStep", AppInsightsStep);
        }
    };
});
//# sourceMappingURL=app-insights-step.js.map