import { IPasswordRequirements } from "./i-password-requirements";
import { I18N } from "aurelia-i18n";
export declare function addCustomValidationRules(i18n: I18N): void;
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
