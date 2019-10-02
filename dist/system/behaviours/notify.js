System.register([], function (exports_1, context_1) {
    "use strict";
    var originalUpdateSource, NotifyBindingBehavior;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            originalUpdateSource = "originalUpdateSource";
            NotifyBindingBehavior = class NotifyBindingBehavior {
                bind(binding, scope, notified) {
                    if (binding[originalUpdateSource]) {
                        return;
                    }
                    binding[originalUpdateSource] = binding.updateSource;
                    binding.updateSource = function (value) {
                        this.originalUpdateSource(value);
                        notified.call(binding.source.bindingContext, value);
                    };
                }
                unbind(binding, scope) {
                    binding.updateSource = binding[originalUpdateSource];
                    delete binding[originalUpdateSource];
                }
            };
            exports_1("NotifyBindingBehavior", NotifyBindingBehavior);
        }
    };
});
