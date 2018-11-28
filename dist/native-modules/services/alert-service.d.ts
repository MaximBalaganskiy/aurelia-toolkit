import * as au from "../aurelia";
import { ProgressHandle } from "./progress-handle";
import { IDisposable } from "../interfaces/i-disposable";
export declare class AlertService {
    private toast;
    private eventAggregator;
    private templatingEngine;
    private viewCompiler;
    constructor(toast: au.MdToastService, eventAggregator: au.EventAggregator, templatingEngine: au.TemplatingEngine, viewCompiler: au.ViewCompiler);
    progressCounter: number;
    defaultTimeout: number;
    logger: au.Logger;
    private showModal;
    alert(message: string, icon?: string, iconColour?: string): Promise<boolean>;
    confirm(message: string, icon?: string, iconColour?: string): Promise<boolean>;
    error(message: string): Promise<boolean>;
    confirmToast(message: string, timeout?: number): void;
    errorToast(message: string, timeout?: number): void;
    warningToast(message: string, timeout?: number): void;
    showProgress(): void;
    hideProgress(): void;
    usingProgress<T>(action: () => Promise<T>, catchHandler?: (e: any) => Promise<any>): Promise<T>;
    progress(): ProgressHandle;
}
export declare function using<T>(disposable: IDisposable, action: () => Promise<T>, catchHandler: (e: any) => Promise<any>): Promise<T>;
