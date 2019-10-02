"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.loadScript = loadScript;
//# sourceMappingURL=load-script.js.map