System.register(["aurelia-router"], function (exports_1, context_1) {
    "use strict";
    var aurelia_router_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            }
        ],
        execute: function () {
            Object.defineProperty(aurelia_router_1.NavModel.prototype, "configEx", { get: function () { return this.config; } });
        }
    };
});
//# sourceMappingURL=aurelia-router.js.map