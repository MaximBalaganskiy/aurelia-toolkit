import { __awaiter, __decorate, __generator, __metadata } from "tslib";
import * as au from "../../aurelia";
import { SettingVM } from "./setting-vm";
import { ClientEditor } from "./client-editor";
import { AlertService } from "../../services/alert-service";
var SettingsEditor = /** @class */ (function () {
    function SettingsEditor(element, taskQueue, alertService) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.alertService = alertService;
        this.ClientEditor = ClientEditor;
    }
    SettingsEditor.prototype.bind = function () {
        var _this = this;
        this.settings = this.info.children
            .map(function (x) { return new SettingVM(x.key, x.value, !!x.children, x, _this.taskQueue, _this.alertService); })
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                au.fireEvent(this.element, "save", s);
                return [2 /*return*/];
            });
        });
    };
    SettingsEditor.prototype.history = function (s) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                au.fireEvent(this.element, "history", s);
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        au.bindable,
        __metadata("design:type", Object)
    ], SettingsEditor.prototype, "info", void 0);
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], SettingsEditor.prototype, "showHistory", void 0);
    SettingsEditor = __decorate([
        au.autoinject,
        __metadata("design:paramtypes", [Element, au.TaskQueue, AlertService])
    ], SettingsEditor);
    return SettingsEditor;
}());
export { SettingsEditor };
//# sourceMappingURL=settings-editor.js.map