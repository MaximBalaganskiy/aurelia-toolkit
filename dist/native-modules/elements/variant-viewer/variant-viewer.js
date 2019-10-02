import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { ClientEditor } from "../settings-editor/client-editor";
var VariantViewer = /** @class */ (function () {
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
export { VariantViewer };
//# sourceMappingURL=variant-viewer.js.map