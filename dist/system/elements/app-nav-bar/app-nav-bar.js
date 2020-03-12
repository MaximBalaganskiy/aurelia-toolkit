System.register(["tslib", "../../aurelia", "lodash/orderBy", "lodash/groupBy"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, orderBy_1, groupBy_1, AppNavBar;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (orderBy_1_1) {
                orderBy_1 = orderBy_1_1;
            },
            function (groupBy_1_1) {
                groupBy_1 = groupBy_1_1;
            }
        ],
        execute: function () {
            AppNavBar = /** @class */ (function () {
                function AppNavBar(taskQueue) {
                    this.taskQueue = taskQueue;
                }
                AppNavBar.prototype.navModelsChanged = function () {
                    var _a;
                    var _this = this;
                    var groupedModels = groupBy_1.default(this.navModels, function (x) { return x.config.menu ? x.config.menu.title : "root"; });
                    this.menuItems = [];
                    if (groupedModels["root"]) {
                        (_a = this.menuItems).push.apply(_a, tslib_1.__spread(groupedModels["root"].map(function (x) { return _this.createMenuItem(x); })));
                    }
                    for (var menu in groupedModels) {
                        if (menu !== "root") {
                            this.menuItems.push({
                                title: menu,
                                order: groupedModels[menu][0].configEx.menu.order,
                                menuItems: orderBy_1.default(groupedModels[menu].map(function (x) { return _this.createMenuItem(x); }), function (x) { return x.order; })
                            });
                        }
                    }
                    this.menuItems = orderBy_1.default(this.menuItems, function (x) { return x.order; });
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
            exports_1("AppNavBar", AppNavBar);
        }
    };
});
//# sourceMappingURL=app-nav-bar.js.map