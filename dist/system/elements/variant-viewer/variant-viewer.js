System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, VariantViewer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            VariantViewer = class VariantViewer {
                constructor(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                }
                edit() {
                    au.fireEvent(this.element, "edit");
                }
                change(e) {
                    // stop event and refire as a task to let value binding update first
                    e.stopPropagation();
                    this.taskQueue.queueTask(() => au.fireEvent(this.element, "change"));
                }
            };
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
            ], VariantViewer.prototype, "value", void 0);
            tslib_1.__decorate([
                au.bindable
            ], VariantViewer.prototype, "dataType", void 0);
            tslib_1.__decorate([
                au.bindable
            ], VariantViewer.prototype, "options", void 0);
            VariantViewer = tslib_1.__decorate([
                au.autoinject
            ], VariantViewer);
            exports_1("VariantViewer", VariantViewer);
        }
    };
});
