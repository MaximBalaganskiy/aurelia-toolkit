"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var setting_vm_1 = require("./setting-vm");
var client_editor_1 = require("./client-editor");
var alert_service_1 = require("../../services/alert-service");
var SettingsEditor = /** @class */ (function () {
    function SettingsEditor(element, taskQueue, alertService) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.alertService = alertService;
        this.ClientEditor = client_editor_1.ClientEditor;
    }
    SettingsEditor.prototype.bind = function () {
        var _this = this;
        this.settings = this.info.children
            .map(function (x) { return new setting_vm_1.SettingVM(x.key, x.value, !!x.children, x, _this.taskQueue, _this.alertService); })
            .sort(function (a, b) { return (a.isObject - b.isObject) * 2 + a.info.name.localeCompare(b.info.name); });
    };
    SettingsEditor.prototype.edit = function (s) {
        s.isEdited = true;
        s.oldValue = s.value;
        this.taskQueue.queueTask(function () {
            var element = s.variantEditor.querySelector("input,textarea");
            if (element) {
                element.focus();
            }
        });
    };
    SettingsEditor.prototype.cancel = function (s) {
        s.isEdited = false;
        s.value = s.oldValue;
    };
    SettingsEditor.prototype.save = function (s) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                au.fireEvent(this.element, "save", s);
                return [2 /*return*/];
            });
        });
    };
    SettingsEditor.prototype.history = function (s) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                au.fireEvent(this.element, "history", s);
                return [2 /*return*/];
            });
        });
    };
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Object)
    ], SettingsEditor.prototype, "info", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], SettingsEditor.prototype, "showHistory", void 0);
    SettingsEditor = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue, alert_service_1.AlertService])
    ], SettingsEditor);
    return SettingsEditor;
}());
exports.SettingsEditor = SettingsEditor;
//# sourceMappingURL=settings-editor.js.map