System.register([], function (exports_1, context_1) {
    "use strict";
    var originalUpdateSource, NotifyBindingBehavior;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            originalUpdateSource = "originalUpdateSource";
            NotifyBindingBehavior = /** @class */ (function () {
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
            exports_1("NotifyBindingBehavior", NotifyBindingBehavior);
        }
    };
});
//# sourceMappingURL=notify.js.map