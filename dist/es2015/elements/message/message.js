import { __decorate, __metadata } from "tslib";
import * as au from "../../aurelia";
var Message = /** @class */ (function () {
    function Message() {
        this.card = true;
    }
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], Message.prototype, "icon", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], Message.prototype, "colour", void 0);
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], Message.prototype, "card", void 0);
    Message = __decorate([
        au.autoinject
    ], Message);
    return Message;
}());
export { Message };
//# sourceMappingURL=message.js.map