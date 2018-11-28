define(["require", "exports", "tslib", "../../aurelia", "./setting-vm", "./client-editor"], function (require, exports, tslib_1, au, setting_vm_1, client_editor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let SettingsEditor = class SettingsEditor {
        constructor(element, taskQueue, alertService) {
            this.element = element;
            this.taskQueue = taskQueue;
            this.alertService = alertService;
            this.ClientEditor = client_editor_1.ClientEditor;
        }
        bind() {
            this.settings = this.info.children
                .map(x => new setting_vm_1.SettingVM(x.key, x.value, !!x.children, x, this.taskQueue, this.alertService))
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
    exports.SettingsEditor = SettingsEditor;
});
