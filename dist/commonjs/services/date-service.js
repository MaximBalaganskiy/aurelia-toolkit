"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var i_server_date_provider_1 = require("../interfaces/i-server-date-provider");
var DateService = /** @class */ (function () {
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
exports.DateService = DateService;
//# sourceMappingURL=date-service.js.map