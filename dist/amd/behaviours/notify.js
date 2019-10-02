define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var originalUpdateSource = "originalUpdateSource";
    var NotifyBindingBehavior = /** @class */ (function () {
        function NotifyBindingBehavior() {
        }
        NotifyBindingBehavior.prototype.bind = function (binding, scope, notified) {
            if (binding[originalUpdateSource]) {
                return;
            }
            binding[originalUpdateSource] = binding.updateSource;
            binding.updateSource = function (value) {
                this.originalUpdateSource(value);
                notified.call(binding.source.bindingContext, value);
            };
        };
        NotifyBindingBehavior.prototype.unbind = function (binding, scope) {
            binding.updateSource = binding[originalUpdateSource];
            delete binding[originalUpdateSource];
        };
        return NotifyBindingBehavior;
    }());
    exports.NotifyBindingBehavior = NotifyBindingBehavior;
});
//# sourceMappingURL=notify.js.map