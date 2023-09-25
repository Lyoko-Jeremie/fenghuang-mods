(() => {
    window.modModLoadController.addLifeTimeCircleHook('fenghuang-mods exportDataZip', {
        exportDataZip: async (zip) => {
            // export data that injected to memory
            zip.file('fenghuang-mods/js/feats', JSON.stringify(window?.DOL?.setup?.feats, undefined, 2));
            zip.file('fenghuang-mods/js/combatActionColours', JSON.stringify(window?.combatActionColours, undefined, 2));
            zip.file('fenghuang-mods/js/debugMenu_eventList', JSON.stringify(window?.setup?.debugMenu?.eventList, undefined, 2));
            zip.file('fenghuang-mods/js/Renderer_CanvasModels_main_layers', JSON.stringify(window.Renderer?.CanvasModels?.main?.layers, undefined, 2));
            return zip;
        }
    })
})();
