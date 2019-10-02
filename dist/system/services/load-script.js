System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function loadScript(url) {
        return new Promise(function (resolve, reject) {
            if (!document.querySelectorAll("[src=\"" + url + "\"]").length) {
                try {
                    var script = Object.assign(document.createElement("script"), {
                        type: "text/javascript",
                        src: url,
                        onload: function () { return resolve(); },
                        onerror: function (e) { return reject(e); }
                    });
                    document.body.appendChild(script);
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                resolve();
            }
        });
    }
    exports_1("loadScript", loadScript);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=load-script.js.map