import * as au from "../aurelia";
export declare class AutoFocusCustomAttribute {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    logger: au.Logger;
    attached(): void;
}
