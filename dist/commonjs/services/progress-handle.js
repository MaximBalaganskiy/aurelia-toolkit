"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgressHandle = /** @class */ (function () {
    function ProgressHandle(alertService) {
        this.alertService = alertService;
        this.alertService.showProgress();
    }
    ProgressHandle.prototype.dispose = function () {
        this.alertService.hideProgress();
    };
    return ProgressHandle;
}());
exports.ProgressHandle = ProgressHandle;
//# sourceMappingURL=progress-handle.js.map