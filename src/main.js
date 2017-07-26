System.register(["@angular/platform-browser-dynamic", "@angular/core", "@angular/http", "./components/app.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, http_1, app_component_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            core_1.enableProdMode();
            // import { APP_ROUTER_PROVIDERS } from "./routes";
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                // APP_ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS
            ]);
        }
    };
});
//# sourceMappingURL=main.js.map