import { RouteConfig, NavModel } from "aurelia-router";
import { IAppRouteConfig } from "../interfaces/i-app-route-config";

declare module "aurelia-router" {
	// tslint:disable-next-line:interface-name
	interface NavModel {
		configEx: IAppRouteConfig;
	}
}

Object.defineProperty(NavModel.prototype, "configEx", { get(this: NavModel) { return this.config; } });
