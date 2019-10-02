System.register([], function (exports_1, context_1) {
    "use strict";
    var ProgressHandle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ProgressHandle = class ProgressHandle {
                constructor(alertService) {
                    this.alertService = alertService;
                    this.alertService.showProgress();
                }
                dispose() {
                    this.alertService.hideProgress();
                }
            };
            exports_1("ProgressHandle", ProgressHandle);
        }
    };
});
