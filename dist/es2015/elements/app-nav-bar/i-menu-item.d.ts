import * as au from "../../aurelia";
export interface IMenuItem {
    title: string;
    icon?: string;
    tooltip?: string;
    menuItems?: IMenuItem[];
    href?: string;
    navModel?: au.NavModel;
    order?: number;
}
