const list_package_utility_js = ["src/*/*.js",
    "src/*/*/*.js",
    "src/*/*/*/*.js"
];
const list_iife_js = [
    "src/variable/globalConfig.js",
    "src/module/*/index.js"
];


exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");

    const packpier = grassconf.require("packpier");
    const {cjsToEsmFileNameOnly, cjsToEsmconvertExportToRequire} = grassconf.require("pirate-pack-js");

    grassconf.load("cjs", function () {

        return packpier(
            grassconf.event(),
            {
                "input": {
                    "path": list_package_utility_js
                },
                "output": {
                    "type": "cjs" //,esm,cjs,iife,
                },
                "plugin": []
            }
        )
            .pipe(grassconf.dest("dist/cjs", {
                "lsFileType": "path"
            }));

    });

    grassconf.load("web_iife", function () {

        return packpier(
            grassconf.event(),
            {"input": {
                "modules": {
                    "replaces": {
                        "structkit": "_stk"
                    }
                },
                "path": list_iife_js
            },
            "output": {
                "type": "iife"
            },
                "plugin": []
            }
        )
            .pipe(grass_concat("dist/web/compts-full.cjs.js", {
                "istruncate": true
            }));

    });

};

exports.execute=function (lib) {

    lib.default=function (strm) {

        strm.series("web_iife");
        strm.series("cjs");

    };

    return lib;

};

