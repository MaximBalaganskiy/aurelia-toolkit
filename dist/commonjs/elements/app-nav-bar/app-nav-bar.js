"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
const _ = require("lodash");
let AppNavBar = class AppNavBar {
    constructor(taskQueue) {
        this.taskQueue = taskQueue;
    }
    navModelsChanged() {
        let groupedModels = _.groupBy(this.navModels, x => x.config.menu ? x.config.menu.title : "root");
        this.menuItems = [];
        if (groupedModels["root"]) {
            this.menuItems.push(...groupedModels["root"].map(x => this.createMenuItem(x)));
        }
        for (let menu in groupedModels) {
            if (menu !== "root") {
                this.menuItems.push({
                    title: menu,
                    order: groupedModels[menu][0].configEx.menu.order,
                    menuItems: _.orderBy(groupedModels[menu].map(x => this.createMenuItem(x)), x => x.order)
                });
            }
        }
        this.menuItems = _.orderBy(this.menuItems, x => x.order);
    }
    highlightMenuButton() {
        this.tapTarget.open();
    }
    createMenuItem(x) {
        return { title: x.config.title, href: x.href, icon: x.configEx.icon, tooltip: x.configEx.tooltip, navModel: x, order: x.configEx.order };
    }
};
tslib_1.__decorate([
    au.bindable
], AppNavBar.prototype, "navModels", void 0);
tslib_1.__decorate([
    au.bindable
], AppNavBar.prototype, "logoUrl", void 0);
tslib_1.__decorate([
    au.bindable
], AppNavBar.prototype, "sidenavVisibilityWidth", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd
], AppNavBar.prototype, "showHome", void 0);
AppNavBar = tslib_1.__decorate([
    au.autoinject
], AppNavBar);
exports.AppNavBar = AppNavBar;
