import * as au from "../aurelia";
import { AppInsights } from "applicationinsights-js";

@au.autoinject
export class AppInsightsStep implements au.PipelineStep {
	constructor() {
		this.logger = au.getLogger("AppInsightsStep");
		this.logger.debug("Created");
	}

	logger: au.Logger;

	run(navigationInstruction: au.NavigationInstruction, next: au.Next) {
		let origin = window.location.pathname + window.location.hash;
		let path = origin.replace("/#/", "/").replace("#", "");
		this.logger.debug(`Tracking for ${path}`);
		AppInsights.trackPageView(navigationInstruction.config.name, path, navigationInstruction.params);
		return next();
	}
}
