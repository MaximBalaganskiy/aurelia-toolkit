import { AlertService } from "./alert-service";
import { IDisposable } from "../interfaces/i-disposable";

export class ProgressHandle implements IDisposable {
	constructor(private alertService: AlertService) {
		this.alertService.showProgress();
	}

	dispose() {
		this.alertService.hideProgress();
	}
}
