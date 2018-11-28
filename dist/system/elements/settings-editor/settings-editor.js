System.register(["tslib", "../../aurelia", "./setting-vm", "./client-editor"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, setting_vm_1, client_editor_1, SettingsEditor;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (setting_vm_1_1) {
                setting_vm_1 = setting_vm_1_1;
            },
            function (client_editor_1_1) {
                client_editor_1 = client_editor_1_1;
            }
        ],
        execute: function () {
            SettingsEditor = class SettingsEditor {
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
            exports_1("SettingsEditor", SettingsEditor);
        }
    };
});
