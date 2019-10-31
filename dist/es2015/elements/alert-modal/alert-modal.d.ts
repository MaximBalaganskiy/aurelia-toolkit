import { MdModal } from "aurelia-materialize-bridge";
export interface IAlertModalOptions {
    icon: string;
    iconColour: string;
    message: string;
    allowHtml?: boolean;
    button1Text: string;
    button2Text: string;
    button1Click: () => void;
    button2Click: () => void;
}
export declare class AlertModal {
    options: IAlertModalOptions;
    modal: HTMLDivElement;
    mdModal: MdModal;
    open(options: IAlertModalOptions): void;
}
