"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../aurelia");
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
