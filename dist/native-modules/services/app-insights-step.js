import * as tslib_1 from "tslib";
import * as au from "../aurelia";
import { AppInsights } from "applicationinsights-js";
let AppInsightsStep = class AppInsightsStep {
    constructor() {
        this.logger = au.getLogger("AppInsightsStep");
        this.logger.debug("Created");
    }
    run(navigationInstruction, next) {
        let origin = window.location.pathname + window.location.hash;
        let path = origin.replace("/#/", "/").replace("#", "");
        this.logger.debug(`Tracking for ${path}`);
        AppInsights.trackPageView(navigationInstruction.config.name, path, navigationInstruction.params);
        return next();
    }
};
AppInsightsStep = tslib_1.__decorate([
    au.autoinject
], AppInsightsStep);
export { AppInsightsStep };
