import * as au from "../../aurelia";
import { IMenuItem } from "./i-menu-item";
import orderBy from "lodash/orderBy";
import groupBy from "lodash/groupBy";

@au.autoinject
export class AppNavBar {
	constructor(private taskQueue: au.TaskQueue) { }

	@au.bindable
	navModels: _.List<au.NavModel>;
	navModelsChanged() {
		let groupedModels = groupBy(this.navModels, x => x.config.menu ? x.config.menu.title : "root");
		this.menuItems = [];
		if (groupedModels["root"]) {
			this.menuItems.push(...groupedModels["root"].map(x => this.createMenuItem(x)));
		}
		for (let menu in groupedModels) {
			if (menu !== "root") {
				this.menuItems.push({
					title: menu,
					order: groupedModels[menu][0].configEx.menu.order,
					menuItems: orderBy(groupedModels[menu].map(x => this.createMenuItem(x)), x => x.order)
				});
			}
		}
		this.menuItems = orderBy(this.menuItems, x => x.order);
	}

	menuItems: IMenuItem[];

	@au.bindable
	logoUrl: string;

	@au.bindable
	sidenavVisibilityWidth: number;

	@au.ato.bindable.booleanMd
	showHome: boolean;

	@au.bindable
	menuLabel: string;

	tapTarget: au.MdTapTarget;

	highlightMenuButton() {
		this.tapTarget.open();
	}

	createMenuItem(x: au.NavModel): IMenuItem {
		return { title: x.config.title, href: x.href, icon: x.configEx.icon, tooltip: x.configEx.tooltip, navModel: x, order: x.configEx.order };
	}
}
