const translations = {
    pt: {
        meta: {
            title: 'Rafael Arcanjo | Desenvolvedor Frontend & Suporte de TI',
            description: 'Currículo digital e portfólio de Rafael Arcanjo, desenvolvedor frontend e profissional de suporte de TI com experiência em React, infraestrutura, dados e automações.',
            ogDescription: 'Projetos, experiência, certificados e formas de contato de Rafael Arcanjo.',
            twitterDescription: 'Currículo digital com projetos, experiência e certificados.'
        },
        nav: {
            home: 'Início',
            about: 'Sobre',
            services: 'Serviços',
            stack: 'Stack',
            experience: 'Carreira',
            certifications: 'Certificados',
            projects: 'Projetos',
            contact: 'Contato',
            cv: 'Currículo',
            goHome: 'Ir para o início',
            openMenu: 'Abrir Menu',
            downloadCv: 'Baixar currículo em PDF',
            switchLang: 'Mudar idioma para inglês'
        },
        hero: {
            badge: 'Disponível para novos projetos',
            subtitle: 'Desenvolvedor Frontend & Suporte de TI',
            description: 'Graduando em Análise e Desenvolvimento de Sistemas pela Faculdade Senac (2026.1). Especializado em criar interfaces responsivas e de alto desempenho no ecossistema React, integrando soluções seguras de suporte, infraestrutura local e análise de dados operacionais.',
            viewProjects: 'Ver projetos',
            contactMe: 'Falar comigo',
            scrollAbout: 'Ir para Sobre mim'
        },
        about: {
            tag: '01 // SOBRE MIM',
            title: 'Minha Trajetória',
            lead: 'Desenvolvedor focado em construir aplicações web funcionais, atrativas e de fácil manutenção, aliado a uma sólida base de suporte técnico em TI.',
            p1: 'Minha jornada une a dedicação acadêmica no curso de Análise e Desenvolvimento de Sistemas na Faculdade Senac com a prática diária no gerenciamento de redes, diagnóstico de hardware/software e suporte corporativo no meu cargo atual de TI. Essa dualidade me permite entender profundamente o comportamento do usuário e a robustez que um sistema precisa ter nos bastidores.',
            p2: 'Atualmente, dedico meus estudos ao aprofundamento no ecossistema React.js, TypeScript e integrações de APIs, buscando sempre entregar interfaces com alta acessibilidade, excelente tempo de carregamento (SEO) e animações que melhoram a usabilidade.',
            stat1: 'Conclusão de ADS Senac',
            stat2: 'Projetos Desenvolvidos',
            stat3: 'Compromisso com Qualidade'
        },
        services: {
            tag: '02 // SERVIÇOS',
            title: 'O que eu faço',
            card1Title: 'Front-end & UX',
            card1Desc: 'Desenvolvimento de interfaces modernas e interativas com foco em responsividade, usabilidade e otimização SEO. Criação de layouts pixel-perfect utilizando HTML5, CSS3, ES6 JavaScript e React.',
            card2Title: 'Suporte & Infraestrutura',
            card2Desc: 'Configuração e gerenciamento de servidores de rede, manutenção preventiva e corretiva de hardware e software, suporte ao usuário corporativo e resolução ágil de problemas em ambientes Windows/Linux.',
            card3Title: 'Dados & Business Intelligence',
            card3Desc: 'Modelagem de dados operacionais e de chamados de suporte. Construção de relatórios executivos interativos em Power BI e planilhas automatizadas com Excel para tomada de decisões.'
        },
        stack: {
            tag: '03 // HARD SKILLS',
            title: 'Stack Tecnológica',
            frontend: 'Front-end',
            data: 'Dados & BI',
            infra: 'Infra & Suporte'
        },
        experience: {
            tag: '04 // CARREIRA',
            title: 'Experiência Profissional',
            job1Date: '01/Mai/2026 - Atual',
            job1Title: 'Estagiário em Desenvolvimento',
            job1Intro: 'Auxílio no desenvolvimento frontend de aplicações e produtos digitais da empresa, focando em manutenções corretivas, melhorias de interface e experiência do usuário:',
            job1Li1: '› Auxílio na codificação e componentização de interfaces com foco em React JS, HTML5 e CSS3, integrando soluções de backend com Supabase e automações de fluxos via n8n.',
            job1Li2: '› Identificação e correção de bugs visuais e de fluxo de dados nas plataformas internas.',
            job1Li3: '› Colaboração direta em testes de interface e ajustes de responsividade em layouts web.',
            job2Date: '05/Jan/2026 - 30/Abr/2026',
            job2Title: 'Suporte de TI',
            job2Intro: 'Suporte de infraestrutura e serviços de redes de computadores, além do diagnóstico ágil e manutenção de sistemas corporativos locais:',
            job2Li1: '› Diagnóstico avançado de falhas em hardware, software e cabeamento estruturado de redes.',
            job2Li2: '› Administração de usuários no Active Directory, suporte ao CRM Bitrix, gerenciamento de permissões de arquivos e acessos.',
            job2Li3: '› Desenvolvimento de scripts Shell para instalação automatizada de utilitários em novos setups.',
            job2Li4: '› Redução do tempo médio de atendimento de chamados (SLA) através da documentação de FAQ.',
            job3Date: '2022 - 2024',
            job3Title: 'Desenvolvedor Frontend Freelance',
            job3Company: 'Projetos Autônomos',
            job3Desc: 'Criação de websites estáticos, portfólios corporativos e interfaces de e-commerce locais, otimizando o layout para visualização mobile e SEO orgânico.'
        },
        education: {
            tag: '05 // EDUCAÇÃO',
            title: 'Formação Acadêmica',
            edu1Date: '2023 - 2026.1',
            edu1Title: 'Análise e Desenvolvimento de Sistemas',
            edu1Desc: 'Curso superior focado em engenharia de requisitos, lógica estruturada, bancos de dados relacionais e desenvolvimento web completo.',
            edu1Status: 'Conclusão no semestre atual',
            edu2Date: '2023',
            edu2Title: 'Formação Intensiva Frontend React',
            edu2Desc: 'Especialização prática voltada a componentização, Hooks de estado do React, consumo de dados assíncronos e Deploy automatizado na Vercel/GitHub Pages.'
        },
        certifications: {
            tag: '06 // CREDENCIAIS',
            title: 'Certificados & Cursos',
            hours: 'horas',
            fullLoad: 'Carga Completa',
            credential: 'Credencial',
            verified: 'Credencial Verificada - Cisco',
            inPerson: 'Participação Presencial',
            cert1Title: 'Formação Front-end - HTML, CSS, JavaScript, React e +',
            cert1Topics: 'HTML5, CSS3, JavaScript ES6+, React, Hooks, Redux, Node.js e ferramentas do ecossistema.',
            cert2Title: 'AI-900 - Fundamentos de IA no Azure',
            cert2Topics: 'Conceitos fundamentais de Inteligência Artificial, Machine Learning, Visão Computacional, NLP e serviços da Azure AI.',
            cert3Title: 'Automação com n8n',
            cert3Topics: 'Automação de processos, tratamento e validação de dados, controle de fluxo (If, Loop, Merge) e integrações de APIs externas.',
            cert4Title: 'SENAC TakeOff 2025.2',
            cert4Topics: 'Tecnologias Emergentes, Learning Agility, Fundamentos de DevOps, Primeiros passos com Docker e Prompt Engineering.',
            cert5Title: 'Gerenciamento de Ameaças Cibernéticas',
            cert5Topics: 'Princípios de segurança da informação, detecção de ameaças cibernéticas, proteção de dados e políticas de segurança em rede.',
            cert6Title: 'Soluções de IA no GitHub',
            cert6Topics: 'IA Generativa no desenvolvimento, automações com GitHub Actions, Copilot e práticas modernas no controle de versão Git.',
            cert7Title: 'CPNordeste - Participante',
            cert7Topics: 'Participação presencial em workshops, hackathons e palestras de inovação, empreendedorismo e desenvolvimento na Campus Party.'
        },
        projects: {
            tag: '07 // TRABALHOS',
            title: 'Projetos em destaque',
            filterAll: 'Todos',
            filterFrontend: 'Frontend',
            filterData: 'Dados / BI',
            requestDetails: 'Pedir detalhes',
            viewPage: 'Ver página',
            github: 'GitHub',
            demo: 'Demo',
            p1Desc: 'Plataforma de gerenciamento de leads comerciais e painel de controle financeiro.',
            p1Li1: '› Quadro Kanban interativo com drag-and-drop para alteração de status de leads.',
            p1Li2: '› Painel analítico de cobrança exibindo faturamento mensal e taxas de conversão de leads.',
            p1Li3: '› Estrutura modular em React com TypeScript utilizando context API para controle de estado.',
            p2Desc: 'Template estático e de alto desempenho projetado para portfólios de desenvolvedores.',
            p2Li1: '› Estrutura responsiva fluida, otimizada para aparelhos móveis.',
            p2Li2: '› Pontuação de 100/100 no Google Lighthouse (Performance, Acessibilidade e SEO).',
            p2Li3: '› Animações nativas suaves em JavaScript sem dependências externas de pacotes pesados.',
            p3Desc: 'Sistema web para controle e gerenciamento offline do inventário de ativos tecnológicos corporativos.',
            p3Li1: '› Registro completo (CRUD) de notebooks e celulares sem dependência de banco de dados externo.',
            p3Li2: '› Busca inteligente em tempo real e filtros avançados por status de conservação, departamento e ano.',
            p3Li3: '› Upload de fotos via FileReader API com visualização em lightbox e exportação de relatórios em formato CSV.',
            p4Desc: 'Plataforma descentralizada para monitoramento, registro e compensação de pegada de carbono corporativa.',
            p4Li1: '› Dashboard de acompanhamento de emissões totais de CO₂ geradas por consumo de energia e frotas de veículos.',
            p4Li2: '› Tokenização de créditos de carbono no padrão de contratos inteligentes utilizando a rede Ethereum via MetaMask.',
            p4Li3: '› Catálogo completo de projetos sustentáveis parceiros para realizar a compensação ambiental de forma rápida e segura.',
            p5Desc: 'Plataforma PWA voltada para a gestão de casos criminais com suporte a inteligência preditiva por IA.',
            p5Li1: '› Registro, controle e acompanhamento de ocorrências e laudos técnicos integrando backend Python (Flask).',
            p5Li2: '› Análise e classificação preditiva automatizada de tipos de crimes com base no perfil da vítima e local da ocorrência.',
            p5Li3: '› Modelo de Regressão Logística serializado integrado ao fluxo web, com suporte offline via PWA Service Worker.'
        },
        contact: {
            tag: '08 // CONTATO',
            title: 'Vamos conversar?',
            subtitle: 'Estou sempre aberto a oportunidades profissionais, novos projetos freelances ou tirar dúvidas sobre suporte e frontend.',
            email: 'E-mail',
            linkedin: 'LinkedIn',
            linkedinValue: 'Conectar profissionalmente',
            github: 'GitHub',
            copyEmail: 'Copiar e-mail',
            emailCopied: 'E-mail copiado!',
            formName: 'Seu Nome',
            formEmail: 'Seu E-mail',
            formMessage: 'Sua Mensagem',
            formPlaceholderName: 'João Silva',
            formPlaceholderEmail: 'joao@email.com',
            formPlaceholderMessage: 'Escreva sua mensagem...',
            submit: 'Enviar mensagem',
            sending: 'Enviando...',
            success: 'Mensagem enviada com sucesso. Obrigado pelo contato!',
            errorGeneric: 'Não foi possível enviar a mensagem agora. Tente novamente em instantes.',
            errorConnection: 'Não foi possível conectar ao serviço de envio. Verifique sua conexão e tente novamente.',
            formSubject: 'Nova mensagem pelo currículo digital - Rafael Arcanjo',
            formFromName: 'Currículo Digital Rafael Arcanjo'
        },
        footer: {
            backHome: 'Voltar ao início',
            rights: '© 2026 Rafael Arcanjo. Todos os direitos reservados.'
        },
        ui: {
            cvUnavailable: 'Currículo em PDF indisponível no momento.'
        }
    },
    en: {
        meta: {
            title: 'Rafael Arcanjo | Frontend Developer & IT Support',
            description: 'Digital resume and portfolio of Rafael Arcanjo, frontend developer and IT support professional with experience in React, infrastructure, data, and automation.',
            ogDescription: 'Projects, experience, certifications, and contact information for Rafael Arcanjo.',
            twitterDescription: 'Digital resume with projects, experience, and certifications.'
        },
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            stack: 'Stack',
            experience: 'Career',
            certifications: 'Certifications',
            projects: 'Projects',
            contact: 'Contact',
            cv: 'Resume',
            goHome: 'Go to home',
            openMenu: 'Open menu',
            downloadCv: 'Download resume as PDF',
            switchLang: 'Switch language to Portuguese'
        },
        hero: {
            badge: 'Available for new projects',
            subtitle: 'Frontend Developer & IT Support',
            description: 'Undergraduate student in Systems Analysis and Development at Faculdade Senac (2026.1). Specialized in building responsive, high-performance interfaces in the React ecosystem, integrating secure support solutions, local infrastructure, and operational data analysis.',
            viewProjects: 'View projects',
            contactMe: 'Get in touch',
            scrollAbout: 'Go to About me'
        },
        about: {
            tag: '01 // ABOUT ME',
            title: 'My Journey',
            lead: 'Developer focused on building functional, attractive, and maintainable web applications, backed by a solid foundation in IT technical support.',
            p1: 'My journey combines academic dedication in the Systems Analysis and Development program at Faculdade Senac with daily practice in network management, hardware/software diagnostics, and corporate support in my current IT role. This duality allows me to deeply understand user behavior and the robustness a system needs behind the scenes.',
            p2: 'Currently, I dedicate my studies to deepening my knowledge of the React.js ecosystem, TypeScript, and API integrations, always striving to deliver interfaces with high accessibility, excellent load times (SEO), and animations that improve usability.',
            stat1: 'Senac ADS Completion',
            stat2: 'Projects Developed',
            stat3: 'Commitment to Quality'
        },
        services: {
            tag: '02 // SERVICES',
            title: 'What I do',
            card1Title: 'Front-end & UX',
            card1Desc: 'Development of modern, interactive interfaces focused on responsiveness, usability, and SEO optimization. Creation of pixel-perfect layouts using HTML5, CSS3, ES6 JavaScript, and React.',
            card2Title: 'Support & Infrastructure',
            card2Desc: 'Configuration and management of network servers, preventive and corrective hardware and software maintenance, corporate user support, and agile problem resolution in Windows/Linux environments.',
            card3Title: 'Data & Business Intelligence',
            card3Desc: 'Modeling of operational and support ticket data. Building interactive executive reports in Power BI and automated spreadsheets in Excel for decision-making.'
        },
        stack: {
            tag: '03 // HARD SKILLS',
            title: 'Tech Stack',
            frontend: 'Front-end',
            data: 'Data & BI',
            infra: 'Infra & Support'
        },
        experience: {
            tag: '04 // CAREER',
            title: 'Professional Experience',
            job1Date: 'May/01/2026 - Present',
            job1Title: 'Development Intern',
            job1Intro: 'Assisting in frontend development of company applications and digital products, focusing on corrective maintenance, interface improvements, and user experience:',
            job1Li1: '› Assisted in coding and componentizing interfaces with React JS, HTML5, and CSS3, integrating backend solutions with Supabase and workflow automations via n8n.',
            job1Li2: '› Identified and fixed visual bugs and data flow issues on internal platforms.',
            job1Li3: '› Collaborated directly on interface testing and responsiveness adjustments in web layouts.',
            job2Date: 'Jan/05/2026 - Apr/30/2026',
            job2Title: 'IT Support',
            job2Intro: 'Infrastructure support and computer network services, plus agile diagnostics and maintenance of local corporate systems:',
            job2Li1: '› Advanced diagnostics of hardware, software, and structured network cabling failures.',
            job2Li2: '› User administration in Active Directory, Bitrix CRM support, file permissions and access management.',
            job2Li3: '› Shell script development for automated installation of utilities on new setups.',
            job2Li4: '› Reduced average ticket resolution time (SLA) through FAQ documentation.',
            job3Date: '2022 - 2024',
            job3Title: 'Freelance Frontend Developer',
            job3Company: 'Independent Projects',
            job3Desc: 'Creation of static websites, corporate portfolios, and local e-commerce interfaces, optimizing layouts for mobile viewing and organic SEO.'
        },
        education: {
            tag: '05 // EDUCATION',
            title: 'Academic Background',
            edu1Date: '2023 - 2026.1',
            edu1Title: 'Systems Analysis and Development',
            edu1Desc: 'Undergraduate program focused on requirements engineering, structured logic, relational databases, and full-stack web development.',
            edu1Status: 'Completing this semester',
            edu2Date: '2023',
            edu2Title: 'Intensive Frontend React Training',
            edu2Desc: 'Practical specialization focused on componentization, React state Hooks, asynchronous data consumption, and automated deployment on Vercel/GitHub Pages.'
        },
        certifications: {
            tag: '06 // CREDENTIALS',
            title: 'Certifications & Courses',
            hours: 'hours',
            fullLoad: 'Full Course',
            credential: 'Credential',
            verified: 'Verified Credential - Cisco',
            inPerson: 'In-Person Participation',
            cert1Title: 'Front-end Training - HTML, CSS, JavaScript, React & More',
            cert1Topics: 'HTML5, CSS3, JavaScript ES6+, React, Hooks, Redux, Node.js, and ecosystem tools.',
            cert2Title: 'AI-900 - Azure AI Fundamentals',
            cert2Topics: 'Fundamental concepts of Artificial Intelligence, Machine Learning, Computer Vision, NLP, and Azure AI services.',
            cert3Title: 'Automation with n8n',
            cert3Topics: 'Process automation, data processing and validation, flow control (If, Loop, Merge), and external API integrations.',
            cert4Title: 'SENAC TakeOff 2025.2',
            cert4Topics: 'Emerging Technologies, Learning Agility, DevOps Fundamentals, First steps with Docker, and Prompt Engineering.',
            cert5Title: 'Cyber Threat Management',
            cert5Topics: 'Information security principles, cyber threat detection, data protection, and network security policies.',
            cert6Title: 'AI Solutions on GitHub',
            cert6Topics: 'Generative AI in development, automations with GitHub Actions, Copilot, and modern Git version control practices.',
            cert7Title: 'CPNordeste - Participant',
            cert7Topics: 'In-person participation in workshops, hackathons, and innovation, entrepreneurship, and development talks at Campus Party.'
        },
        projects: {
            tag: '07 // WORK',
            title: 'Featured projects',
            filterAll: 'All',
            filterFrontend: 'Frontend',
            filterData: 'Data / BI',
            requestDetails: 'Request details',
            viewPage: 'View page',
            github: 'GitHub',
            demo: 'Demo',
            p1Desc: 'Commercial lead management platform and financial control dashboard.',
            p1Li1: '› Interactive Kanban board with drag-and-drop for lead status changes.',
            p1Li2: '› Billing analytics panel displaying monthly revenue and lead conversion rates.',
            p1Li3: '› Modular React structure with TypeScript using Context API for state management.',
            p2Desc: 'High-performance static template designed for developer portfolios.',
            p2Li1: '› Fluid responsive structure optimized for mobile devices.',
            p2Li2: '› Score of 100/100 on Google Lighthouse (Performance, Accessibility, and SEO).',
            p2Li3: '› Smooth native JavaScript animations without heavy external package dependencies.',
            p3Desc: 'Web system for offline control and management of corporate technology asset inventory.',
            p3Li1: '› Full CRUD registration of laptops and phones without external database dependency.',
            p3Li2: '› Real-time smart search and advanced filters by condition status, department, and year.',
            p3Li3: '› Photo upload via FileReader API with lightbox preview and CSV report export.',
            p4Desc: 'Decentralized platform for monitoring, recording, and offsetting corporate carbon footprint.',
            p4Li1: '› Dashboard tracking total CO₂ emissions from energy consumption and vehicle fleets.',
            p4Li2: '› Carbon credit tokenization using smart contract standards on the Ethereum network via MetaMask.',
            p4Li3: '› Complete catalog of partner sustainable projects for fast and secure environmental offsetting.',
            p5Desc: 'PWA platform for criminal case management with AI predictive intelligence support.',
            p5Li1: '› Registration, control, and tracking of incidents and technical reports integrating Python (Flask) backend.',
            p5Li2: '› Automated predictive analysis and classification of crime types based on victim profile and incident location.',
            p5Li3: '› Serialized Logistic Regression model integrated into the web flow, with offline support via PWA Service Worker.'
        },
        contact: {
            tag: '08 // CONTACT',
            title: "Let's talk?",
            subtitle: 'I am always open to professional opportunities, new freelance projects, or answering questions about support and frontend.',
            email: 'Email',
            linkedin: 'LinkedIn',
            linkedinValue: 'Connect professionally',
            github: 'GitHub',
            copyEmail: 'Copy email',
            emailCopied: 'Email copied!',
            formName: 'Your Name',
            formEmail: 'Your Email',
            formMessage: 'Your Message',
            formPlaceholderName: 'John Smith',
            formPlaceholderEmail: 'john@email.com',
            formPlaceholderMessage: 'Write your message...',
            submit: 'Send message',
            sending: 'Sending...',
            success: 'Message sent successfully. Thank you for reaching out!',
            errorGeneric: 'Could not send the message right now. Please try again shortly.',
            errorConnection: 'Could not connect to the sending service. Check your connection and try again.',
            formSubject: 'New message from digital resume - Rafael Arcanjo',
            formFromName: 'Rafael Arcanjo Digital Resume'
        },
        footer: {
            backHome: 'Back to home',
            rights: '© 2026 Rafael Arcanjo. All rights reserved.'
        },
        ui: {
            cvUnavailable: 'PDF resume is currently unavailable.'
        }
    }
};

const STORAGE_KEY = 'site-lang';
let currentLang = 'pt';

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function t(key) {
    return getNestedValue(translations[currentLang], key) ?? getNestedValue(translations.pt, key) ?? key;
}

function updateMeta() {
    document.title = t('meta.title');

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', t('meta.description'));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title'));

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('meta.ogDescription'));

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', currentLang === 'en' ? 'en_US' : 'pt_BR');

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', t('meta.title'));

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', t('meta.twitterDescription'));

    document.documentElement.lang = currentLang === 'en' ? 'en' : 'pt-BR';
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = t(key);
        if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = t(key);
        if (value) el.setAttribute('placeholder', value);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
        const key = el.getAttribute('data-i18n-aria');
        const value = t(key);
        if (value) el.setAttribute('aria-label', value);
    });

    const formSubject = document.querySelector('input[name="subject"]');
    if (formSubject) formSubject.value = t('contact.formSubject');

    const formFromName = document.querySelector('input[name="from_name"]');
    if (formFromName) formFromName.value = t('contact.formFromName');

    updateMeta();
    updateLangToggle();
}

function updateLangToggle() {
    const langToggle = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');
    if (!langToggle || !langLabel) return;

    const nextLang = currentLang === 'pt' ? 'en' : 'pt';
    langLabel.textContent = nextLang.toUpperCase();
    langToggle.setAttribute('aria-label', t('nav.switchLang'));
    langToggle.setAttribute('title', t('nav.switchLang'));
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function toggleLanguage() {
    setLanguage(currentLang === 'pt' ? 'en' : 'pt');
}

function initI18n() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) {
        currentLang = saved;
    }
    applyTranslations();

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

window.i18n = { t, setLanguage, toggleLanguage, getLanguage: () => currentLang };

document.addEventListener('DOMContentLoaded', initI18n);
