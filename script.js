document.addEventListener('DOMContentLoaded', () => {
    const translate = (key, fallback) => window.i18n?.t(key) ?? fallback;
    const languageSwitch = document.querySelector('.language-switch');
    if (window.i18n) languageSwitch.hidden = false;

    const menuToggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');
    const mobile = window.matchMedia('(max-width: 760px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function setMenu(open) {
        const key = open ? 'nav.closeMenu' : 'nav.openMenu';
        menu.classList.toggle('is-open', open);
        menu.inert = mobile.matches && !open;
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.dataset.i18nAria = key;
        menuToggle.setAttribute('aria-label', translate(key, open ? 'Fechar menu' : 'Abrir menu'));
    }

    setMenu(false);
    document.documentElement.classList.add('has-menu');
    menuToggle.hidden = false;
    menuToggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
    mobile.addEventListener('change', () => setMenu(false));
    document.addEventListener('click', (event) => {
        if (menu.classList.contains('is-open') && !event.target.closest('.masthead')) {
            setMenu(false);
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.classList.contains('is-open')) {
            setMenu(false);
            menuToggle.focus();
        }
    });

    function followLocation() {
        const hash = window.location.hash;
        const target = document.getElementById(hash.slice(1));
        if (target instanceof HTMLDetailsElement) {
            target.open = true;
        }
        menu.querySelectorAll('a').forEach((link) => {
            if (link.hash === hash) {
                link.setAttribute('aria-current', 'location');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    let scrollFrame;

    function stopAnchorScroll() {
        cancelAnimationFrame(scrollFrame);
    }

    function scrollToAnchor(target, immediate) {
        const root = document.documentElement;
        const start = window.scrollY;
        const padding = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
        const targetTop = target.id === 'home' ? 0 : start + target.getBoundingClientRect().top - padding;
        const end = Math.max(0, Math.min(targetTop, root.scrollHeight - root.clientHeight));
        const distance = end - start;
        const scrollTo = (top) => window.scrollTo({ top, behavior: 'instant' });

        stopAnchorScroll();
        if (immediate || reducedMotion.matches || Math.abs(distance) < 2) {
            scrollTo(end);
            return;
        }

        const duration = Math.min(1050, 480 + Math.sqrt(Math.abs(distance)) * 8);
        const started = performance.now();

        function update(now) {
            const progress = reducedMotion.matches ? 1 : Math.min(1, (now - started) / duration);
            const eased = (1 - Math.cos(progress * Math.PI)) / 2;
            scrollTo(start + distance * eased);
            if (progress < 1) scrollFrame = requestAnimationFrame(update);
        }

        scrollFrame = requestAnimationFrame(update);
    }

    document.addEventListener('click', (event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        const target = document.getElementById(link.hash.slice(1));
        if (!target) return;

        event.preventDefault();
        if (menu.classList.contains('is-open')) setMenu(false);
        if (window.location.hash !== link.hash) window.history.pushState(null, '', link.hash);
        followLocation();

        if (!target.hasAttribute('tabindex')) target.tabIndex = -1;
        target.focus({ preventScroll: true });
        scrollToAnchor(target, link.classList.contains('skip-link'));
    });

    window.addEventListener('wheel', stopAnchorScroll, { passive: true });
    window.addEventListener('pointerdown', stopAnchorScroll, { passive: true });
    window.addEventListener('keydown', stopAnchorScroll);
    window.addEventListener('popstate', stopAnchorScroll);
    window.addEventListener('hashchange', () => {
        stopAnchorScroll();
        followLocation();
    });
    followLocation();

    if ('IntersectionObserver' in window && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        requestAnimationFrame(() => {
            const viewportBottom = window.innerHeight;
            const pending = Array.from(document.querySelectorAll('[data-reveal]')).filter((element) => {
                return element.getBoundingClientRect().top > viewportBottom;
            });
            const observer = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.remove('is-awaiting-reveal');
                    observer.unobserve(entry.target);
                }
            }, { rootMargin: '0px 0px -16px 0px' });

            for (const element of pending) {
                element.classList.add('is-awaiting-reveal');
                observer.observe(element);
            }
        });
    }

    const filterBar = document.querySelector('.filter-bar');
    const filters = Array.from(filterBar.querySelectorAll('button'));
    const archiveItems = document.querySelectorAll('.archive-list > [data-category]');
    const archiveAnimations = new Map();
    filterBar.hidden = false;

    function showArchiveItem(item, visible) {
        const active = archiveAnimations.get(item);
        const animate = !reducedMotion.matches && typeof item.animate === 'function';
        if (active ? animate && active.visible === visible : item.hidden === !visible) return;

        const startHeight = animate && !item.hidden ? item.getBoundingClientRect().height : 0;
        const startOpacity = animate && !item.hidden ? getComputedStyle(item).opacity : 0;
        active?.animation.cancel();
        archiveAnimations.delete(item);
        item.inert = !visible;

        if (!animate) {
            item.hidden = !visible;
            return;
        }

        item.hidden = false;
        const endHeight = visible ? item.getBoundingClientRect().height : 0;
        const animation = item.animate([
            { height: `${startHeight}px`, opacity: startOpacity, overflow: 'clip' },
            { height: `${endHeight}px`, opacity: visible ? 1 : 0, overflow: 'clip' }
        ], {
            duration: visible ? 380 : 330,
            easing: 'cubic-bezier(.42, 0, .35, 1)',
            fill: 'both'
        });
        archiveAnimations.set(item, { animation, visible });
        animation.onfinish = () => {
            if (archiveAnimations.get(item)?.animation !== animation) return;
            item.hidden = !visible;
            archiveAnimations.delete(item);
            animation.cancel();
        };
    }

    reducedMotion.addEventListener('change', () => {
        if (!reducedMotion.matches) return;
        for (const { animation } of archiveAnimations.values()) animation.finish();
    });

    filterBar.addEventListener('click', (event) => {
        const filter = event.target.closest('button[data-filter]');
        if (!filter) return;

        const category = filter.dataset.filter;
        for (const button of filters) {
            button.setAttribute('aria-pressed', String(button === filter));
        }
        for (const item of archiveItems) {
            const visible = category === 'all' || item.dataset.category.split(' ').includes(category);
            if (!visible && item.contains(document.activeElement)) filter.focus({ preventScroll: true });
            showArchiveItem(item, visible);
        }
    });

    const copyButton = document.getElementById('btnCopyEmail');
    const copyLabel = copyButton.querySelector('[data-i18n]');
    const copyFeedback = document.getElementById('copyFeedback');
    const emailLink = document.getElementById('contactEmail');
    const defaultCopyLabel = copyLabel.textContent;
    let copyTimer;
    copyButton.hidden = false;

    copyButton.addEventListener('click', async () => {
        const email = emailLink.getAttribute('href').slice('mailto:'.length);
        if (copyTimer) window.clearTimeout(copyTimer);

        let key = 'contact.emailCopied';
        let fallback = 'E-mail copiado!';
        try {
            await navigator.clipboard.writeText(email);
        } catch {
            const range = document.createRange();
            range.selectNodeContents(emailLink);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            key = 'contact.copyError';
            fallback = 'Selecione o endereço para copiá-lo.';
        }

        copyLabel.dataset.i18n = key;
        copyLabel.textContent = translate(key, fallback);
        copyFeedback.textContent = copyLabel.textContent;
        copyTimer = window.setTimeout(() => {
            copyLabel.dataset.i18n = 'contact.copyEmail';
            copyLabel.textContent = translate('contact.copyEmail', defaultCopyLabel);
            copyFeedback.textContent = '';
        }, 2600);
    });

    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('btnSubmitForm');
    const submitLabel = submitButton.querySelector('[data-i18n]');
    const feedback = document.getElementById('formFeedback');
    const defaultSubmitLabel = submitLabel.textContent;

    function setFeedback(key, fallback, state) {
        feedback.dataset.i18n = key;
        feedback.dataset.state = state;
        feedback.textContent = translate(key, fallback);
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (submitButton.disabled || form.elements.botcheck.checked) return;

        delete feedback.dataset.i18n;
        feedback.textContent = '';
        submitButton.disabled = true;
        submitLabel.dataset.i18n = 'contact.sending';
        submitLabel.textContent = translate('contact.sending', 'Enviando…');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });
            const result = await response.json();

            if (response.ok && result.success === true) {
                form.reset();
                if (result.code === 'preview_received') {
                    setFeedback('contact.previewReceived', 'Mensagem recebida na caixa de teste desta prévia.', 'success');
                } else {
                    setFeedback('contact.success', 'Mensagem enviada. Obrigado pelo contato!', 'success');
                }
            } else if (result.code === 'invalid_fields') {
                setFeedback('contact.errorInvalid', 'Confira o nome, o e-mail e a mensagem e tente novamente.', 'error');
            } else {
                setFeedback('contact.errorGeneric', 'Não foi possível enviar a mensagem agora.', 'error');
            }
        } catch {
            setFeedback('contact.errorConnection', 'Não foi possível conectar ao serviço de envio.', 'error');
        } finally {
            submitLabel.dataset.i18n = 'contact.submit';
            submitLabel.textContent = translate('contact.submit', defaultSubmitLabel);
            submitButton.disabled = false;
        }
    });
});
