define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AutoFocusCustomAttribute = /** @class */ (function () {
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
    exports.AutoFocusCustomAttribute = AutoFocusCustomAttribute;
});
//# sourceMappingURL=auto-focus.js.map