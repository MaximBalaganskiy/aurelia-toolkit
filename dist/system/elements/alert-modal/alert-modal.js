System.register([], function (exports_1, context_1) {
    "use strict";
    var AlertModal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            AlertModal = class AlertModal {
                open(options) {
                    this.options = options;
                    this.mdModal.open();
                }
            };
            exports_1("AlertModal", AlertModal);
        }
    };
});
