System.register(["../aurelia", "aurelia-validation"], function (exports_1, context_1) {
    "use strict";
    var au, aurelia_validation_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (au_1) {
                au = au_1;
            },
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            }
        ],
        execute: function () {
            au.ValidationRules.customRule("requiredLength", (v, o, length) => {
                return v && v.length >= length;
            }, "${$displayName} must have at least ${$config.length} characters.", (length) => ({ length }));
            au.ValidationRules.customRule("requireDigit", (v) => {
                return /[0-9]+/.test(v);
            }, "${$displayName} must include digits.");
            au.ValidationRules.customRule("requireLowercase", (v) => {
                return /[a-z]+/.test(v);
            }, "${$displayName} must include lowercase letters.");
            au.ValidationRules.customRule("requireUppercase", (v) => {
                return /[A-Z]+/.test(v);
            }, "${$displayName} must include uppercase letters.");
            au.ValidationRules.customRule("requireNonAlphanumeric", (v) => {
                return /[\W]+/.test(v);
            }, "${$displayName} must include special characters.");
            au.ValidationRules.customRule("requiredUniqueChars", (v, o, length) => {
                if (!v) {
                    return false;
                }
                let onlyUnique = "";
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < v.length; ++i) {
                    let char = v[i];
                    if (onlyUnique.indexOf(char) === -1) {
                        onlyUnique += char;
                    }
                }
                return onlyUnique.length >= length;
            }, "${$displayName} must have at least ${$config.length} unique characters.", (length) => ({ length }));
            au.ValidationRules.customRule("mustMatch", (value, obj, otherPropertyName) => value === null
                || value === undefined
                || value === ""
                || obj[otherPropertyName] === null
                || obj[otherPropertyName] === undefined
                || obj[otherPropertyName] === ""
                || value === obj[otherPropertyName], "${$displayName} must match the ${$config.otherPropertyName}.", otherPropertyName => ({ otherPropertyName }));
            aurelia_validation_1.FluentRules.prototype.password = function (r) {
                let result;
                if (r.requiredLength) {
                    result = result ? result.satisfiesRule("requiredLength", r.requiredLength) : this.satisfiesRule("requiredLength", r.requiredLength);
                }
                if (r.requireLowercase) {
                    result = result ? result.satisfiesRule("requireLowercase") : this.satisfiesRule("requireLowercase");
                }
                if (r.requireUppercase) {
                    result = result ? result.satisfiesRule("requireUppercase") : this.satisfiesRule("requireUppercase");
                }
                if (r.requireDigit) {
                    result = result ? result.satisfiesRule("requireDigit") : this.satisfiesRule("requireDigit");
                }
                if (r.requireNonAlphanumeric) {
                    result = result ? result.satisfiesRule("requireNonAlphanumeric") : this.satisfiesRule("requireNonAlphanumeric");
                }
                if (r.requiredUniqueChars) {
                    result = result ? result.satisfiesRule("requiredUniqueChars", r.requiredLength) : this.satisfiesRule("requiredUniqueChars", r.requiredLength);
                }
                if (!result) {
                    throw new Error("Password requirements are not set");
                }
                return result;
            };
            aurelia_validation_1.FluentRuleCustomizer.prototype.password = function (r) {
                let result = this;
                if (r.requiredLength) {
                    result = result.satisfiesRule("requiredLength", r.requiredLength);
                }
                if (r.requireLowercase) {
                    result = result.satisfiesRule("requireLowercase");
                }
                if (r.requireUppercase) {
                    result = result.satisfiesRule("requireUppercase");
                }
                if (r.requireDigit) {
                    result = result.satisfiesRule("requireDigit");
                }
                if (r.requireNonAlphanumeric) {
                    result = result.satisfiesRule("requireNonAlphanumeric");
                }
                if (r.requiredUniqueChars) {
                    result = result.satisfiesRule("requiredUniqueChars", r.requiredLength);
                }
                if (!result) {
                    throw new Error("Password requirements are not set");
                }
                return result;
            };
            aurelia_validation_1.FluentRules.prototype.mustMatch = function (otherPropertyName) {
                return this.satisfiesRule("mustMatch", otherPropertyName);
            };
            aurelia_validation_1.FluentRuleCustomizer.prototype.mustMatch = function (otherPropertyName) {
                return this.satisfiesRule("mustMatch", otherPropertyName);
            };
        }
    };
});
