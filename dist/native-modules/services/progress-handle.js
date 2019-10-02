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
export { ProgressHandle };
//# sourceMappingURL=progress-handle.js.map