"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var _ = require("lodash");
var AppNavBar = /** @class */ (function () {
    function AppNavBar(taskQueue) {
        this.taskQueue = taskQueue;
    }
    AppNavBar.prototype.navModelsChanged = function () {
        var _a;
        var _this = this;
        var groupedModels = _.groupBy(this.navModels, function (x) { return x.config.menu ? x.config.menu.title : "root"; });
        this.menuItems = [];
        if (groupedModels["root"]) {
            (_a = this.menuItems).push.apply(_a, tslib_1.__spread(groupedModels["root"].map(function (x) { return _this.createMenuItem(x); })));
        }
        for (var menu in groupedModels) {
            if (menu !== "root") {
                this.menuItems.push({
                    title: menu,
                    order: groupedModels[menu][0].configEx.menu.order,
                    menuItems: _.orderBy(groupedModels[menu].map(function (x) { return _this.createMenuItem(x); }), function (x) { return x.order; })
                });
            }
        }
        this.menuItems = _.orderBy(this.menuItems, function (x) { return x.order; });
    };
    AppNavBar.prototype.highlightMenuButton = function () {
        this.tapTarget.open();
    };
    AppNavBar.prototype.createMenuItem = function (x) {
        return { title: x.config.title, href: x.href, icon: x.configEx.icon, tooltip: x.configEx.tooltip, navModel: x, order: x.configEx.order };
    };
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Object)
    ], AppNavBar.prototype, "navModels", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], AppNavBar.prototype, "logoUrl", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Number)
    ], AppNavBar.prototype, "sidenavVisibilityWidth", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], AppNavBar.prototype, "showHome", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], AppNavBar.prototype, "menuLabel", void 0);
    AppNavBar = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [au.TaskQueue])
    ], AppNavBar);
    return AppNavBar;
}());
exports.AppNavBar = AppNavBar;
//# sourceMappingURL=app-nav-bar.js.map