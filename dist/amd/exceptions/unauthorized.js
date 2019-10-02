define(["require", "exports", "tslib", "./exception"], function (require, exports, tslib_1, exception_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UnauthorizedException = /** @class */ (function (_super) {
        tslib_1.__extends(UnauthorizedException, _super);
        function UnauthorizedException() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return UnauthorizedException;
    }(exception_1.Exception));
    exports.UnauthorizedException = UnauthorizedException;
});
//# sourceMappingURL=unauthorized.js.map