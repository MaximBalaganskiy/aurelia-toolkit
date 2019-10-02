System.register([], function (exports_1, context_1) {
    "use strict";
    var ProgressHandle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ProgressHandle = /** @class */ (function () {
                function ProgressHandle(alertService) {
                    this.alertService = alertService;
                    this.alertService.showProgress();
                }
                ProgressHandle.prototype.dispose = function () {
                    this.alertService.hideProgress();
                };
                return ProgressHandle;
            }());
            exports_1("ProgressHandle", ProgressHandle);
        }
    };
});
//# sourceMappingURL=progress-handle.js.map