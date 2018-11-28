import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { SettingVM } from "./setting-vm";
import { ClientEditor } from "./client-editor";
let SettingsEditor = class SettingsEditor {
    constructor(element, taskQueue, alertService) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.alertService = alertService;
        this.ClientEditor = ClientEditor;
    }
    bind() {
        this.settings = this.info.children
            .map(x => new SettingVM(x.key, x.value, !!x.children, x, this.taskQueue, this.alertService))
            .sort((a, b) => (a.isObject - b.isObject) * 2 + a.info.name.localeCompare(b.info.name));
    }
    edit(s) {
        s.isEdited = true;
        s.oldValue = s.value;
    }
    cancel(s) {
        s.isEdited = false;
        s.value = s.oldValue;
    }
    save(s) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            au.fireEvent(this.element, "save", s);
        });
    }
};
tslib_1.__decorate([
    au.bindable
], SettingsEditor.prototype, "info", void 0);
SettingsEditor = tslib_1.__decorate([
    au.autoinject
], SettingsEditor);
export { SettingsEditor };
