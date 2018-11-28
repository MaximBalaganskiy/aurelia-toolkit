import * as au from "../aurelia";

export enum AuthStatus {
	All,
	Authenticated,
	NonAuthenticated
}

export interface IAppRouteConfig extends au.RouteConfig {
	auth?: AuthStatus;
	permission?: any;
	tooltip?: string;
	icon?: string;
	menu?: { title: string; order?: number };
	order?: number;
}
