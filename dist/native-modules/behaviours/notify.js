const originalUpdateSource = "originalUpdateSource";
export class NotifyBindingBehavior {
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
}
