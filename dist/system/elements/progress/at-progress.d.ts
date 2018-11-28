import * as au from "../../aurelia";
export declare class AtProgress {
    private element;
    private eventAggregator;
    constructor(element: Element, eventAggregator: au.EventAggregator);
    size: string;
    opacity: number;
    global: boolean;
    progressCounter: number;
    onSubscription: au.Subscription;
    offSubscription: au.Subscription;
    attached(): void;
    detached(): void;
    progressOn(): void;
    progressOff(): void;
}
