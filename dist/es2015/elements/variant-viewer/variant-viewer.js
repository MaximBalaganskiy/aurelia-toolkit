import { __decorate, __metadata } from "tslib";
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
    __decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], VariantViewer.prototype, "value", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", Number)
    ], VariantViewer.prototype, "dataType", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], VariantViewer.prototype, "selectWidth", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", Array)
    ], VariantViewer.prototype, "options", void 0);
    VariantViewer = __decorate([
        au.autoinject,
        __metadata("design:paramtypes", [Element, au.TaskQueue])
    ], VariantViewer);
    return VariantViewer;
}());
export { VariantViewer };
//# sourceMappingURL=variant-viewer.js.map