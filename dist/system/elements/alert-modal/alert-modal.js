System.register([], function (exports_1, context_1) {
    "use strict";
    var AlertModal;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            AlertModal = /** @class */ (function () {
                function AlertModal() {
                }
                AlertModal.prototype.open = function (options) {
                    this.options = options;
                    this.mdModal.open();
                };
                return AlertModal;
            }());
            exports_1("AlertModal", AlertModal);
        }
    };
});
//# sourceMappingURL=alert-modal.js.map