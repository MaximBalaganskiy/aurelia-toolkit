import { AlertService } from "./alert-service";
import { IDisposable } from "../interfaces/i-disposable";
export declare class ProgressHandle implements IDisposable {
    private alertService;
    constructor(alertService: AlertService);
    dispose(): void;
}
