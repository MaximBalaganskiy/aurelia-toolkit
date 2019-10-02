import * as au from "../../aurelia";
import { SettingVM } from "./setting-vm";
import { ClientEditor } from "./client-editor";
import { ISettingInfo } from "./i-setting-info";
import { AlertService } from "../../services/alert-service";
export declare class SettingsEditor {
    private element;
    private taskQueue;
    private alertService;
    constructor(element: Element, taskQueue: au.TaskQueue, alertService: AlertService);
    info: ISettingInfo;
    showHistory: boolean;
    settings: SettingVM[];
    ClientEditor: typeof ClientEditor;
    bind(): void;
    edit(s: SettingVM): void;
    cancel(s: SettingVM): void;
    save(s: SettingVM): Promise<void>;
    history(s: SettingVM): Promise<void>;
}
