import { IPasswordRequirements } from "./i-password-requirements";
declare module "aurelia-validation" {
    interface FluentRules<TObject, TValue> {
        password(requirements: IPasswordRequirements): FluentRuleCustomizer<TObject, TValue>;
        mustMatch(otherPropertyName: string): FluentRuleCustomizer<TObject, TValue>;
    }
    interface FluentRuleCustomizer<TObject, TValue> {
        password(requirements: IPasswordRequirements): FluentRuleCustomizer<TObject, TValue>;
        mustMatch(otherPropertyName: string): FluentRuleCustomizer<TObject, TValue>;
    }
}
