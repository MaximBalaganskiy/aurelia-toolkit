import { IAppRouteConfig } from "../interfaces/i-app-route-config";
declare module "aurelia-router" {
    interface NavModel {
        configEx: IAppRouteConfig;
    }
}
