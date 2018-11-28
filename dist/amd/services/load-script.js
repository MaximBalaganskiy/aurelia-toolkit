define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            if (!document.querySelectorAll(`[src="${url}"]`).length) {
                try {
                    let script = Object.assign(document.createElement("script"), {
                        type: "text/javascript",
                        src: url,
                        onload: () => resolve(),
                        onerror: e => reject(e)
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
    exports.loadScript = loadScript;
});
