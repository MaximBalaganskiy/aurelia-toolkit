"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProgressHandle {
    constructor(alertService) {
        this.alertService = alertService;
        this.alertService.showProgress();
    }
    dispose() {
        this.alertService.hideProgress();
    }
}
exports.ProgressHandle = ProgressHandle;
