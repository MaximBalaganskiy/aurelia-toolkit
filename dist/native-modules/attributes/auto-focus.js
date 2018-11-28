import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let AutoFocusCustomAttribute = class AutoFocusCustomAttribute {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.logger = au.getLogger("AutoFocusCustomAttribute");
    }
    attached() {
        this.taskQueue.queueTask(() => {
            const input = this.element.querySelector("input");
            if (input) {
                input.focus();
                const label = input.nextElementSibling;
                if (label.nodeName === "LABEL") {
                    this.taskQueue.queueTask(() => { label.classList.add("active"); });
                }
            }
            else {
                this.logger.warn("No input element found for auto-focus");
            }
        });
    }
};
AutoFocusCustomAttribute = tslib_1.__decorate([
    au.autoinject
], AutoFocusCustomAttribute);
export { AutoFocusCustomAttribute };
