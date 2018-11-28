import * as au from "../../aurelia";
import { ISettingInfo } from "./i-setting-info";
import { AlertService } from "../../services/alert-service";
export declare class SettingVM {
    key: string;
    value: any;
    isObject: boolean;
    info: ISettingInfo;
    private taskQueue;
    private alertService;
    constructor(key: string, value: any, isObject: boolean, info: ISettingInfo, taskQueue: au.TaskQueue, alertService: AlertService);
    isExpanded?: boolean;
    isEdited?: boolean;
    oldValue?: any;
    isSaving?: boolean;
    body?: HTMLDivElement;
    editor?: HTMLUnknownElement;
    setBodyHeightToAuto: () => void;
    toggleExpanded(): void;
    save(saveDelegate: (key: string, value: any) => Promise<any>): Promise<void>;
}
