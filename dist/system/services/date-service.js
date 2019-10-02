System.register(["tslib", "../aurelia", "../interfaces/i-server-date-provider"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, i_server_date_provider_1, DateService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (i_server_date_provider_1_1) {
                i_server_date_provider_1 = i_server_date_provider_1_1;
            }
        ],
        execute: function () {
            DateService = /** @class */ (function () {
                function DateService(dateClient) {
                    this.dateClient = dateClient;
                    this.differenceWithServer = undefined;
                }
                DateService.prototype.now = function () {
                    return new Date();
                };
                DateService.prototype.getServerDate = function () {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var serverDate;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(this.differenceWithServer === undefined)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.dateClient.getServerDate()];
                                case 1:
                                    serverDate = _a.sent();
                                    this.differenceWithServer = this.now().getTime() - serverDate.getTime();
                                    return [2 /*return*/, serverDate];
                                case 2: return [2 /*return*/, new Date(this.now().getTime() - this.differenceWithServer)];
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
            exports_1("DateService", DateService);
        }
    };
});
//# sourceMappingURL=date-service.js.map