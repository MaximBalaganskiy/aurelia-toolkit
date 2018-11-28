define(["require", "exports", "tslib", "../../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let Message = class Message {
        constructor() {
            this.card = true;
        }
    };
    tslib_1.__decorate([
        au.bindable
    ], Message.prototype, "icon", void 0);
    tslib_1.__decorate([
        au.bindable
    ], Message.prototype, "colour", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd
    ], Message.prototype, "card", void 0);
    Message = tslib_1.__decorate([
        au.autoinject
    ], Message);
    exports.Message = Message;
});
