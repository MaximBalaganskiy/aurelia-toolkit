define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlertModal = /** @class */ (function () {
        function AlertModal() {
        }
        AlertModal.prototype.open = function (options) {
            this.options = options;
            this.mdModal.open();
        };
        return AlertModal;
    }());
    exports.AlertModal = AlertModal;
});
//# sourceMappingURL=alert-modal.js.map