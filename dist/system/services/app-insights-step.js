System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, AppInsightsStep;
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
            AppInsightsStep = class AppInsightsStep {
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
            exports_1("AppInsightsStep", AppInsightsStep);
        }
    };
});
