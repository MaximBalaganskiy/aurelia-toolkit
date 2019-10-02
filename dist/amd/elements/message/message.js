define(["require", "exports", "tslib", "../../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Message = /** @class */ (function () {
        function Message() {
            this.card = true;
        }
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", String)
        ], Message.prototype, "icon", void 0);
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", String)
        ], Message.prototype, "colour", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], Message.prototype, "card", void 0);
        Message = tslib_1.__decorate([
            au.autoinject
        ], Message);
        return Message;
    }());
    exports.Message = Message;
});
//# sourceMappingURL=message.js.map