import * as au from "../aurelia";
export declare class NotifyBindingBehavior {
    bind(binding: au.Binding, scope: au.Scope, notified: (value: any) => void): void;
    unbind(binding: au.Binding, scope: au.Scope): void;
}
declare module "aurelia-binding" {
    interface Binding {
        originalUpdateSource?(value: any): void;
    }
}
