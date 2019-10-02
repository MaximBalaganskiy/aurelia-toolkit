System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, AutocompleteAttrCustomAttribute;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            AutocompleteAttrCustomAttribute = class AutocompleteAttrCustomAttribute {
                constructor(element) {
                    this.element = element;
                }
                attached() {
                    switch (this.element.tagName) {
                        case "MD-INPUT":
                            this.attributeManager = new au.AttributeManager(this.element.querySelector("input"));
                            break;
                        case "INPUT":
                            this.attributeManager = new au.AttributeManager(this.element);
                            break;
                    }
                    this.attributeManager.addAttributes({ autocomplete: this.value });
                }
                detached() {
                    this.attributeManager.removeAttributes(["autocomplete"]);
                }
            };
            AutocompleteAttrCustomAttribute = tslib_1.__decorate([
                au.customAttribute("autocomplete-attr"),
                au.autoinject
            ], AutocompleteAttrCustomAttribute);
            exports_1("AutocompleteAttrCustomAttribute", AutocompleteAttrCustomAttribute);
        }
    };
});
