import * as au from "../aurelia";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
export declare class AppInsightsStep implements au.PipelineStep {
    private appInsights;
    constructor(appInsights: ApplicationInsights);
    logger: au.Logger;
    run(navigationInstruction: au.NavigationInstruction, next: au.Next): Promise<any>;
}
