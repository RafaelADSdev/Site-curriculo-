if (typeof Element.prototype.getAnimations === 'function') {
    const allowMotion = window.matchMedia('screen and (prefers-reduced-motion: no-preference)');

    for (const details of document.querySelectorAll('main details')) {
        const summary = details.firstElementChild;
        if (summary?.localName !== 'summary') continue;

        const track = document.createElement('div');
        track.className = 'disclosure-track';
        const body = document.createElement('div');
        body.className = 'disclosure-body';
        while (summary.nextSibling) body.append(summary.nextSibling);
        track.append(body);
        details.append(track);

        let revision = 0;
        summary.addEventListener('click', (event) => {
            if (event.defaultPrevented) return;

            const closing = details.hasAttribute('data-disclosure-closing');
            const expanded = !details.open || closing;
            const change = ++revision;

            function finish() {
                if (change !== revision) return;
                details.open = expanded;
                details.removeAttribute('data-disclosure-moving');
                details.removeAttribute('data-disclosure-closing');
                summary.removeAttribute('aria-expanded');
                track.inert = false;
            }

            event.preventDefault();
            if (!expanded && track.contains(document.activeElement)) {
                summary.focus({ preventScroll: true });
            }
            if (!allowMotion.matches) {
                finish();
                return;
            }

            if (!details.open) {
                details.setAttribute('data-disclosure-closing', '');
                details.open = true;
                // Let the browser lay out the closed track before starting the opening transition.
                track.getBoundingClientRect();
            }
            details.setAttribute('data-disclosure-moving', '');
            details.toggleAttribute('data-disclosure-closing', !expanded);
            track.inert = !expanded;
            if (expanded) summary.removeAttribute('aria-expanded');
            else summary.setAttribute('aria-expanded', 'false');

            const motion = track.getAnimations().find((animation) => animation.transitionProperty === 'grid-template-rows');
            if (motion) motion.finished.then(finish, finish);
            else finish();
        });
    }
}
