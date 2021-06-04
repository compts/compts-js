const list_package_utility_js = ["src/module/*/index.js"];
const list_iife_js = [
    "src/variable/globalConfig.js",
    "src/module/*/index.js"
];

exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");
    const grass_packpier = grassconf.require("grass_packpier");


    grassconf.load("esm", function () {


        return grassconf.src(list_package_utility_js)

            .pipe(grass_packpier({
                "config": {"mainType": "exportFileNameOnly",
                    "prefixPath": "../"},
                "convertType": "es6"
            }))
            .pipe(grass_concat("dist/node.es.js", {
                "istruncate": true,
                "main_file": "/src/a_test_import.js"
            }));


    });


    grassconf.load("web_iife", function () {

        return grassconf.src(list_iife_js)

            .pipe(grass_packpier({
                "config": {"mainType": "exportFileNameOnly",
                    "replaceImportPackage": {
                        "structkit": "_stk"
                    }},
                "convertType": "iife"
            }))
            .pipe(grass_concat("dist/web/compts-full.cjs.js", {
                "istruncate": true,
                "main_file": "/src/a_test_import.js"
            }));

    });

};

exports.execute=function (lib) {

    lib.default=function (strm) {

        strm.series("esm")
            .series("web_iife");

    };

    return lib;

};

