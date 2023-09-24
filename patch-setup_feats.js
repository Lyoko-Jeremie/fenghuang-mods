(() => {
    // run this file in button of the sc2 script

    const log = window.modUtils.getLogger();

    // feats.js
    // window.DOL.setup.feats
    if (window?.DOL?.setup?.feats) {
        console.log('window.DOL.setup.feats', window.DOL.setup.feats);
        window.DOL.setup.feats['Fenghuang'] = {
            title: "涅槃重生",
            desc: "鸟居丹穴，其名曰凤凰",
            difficulty: 1,
            series: "",
            filter: ["All", "Transformation"],
        };
        log.log('[fenghuang-mods] window.DOL.setup.feats patch ok.');
    } else {
        console.error('window.DOL.setup.feats not found');
        log.error('[fenghuang-mods] window.DOL.setup.feats not found');
    }
})();
