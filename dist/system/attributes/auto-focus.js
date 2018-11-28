System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, AutoFocusCustomAttribute;
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
            AutoFocusCustomAttribute = class AutoFocusCustomAttribute {
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
            exports_1("AutoFocusCustomAttribute", AutoFocusCustomAttribute);
        }
    };
});
