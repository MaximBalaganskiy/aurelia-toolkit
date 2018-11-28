System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, ReadonlyChildrenCustomAttribute;
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
            ReadonlyChildrenCustomAttribute = class ReadonlyChildrenCustomAttribute {
                constructor(element) {
                    this.element = element;
                }
                valueChanged() {
                    // TODO: make generic
                    // let inputs = $(this.element).find(":not(md-readonly) :not(md-readonly.bind) :not(readonly) :not(readonly.bind)");
                    // for (let i = 0; i < inputs.length; ++i) {
                    // 	let auElement = <{au: any | undefined}><any>inputs[i];
                    // 	if(auElement.au)
                    // 	if (!inputs[i].hasAttribute("md-readonly") && !inputs[i].hasAttribute("md-readonly.bind"))
                    // 		(<any>inputs[i]).au["md-input"].viewModel.mdReadonly = this.value;
                    // }
                    let inputs = this.element.querySelectorAll("md-input");
                    for (let input of Array.from(inputs)) {
                        if (!input.hasAttribute("readonly") && !input.hasAttribute("readonly.bind")) {
                            input.au["md-input"].viewModel.readonly = this.value;
                        }
                    }
                    let checkboxes = this.element.querySelectorAll("md-checkbox");
                    for (let checkbox of Array.from(checkboxes)) {
                        if (!checkbox.hasAttribute("readonly") && !checkbox.hasAttribute("readonly.bind")) {
                            checkbox.au["md-checkbox"].viewModel.readonly = this.value;
                        }
                    }
                    let selects = this.element.querySelectorAll("select[md-select]");
                    for (let select of Array.from(selects)) {
                        select.au["md-select"].viewModel.readonly = this.value;
                    }
                    let mdlookups = this.element.querySelectorAll("md-lookup");
                    for (let lookup of Array.from(mdlookups)) {
                        if (!lookup.hasAttribute("readonly") && !lookup.hasAttribute("readonly.bind")) {
                            lookup.au["md-lookup"].viewModel.readonly = this.value;
                        }
                    }
                    let buttons = this.element.querySelectorAll("next-back-buttons");
                    for (let button of Array.from(buttons)) {
                        if (!button.hasAttribute("readonly") && !button.hasAttribute("readonly.bind")) {
                            button.au["next-back-buttons"].viewModel.readonly = this.value;
                        }
                    }
                    let datepickers = this.element.querySelectorAll("datepicker");
                    for (let datepicker of Array.from(datepickers)) {
                        if (!datepicker.hasAttribute("readonly") && !datepicker.hasAttribute("readonly.bind")) {
                            datepicker.au["datepicker"].viewModel.readonly = this.value;
                        }
                    }
                }
                attached() {
                    this.valueChanged();
                }
            };
            ReadonlyChildrenCustomAttribute = tslib_1.__decorate([
                au.autoinject
            ], ReadonlyChildrenCustomAttribute);
            exports_1("ReadonlyChildrenCustomAttribute", ReadonlyChildrenCustomAttribute);
        }
    };
});
