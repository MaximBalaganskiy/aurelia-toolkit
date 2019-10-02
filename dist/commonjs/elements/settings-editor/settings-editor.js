"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
const setting_vm_1 = require("./setting-vm");
const client_editor_1 = require("./client-editor");
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
        this.taskQueue.queueTask(() => {
            let element = s.variantEditor.querySelector("input,textarea");
            if (element) {
                element.focus();
            }
        });
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
    history(s) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            au.fireEvent(this.element, "history", s);
        });
    }
};
tslib_1.__decorate([
    au.bindable
], SettingsEditor.prototype, "info", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd
], SettingsEditor.prototype, "showHistory", void 0);
SettingsEditor = tslib_1.__decorate([
    au.autoinject
], SettingsEditor);
exports.SettingsEditor = SettingsEditor;
