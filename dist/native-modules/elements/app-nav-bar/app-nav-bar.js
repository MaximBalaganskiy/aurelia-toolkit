import { __decorate, __metadata, __read, __spread } from "tslib";
import * as au from "../../aurelia";
import orderBy from "lodash/orderBy";
import groupBy from "lodash/groupBy";
var AppNavBar = /** @class */ (function () {
    function AppNavBar(taskQueue) {
        this.taskQueue = taskQueue;
    }
    AppNavBar.prototype.navModelsChanged = function () {
        var _a;
        var _this = this;
        var groupedModels = groupBy(this.navModels, function (x) { return x.config.menu ? x.config.menu.title : "root"; });
        this.menuItems = [];
        if (groupedModels["root"]) {
            (_a = this.menuItems).push.apply(_a, __spread(groupedModels["root"].map(function (x) { return _this.createMenuItem(x); })));
        }
        for (var menu in groupedModels) {
            if (menu !== "root") {
                this.menuItems.push({
                    title: menu,
                    order: groupedModels[menu][0].configEx.menu.order,
                    menuItems: orderBy(groupedModels[menu].map(function (x) { return _this.createMenuItem(x); }), function (x) { return x.order; })
                });
            }
        }
        this.menuItems = orderBy(this.menuItems, function (x) { return x.order; });
    };
    AppNavBar.prototype.highlightMenuButton = function () {
        this.tapTarget.open();
    };
    AppNavBar.prototype.createMenuItem = function (x) {
        return { title: x.config.title, href: x.href, icon: x.configEx.icon, tooltip: x.configEx.tooltip, navModel: x, order: x.configEx.order };
    };
    __decorate([
        au.bindable,
        __metadata("design:type", Object)
    ], AppNavBar.prototype, "navModels", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], AppNavBar.prototype, "logoUrl", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", Number)
    ], AppNavBar.prototype, "sidenavVisibilityWidth", void 0);
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], AppNavBar.prototype, "showHome", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", String)
    ], AppNavBar.prototype, "menuLabel", void 0);
    AppNavBar = __decorate([
        au.autoinject,
        __metadata("design:paramtypes", [au.TaskQueue])
    ], AppNavBar);
    return AppNavBar;
}());
export { AppNavBar };
//# sourceMappingURL=app-nav-bar.js.map