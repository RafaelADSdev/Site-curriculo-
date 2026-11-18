(() => {
    const root = document.documentElement;
    const systemMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const storageKey = 'portfolio:motion';
    const toggle = document.getElementById('motionToggle');
    let preference;

    try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved === 'full' || saved === 'reduced') preference = saved;
    } catch {
        // Browser storage can be unavailable in embedded previews.
    }

    function updateMotion() {
        const previous = root.dataset.motion;
        const setting = preference ?? (systemMotion.matches ? 'reduced' : 'full');
        root.dataset.motion = setting;
        if (toggle) {
            toggle.setAttribute('aria-checked', String(setting === 'full'));
            toggle.hidden = false;
        }
        if (previous !== setting) window.dispatchEvent(new Event('portfolio:motion-change'));
    }

    function chooseMotion(setting) {
        preference = setting;
        try {
            window.localStorage.setItem(storageKey, setting);
        } catch {
            // Keep the choice available for this visit.
        }
        updateMotion();
    }

    window.portfolioMotion = {
        get reduced() {
            return root.dataset.motion === 'reduced';
        }
    };

    const previewUrl = new URL(window.location.href);
    if (previewUrl.searchParams.get('motion') === 'full') {
        chooseMotion('full');
        previewUrl.searchParams.delete('motion');
        window.history.replaceState(window.history.state, '', previewUrl);
    } else {
        updateMotion();
    }

    toggle?.addEventListener('click', () => {
        chooseMotion(window.portfolioMotion.reduced ? 'full' : 'reduced');
    });
    systemMotion.addEventListener('change', updateMotion);
})();
