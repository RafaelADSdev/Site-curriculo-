document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    /* ==========================================================================
       MOBILE MENU TOGGLE
       ========================================================================== */
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', String(isOpen));
            
            // Toggle icon menu / close
            if (isOpen) {
                menuIcon.setAttribute('data-lucide', 'x');
                document.body.style.overflow = 'hidden'; // Lock scrolling
            } else {
                menuIcon.setAttribute('data-lucide', 'menu');
                document.body.style.overflow = '';
            }
            if (window.lucide) {
                lucide.createIcons();
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                if (menuIcon) {
                    menuIcon.setAttribute('data-lucide', 'menu');
                }
                document.body.style.overflow = '';
                if (window.lucide) {
                    lucide.createIcons();
                }
            });
        });
    }

    /* ==========================================================================
       NAVBAR SCROLL EFFECT
       ========================================================================== */
    const navbar = document.querySelector('.navbar');
    
    const handleScrollNavbar = () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScrollNavbar);
    handleScrollNavbar(); // Initial check

    /* ==========================================================================
       INTERSECTION OBSERVER (SCROLL ANIMATIONS)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ==========================================================================
       ACTIVE NAV LINK ON SCROLL
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    const navLinksList = document.querySelectorAll('.nav-link');

    const activeLinkObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinksList.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    };

    const activeLinkObserver = new IntersectionObserver(activeLinkObserverCallback, {
        root: null,
        threshold: 0.4,
        rootMargin: '-10% 0px -40% 0px'
    });

    sections.forEach(sec => activeLinkObserver.observe(sec));

    /* ==========================================================================
       PROJECTS GRID FILTER
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.ref-project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from other buttons
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');

            const category = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const categories = cardCategory ? cardCategory.split(' ') : [];
                
                if (category === 'all' || categories.includes(category)) {
                    card.classList.remove('hide');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    // Trigger reflow for transition
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    /* ==========================================================================
       COPY EMAIL TO CLIPBOARD
       ========================================================================== */
    const btnCopyEmail = document.getElementById('btnCopyEmail');
    if (btnCopyEmail) {
        const getCopyLabel = () => (window.i18n ? window.i18n.t('contact.copyEmail') : 'Copiar e-mail');
        const getCopiedLabel = () => (window.i18n ? window.i18n.t('contact.emailCopied') : 'E-mail copiado!');

        btnCopyEmail.addEventListener('click', () => {
            const email = 'rafaelarcanjods05@gmail.com';
            const copyText = btnCopyEmail.querySelector('.copy-text');
            const restoreCopyState = () => {
                if (copyText) copyText.textContent = getCopyLabel();
                btnCopyEmail.style.color = '';
            };
            
            const onCopySuccess = () => {
                if (copyText) copyText.textContent = getCopiedLabel();
                btnCopyEmail.style.color = 'var(--text-primary)';
                setTimeout(restoreCopyState, 2000);
            };

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(email).then(onCopySuccess).catch(err => {
                    console.error('Falha ao copiar e-mail: ', err);
                });
                return;
            }

            const fallbackInput = document.createElement('textarea');
            fallbackInput.value = email;
            fallbackInput.setAttribute('readonly', '');
            fallbackInput.style.position = 'fixed';
            fallbackInput.style.opacity = '0';
            document.body.appendChild(fallbackInput);
            fallbackInput.select();

            try {
                document.execCommand('copy');
                onCopySuccess();
            } catch (err) {
                console.error('Falha ao copiar e-mail: ', err);
            } finally {
                fallbackInput.remove();
            }
        });
    }

    /* ==========================================================================
       WEB3FORMS CONTACT FORM SUBMISSION
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    const feedbackText = document.getElementById('feedbackText');
    const btnSubmitForm = document.getElementById('btnSubmitForm');

    if (contactForm && btnSubmitForm) {
        const submitLabel = btnSubmitForm.querySelector('span');
        const getSubmitText = () => (window.i18n ? window.i18n.t('contact.submit') : 'Enviar mensagem');

        const showFormFeedback = (message, type = 'success') => {
            if (!formFeedback) return;

            formFeedback.classList.remove('hidden', 'success', 'error');
            formFeedback.classList.add(type);

            if (feedbackText) {
                feedbackText.textContent = message;
            }

            setTimeout(() => {
                formFeedback.classList.add('hidden');
                formFeedback.classList.remove('success', 'error');
            }, 6000);
        };

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const botcheck = contactForm.querySelector('[name="botcheck"]');
            if (botcheck && botcheck.checked) {
                return;
            }

            btnSubmitForm.disabled = true;
            if (submitLabel) submitLabel.textContent = window.i18n ? window.i18n.t('contact.sending') : 'Enviando...';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        Accept: 'application/json'
                    }
                });
                const result = await response.json();

                if (response.ok && result.success) {
                    contactForm.reset();
                    showFormFeedback(window.i18n ? window.i18n.t('contact.success') : 'Mensagem enviada com sucesso. Obrigado pelo contato!');
                } else {
                    const errorMessage = result.message || (window.i18n ? window.i18n.t('contact.errorGeneric') : 'Não foi possível enviar a mensagem agora. Tente novamente em instantes.');
                    showFormFeedback(errorMessage, 'error');
                }
            } catch (err) {
                console.error('Falha ao enviar mensagem: ', err);
                showFormFeedback(window.i18n ? window.i18n.t('contact.errorConnection') : 'Não foi possível conectar ao serviço de envio. Verifique sua conexão e tente novamente.', 'error');
            } finally {
                btnSubmitForm.disabled = false;
                if (submitLabel) submitLabel.textContent = getSubmitText();
            }
        });
    }

    /* ==========================================================================
        DOWNLOAD CV ACTIONS
       ========================================================================== */
    const downloadCvBtn = document.getElementById('downloadCv');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', (e) => {
            if (downloadCvBtn.getAttribute('href') === '#') {
                e.preventDefault();
                alert(window.i18n ? window.i18n.t('ui.cvUnavailable') : 'Currículo em PDF indisponível no momento.');
            }
        });
    }
});
