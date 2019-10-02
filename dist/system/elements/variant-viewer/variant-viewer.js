System.register(["tslib", "../../aurelia", "../settings-editor/client-editor"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, client_editor_1, VariantViewer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (client_editor_1_1) {
                client_editor_1 = client_editor_1_1;
            }
        ],
        execute: function () {
            VariantViewer = /** @class */ (function () {
                function VariantViewer(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.selectWidth = "120px";
                }
                VariantViewer.prototype.edit = function () {
                    au.fireEvent(this.element, "edit");
                };
                VariantViewer.prototype.change = function (e) {
                    var _this = this;
                    // stop event and refire as a task to let value binding update first
                    e.stopPropagation();
                    this.taskQueue.queueTask(function () { return au.fireEvent(_this.element, "change"); });
                };
                tslib_1.__decorate([
                    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Object)
                ], VariantViewer.prototype, "value", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Number)
                ], VariantViewer.prototype, "dataType", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], VariantViewer.prototype, "selectWidth", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Array)
                ], VariantViewer.prototype, "options", void 0);
                VariantViewer = tslib_1.__decorate([
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
                ], VariantViewer);
                return VariantViewer;
            }());
            exports_1("VariantViewer", VariantViewer);
        }
    };
});
//# sourceMappingURL=variant-viewer.js.map