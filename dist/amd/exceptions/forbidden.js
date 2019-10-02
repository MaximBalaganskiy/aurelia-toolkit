define(["require", "exports", "tslib", "./exception"], function (require, exports, tslib_1, exception_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ForbiddenException = /** @class */ (function (_super) {
        tslib_1.__extends(ForbiddenException, _super);
        function ForbiddenException() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ForbiddenException;
    }(exception_1.Exception));
    exports.ForbiddenException = ForbiddenException;
});
//# sourceMappingURL=forbidden.js.map