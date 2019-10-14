define(["require", "exports", "tslib", "../aurelia", "../interfaces/i-server-date-provider"], function (require, exports, tslib_1, au, i_server_date_provider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateService = /** @class */ (function () {
        function DateService(dateClient) {
            this.dateClient = dateClient;
            this.differenceWithServer = undefined;
        }
        DateService.prototype.now = function () {
            if (this.differenceWithServer === undefined) {
                throw new Error("DateService is not initialised");
            }
            else {
                return new Date(Date.now() - this.differenceWithServer);
            }
        };
        DateService.prototype.initialise = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var serverDate;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dateClient.getServerDate()];
                        case 1:
                            serverDate = _a.sent();
                            this.differenceWithServer = Date.now() - serverDate.getTime();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DateService = tslib_1.__decorate([
            au.autoinject,
            tslib_1.__metadata("design:paramtypes", [i_server_date_provider_1.IServerDateProvider])
        ], DateService);
        return DateService;
    }());
    exports.DateService = DateService;
});
//# sourceMappingURL=date-service.js.map