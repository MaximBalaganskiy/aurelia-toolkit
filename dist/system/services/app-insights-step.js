System.register(["tslib", "../aurelia", "applicationinsights-js"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, applicationinsights_js_1, AppInsightsStep;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (applicationinsights_js_1_1) {
                applicationinsights_js_1 = applicationinsights_js_1_1;
            }
        ],
        execute: function () {
            AppInsightsStep = class AppInsightsStep {
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
            exports_1("AppInsightsStep", AppInsightsStep);
        }
    };
});
