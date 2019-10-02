export class ProgressHandle {
    constructor(alertService) {
        this.alertService = alertService;
        this.alertService.showProgress();
    }
    dispose() {
        this.alertService.hideProgress();
    }
}
