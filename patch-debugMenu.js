(() => {
    // run this file in button of the sc2 script

    const log = window.modUtils.getLogger();

    // debugMenu.js
    // window.setup.debugMenu.eventList
    if (window?.setup?.debugMenu?.eventList) {
        console.log('window.setup.debugMenu.eventList ', window.setup.debugMenu.eventList);

        const eventList = window.setup.debugMenu.eventList;
        eventList.Character.push(...[
            {
                link: [`取消凤凰化`, stayOnPassageFn],
                widgets: [`<<set $fenghuang to 0>>`],
            },
            {
                link: [`增加凤凰化`, stayOnPassageFn],
                widgets: [`<<set $fenghuang += 1>>`],
            },
            {
                link: [`凤凰化上升`, stayOnPassageFn],
                widgets: [`<<set $fenghuangbuild += 40>>`],
            },
            {
                link: [`凤凰化下降`, stayOnPassageFn],
                widgets: [`<<set $fenghuangbuild -= 40>>`],
            },
        ]);

        log.log('[fenghuang-mods] window.setup.debugMenu.eventList  patch ok.');
    } else {
        console.error('window.setup.debugMenu.eventList  not found');
        log.error('[fenghuang-mods] window.setup.debugMenu.eventList  not found');
    }
})();
