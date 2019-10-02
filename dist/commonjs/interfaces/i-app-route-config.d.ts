import * as au from "../aurelia";
export declare enum AuthStatus {
    All = 0,
    Authenticated = 1,
    NonAuthenticated = 2
}
export interface IAppRouteConfig extends au.RouteConfig {
    auth?: AuthStatus;
    permission?: any;
    tooltip?: string;
    icon?: string;
    menu?: {
        title: string;
        order?: number;
    };
    order?: number;
}
