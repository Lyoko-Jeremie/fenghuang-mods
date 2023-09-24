(() => {
    // run this file in button of the sc2 script

    const log = window.modUtils.getLogger();

    const data = {
        /***
         *    ███████ ███████ ███    ██  ██████   ██   ██ ██    ██  █████  ███    ██  ██████
         *    ██      ██      ████   ██ ██        ██   ██ ██    ██ ██   ██ ████   ██ ██
         *    ███████ █████   ██ ██  ██ ██   ███  ███████ ██    ██ ███████ ██ ██  ██ ██   ███
         *    ██      ██      ██  ██ ██ ██    ██  ██   ██ ██    ██ ██   ██ ██  ██ ██ ██    ██
         *    ██ 	  ███████ ██   ████  ██████   ██   ██  ██████  ██   ██ ██   ████  ██████
         *
         *
         */

        "fenghuang_crest": {
            srcfn(options) {
                return `img/transformations/fenghuang/crest/${options.fenghuang_crest_type}.png`;
            },
            showfn(options) {
                return options.show_tf && isPartEnabled(options.fenghuang_crest_type);
            },
            z: ZIndices.backhair,
            animation: "idle"
        },
        "fenghuang_crestover": {
            srcfn(options) {
                return `img/transformations/fenghuang/crestover/${options.fenghuang_crest_type}.png`;
            },
            showfn(options) {
                return options.show_tf && isPartEnabled(options.fenghuang_crest_type);
            },
            z: ZIndices.over_upper,
            animation: "idle"
        },
        "fenghuang_eyes": {
            srcfn(options) {
                return `img/transformations/fenghuang/eyes/${options.fenghuang_eyes_type}.png`;
            },
            showfn(options) {
                return options.show_tf && options.show_face && isPartEnabled(options.fenghuang_eyes_type)
            },
            z: ZIndices.irisacc,
            animation: "idle"
        },
        "fenghuang_wings_right": {
            srcfn(options) {
                return `img/transformations/fenghuang/rightwing/${options.fenghuang_wings_type}.png`;
            },
            showfn(options) {
                return options.show_tf && isPartEnabled(options.fenghuang_wings_type)
            },
            z: ZIndices.backhair,
            animation: "idle"
        },
        "fenghuang_wings_left": {
            srcfn(options) {
                return `img/transformations/fenghuang/leftwing/${options.fenghuang_wings_type}.png`;
            },
            showfn(options) {
                return options.show_tf && isPartEnabled(options.fenghuang_wings_type)
            },
            z: ZIndices.backhair,
            animation: "idle"
        },
        "fenghuang_wings_rightover": {
            srcfn(options) {
                return `img/transformations/fenghuang/rightover/${options.fenghuang_wings_type}.png`;
            },
            showfn(options) {
                return options.show_tf && isPartEnabled(options.fenghuang_wings_type)
            },
            z: ZIndices.over_upper,
            animation: "idle"
        },
        "fenghuang_wings_leftover": {
            srcfn(options) {
                return `img/transformations/fenghuang/leftover/${options.fenghuang_wings_type}.png`;
            },
            showfn(options) {
                return options.show_tf && isPartEnabled(options.fenghuang_wings_type)
            },
            z: ZIndices.over_upper,
            animation: "idle"
        },
        "fenghuang_tail": {
            srcfn(options) {
                return `img/transformations/fenghuang/tail/${options.fenghuang_tail_type}.png`;
            },
            showfn(options) {
                return options.show_tf && isPartEnabled(options.fenghuang_tail_type)
            },
            z: ZIndices.backhair,
            animation: "idle"
        },
        "fenghuang_tattoo": {
            srcfn(options) {
                return `img/transformations/fenghuang/tattoo/${options.fenghuang_tattoo_type}.png`;
            },
            showfn(options) {
                return options.show_tf && isPartEnabled(options.fenghuang_tattoo_type);
            },
            z: ZIndices.lower,
            animation: "idle"
        },
    };

    // canvasmodel-main.js
    // Renderer.CanvasModels.main.layers
    if (window.Renderer?.CanvasModels?.main?.layers) {
        console.log('window.Renderer.CanvasModels.main.layers', window.Renderer.CanvasModels.main.layers);
        for (const [key, value] of Object.entries(data)) {
            if (window.Renderer.CanvasModels.main.layers[key]) {
                console.error(`window.Renderer.CanvasModels.main.layers.${key} already exists`);
                log.error(`[fenghuang-mods] window.Renderer.CanvasModels.main.layers.${key} already exists`);
            }
            window.Renderer.CanvasModels.main.layers[key] = value;
        }
        log.log('[fenghuang-mods] window.Renderer.CanvasModels.main.layers patch ok.');
    } else {
        console.error('window.Renderer.CanvasModels.main.layers not found');
        log.error('[fenghuang-mods] window.Renderer.CanvasModels.main.layers not found');
    }
})();
