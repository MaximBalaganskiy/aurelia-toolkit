import * as au from "../../aurelia";
import { IMenuItem } from "./i-menu-item";
import * as _ from "lodash";
export declare class AppNavBar {
    private taskQueue;
    constructor(taskQueue: au.TaskQueue);
    navModels: _.List<au.NavModel>;
    navModelsChanged(): void;
    menuItems: IMenuItem[];
    logoUrl: string;
    sidenavVisibilityWidth: number;
    showHome: boolean;
    menuLabel: string;
    tapTarget: au.MdTapTarget;
    highlightMenuButton(): void;
    createMenuItem(x: au.NavModel): IMenuItem;
}
