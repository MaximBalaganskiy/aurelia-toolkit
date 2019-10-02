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
            SettingVM = class SettingVM {
                constructor(key, value, isObject, info, taskQueue, alertService) {
                    this.key = key;
                    this.value = value;
                    this.isObject = isObject;
                    this.info = info;
                    this.taskQueue = taskQueue;
                    this.alertService = alertService;
                    this.setBodyHeightToAuto = () => {
                        this.body.style.overflow = "visible";
                        this.body.style.height = "auto";
                        this.body.removeEventListener("transitionend", this.setBodyHeightToAuto);
                    };
                }
                toggleExpanded() {
                    if (this.isExpanded) {
                        // the following line is needed because height has been restored to auto"
                        this.body.style.height = this.editor.clientHeight + "px";
                        this.taskQueue.queueTask(() => {
                            this.body.style.overflow = "hidden";
                            this.body.style.height = "0";
                        });
                    }
                    else {
                        // after transition set body height to auto so that expandable children are visible
                        this.body.addEventListener("transitionend", this.setBodyHeightToAuto);
                        this.body.style.height = this.editor.clientHeight + "px";
                    }
                    this.isExpanded = !this.isExpanded;
                }
                save(saveDelegate) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        try {
                            this.isSaving = true;
                            yield saveDelegate(this.key, this.value);
                            this.isEdited = false;
                        }
                        catch (_a) {
                            this.alertService.error("Error occurred while saving the setting");
                        }
                        finally {
                            this.isSaving = false;
                        }
                    });
                }
            };
            exports_1("SettingVM", SettingVM);
        }
    };
});
