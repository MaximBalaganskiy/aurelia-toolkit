System.register(["tslib"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, SettingVM;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            }
        ],
        execute: function () {
            SettingVM = /** @class */ (function () {
                function SettingVM(key, value, isObject, info, taskQueue, alertService) {
                    var _this = this;
                    this.key = key;
                    this.value = value;
                    this.isObject = isObject;
                    this.info = info;
                    this.taskQueue = taskQueue;
                    this.alertService = alertService;
                    this.setBodyHeightToAuto = function () {
                        _this.body.style.overflow = "visible";
                        _this.body.style.height = "auto";
                        _this.body.removeEventListener("transitionend", _this.setBodyHeightToAuto);
                    };
                }
                SettingVM.prototype.toggleExpanded = function () {
                    var _this = this;
                    if (this.isExpanded) {
                        // the following line is needed because height has been restored to auto"
                        this.body.style.height = this.editor.clientHeight + "px";
                        this.taskQueue.queueTask(function () {
                            _this.body.style.overflow = "hidden";
                            _this.body.style.height = "0";
                        });
                    }
                    else {
                        // after transition set body height to auto so that expandable children are visible
                        this.body.addEventListener("transitionend", this.setBodyHeightToAuto);
                        this.body.style.height = this.editor.clientHeight + "px";
                    }
                    this.isExpanded = !this.isExpanded;
                };
                SettingVM.prototype.save = function (saveDelegate) {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var _a;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, 3, 4]);
                                    this.isSaving = true;
                                    return [4 /*yield*/, saveDelegate(this.key, this.value)];
                                case 1:
                                    _b.sent();
                                    this.isEdited = false;
                                    return [3 /*break*/, 4];
                                case 2:
                                    _a = _b.sent();
                                    this.alertService.error("Error occurred while saving the setting");
                                    return [3 /*break*/, 4];
                                case 3:
                                    this.isSaving = false;
                                    return [7 /*endfinally*/];
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                };
                return SettingVM;
            }());
            exports_1("SettingVM", SettingVM);
        }
    };
});
//# sourceMappingURL=setting-vm.js.map