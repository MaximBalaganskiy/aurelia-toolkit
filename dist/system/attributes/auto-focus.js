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
            AutoFocusCustomAttribute = /** @class */ (function () {
                function AutoFocusCustomAttribute(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.logger = au.getLogger("AutoFocusCustomAttribute");
                }
                AutoFocusCustomAttribute.prototype.attached = function () {
                    var _this = this;
                    this.taskQueue.queueTask(function () {
                        var input = _this.element.querySelector("input");
                        if (input) {
                            input.focus();
                            var label_1 = input.nextElementSibling;
                            if (label_1.nodeName === "LABEL") {
                                _this.taskQueue.queueTask(function () { label_1.classList.add("active"); });
                            }
                        }
                        else {
                            _this.logger.warn("No input element found for auto-focus");
                        }
                    });
                };
                AutoFocusCustomAttribute = tslib_1.__decorate([
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
                ], AutoFocusCustomAttribute);
                return AutoFocusCustomAttribute;
            }());
            exports_1("AutoFocusCustomAttribute", AutoFocusCustomAttribute);
        }
    };
});
//# sourceMappingURL=auto-focus.js.map