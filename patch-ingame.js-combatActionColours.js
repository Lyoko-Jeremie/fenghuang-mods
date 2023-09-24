(() => {
    // run this file in button of the sc2 script

    const log = window.modUtils.getLogger();

    // ingame.js
    // window.combatActionColours
    if (window?.combatActionColours) {
        console.log('window.combatActionColours', window.combatActionColours);

        const combatActionColours = window.combatActionColours;
        combatActionColours.Default.def.push('fengMing');
        combatActionColours.Tentacle.def.push('fengMing');
        combatActionColours.Struggle.def.push('fengMing');

        log.log('[fenghuang-mods] window.combatActionColours patch ok.');
    } else {
        console.error('window.combatActionColours not found');
        log.error('[fenghuang-mods] window.combatActionColours not found');
    }
})();
