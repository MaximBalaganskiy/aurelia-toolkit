import * as au from "../aurelia";
export declare class AppInsightsStep implements au.PipelineStep {
    constructor();
    logger: au.Logger;
    run(navigationInstruction: au.NavigationInstruction, next: au.Next): Promise<any>;
}
