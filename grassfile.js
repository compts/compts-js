const list_package_utility_js = [
    "src/*.js",
    "src/*/*.js",
    "src/*/*/*.js",
    "src/*/*/*/*.js"
];
const list_iife_js = [
    "src/variable/*.js",
    "src/module/*/*.js",
    //"src/module/*.js"
];

const list_esm_file_js = [
    "src/module/index.esm.js"
];

exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");

    const packpier = grassconf.require("packpier");
    const {esmFileNameOnlyImportOnly} = grassconf.require("pirate-pack-js");

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

    grassconf.load("esm_only", function () {

        return packpier(
            grassconf.event(),
            {
                "input": {
                    "path": list_esm_file_js
                },
                "output": {
                    // Esm,cjs,iife,
                    "type": "esm"
                },
                "plugin": [esmFileNameOnlyImportOnly()]

            }
        )
            .pipe(grass_concat("index.esm.js", {
                "istruncate": true
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
            .pipe(grass_concat("dist/web/compts-full.js", {
                "istruncate": true
            }))
            .pipe(grassconf.streamPipe(function (data) {

                let getData = data.readData();

                getData = getData.replace("(function(global){\n", "const global=exports\n");
                getData = getData.replace('})(typeof window !== "undefined" ? window : this);', "");
                data.writeData(getData);
                data.done();

            }))
            .pipe(grass_concat("dist/cjs/compts-full.cjs.js", {
                "istruncate": true
            }));

    });

};

exports.execute=function (lib) {

    lib.default=function (strm) {

        strm.series("esm_only");
        strm.series("web_iife");

        strm.series("cjs");

    };

    return lib;

};

