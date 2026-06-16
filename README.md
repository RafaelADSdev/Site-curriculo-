# Currículo Digital — Rafael Arcanjo

Currículo digital e portfólio profissional de **Rafael Arcanjo**, desenvolvido como página estática responsiva para apresentar experiência, formação, certificados, stack técnica, projetos e canais de contato.

**Posicionamento:** Desenvolvedor Web com foco em **Automações** e **IA Aplicada**.

## Visão geral

O site foi criado para transmitir uma primeira impressão profissional, com navegação simples e boa apresentação visual para recrutadores, clientes e contatos profissionais. A interface usa estética dark, cards translúcidos, animações suaves e seções organizadas em formato de currículo e portfólio.

O conteúdo destaca desenvolvimento web (React, Next.js, Supabase), automações com n8n e uso prático de IA aplicada — sem foco em cloud, AWS ou infraestrutura avançada neste momento.

## Funcionalidades

- Hero com nome, cargo, foto profissional e links sociais.
- Alternância de idioma **PT / EN** com preferência salva no navegador.
- Seções de sobre, serviços, stack tecnológica, carreira e formação.
- Área de certificados e cursos.
- Projetos em destaque com filtros por categoria.
- Formulário de contato integrado ao Web3Forms.
- Botão para download do currículo em PDF.
- Layout responsivo para desktop, tablet e celular.
- Estados acessíveis para navegação por teclado e redução de movimento.
- Metadados de SEO, Open Graph, Twitter Card e dados estruturados (JSON-LD).

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- i18n.js (traduções PT/EN)
- Web3Forms
- Lucide Icons via CDN
- Google Fonts

## Estrutura do projeto

```text
.
├── assets/
│   └── avatar.png
├── curriculo.pdf
├── favicon.svg
├── i18n.js
├── index.html
├── script.js
├── style.css
└── README.md
```

## Como executar localmente

Como o projeto é estático, basta abrir o arquivo `index.html` no navegador.

Também é possível servir a pasta com uma extensão como Live Server ou com um servidor simples:

```bash
npx serve .
```

No PowerShell:

```powershell
python -m http.server 8765
```

Depois, acesse a URL indicada no terminal.

## Internacionalização (i18n)

As traduções ficam centralizadas em `i18n.js`. Elementos traduzíveis usam os atributos:

- `data-i18n` — texto do elemento
- `data-i18n-placeholder` — placeholders de formulário
- `data-i18n-aria` — rótulos de acessibilidade

O idioma padrão é **inglês (EN)**. A escolha do usuário é persistida em `localStorage` com a chave `site-lang`.

## Formulário de contato

O formulário usa Web3Forms para enviar mensagens para o e-mail configurado na Access Key.

Para trocar a chave ou o destinatário:

1. Acesse [web3forms.com](https://web3forms.com).
2. Gere uma nova Access Key para o e-mail desejado.
3. Substitua o valor do campo `access_key` no `index.html`.

O envio é feito via `fetch` no `script.js`, sem recarregar a página.

## Currículo em PDF

O botão **Currículo** aponta para `curriculo.pdf` na raiz do projeto.

Para manter o download funcionando no deploy, mantenha um arquivo com esse nome na raiz:

```text
curriculo.pdf
```

## Personalização

Os principais pontos para editar são:

- Conteúdo e estrutura das seções: `index.html`
- Traduções PT/EN: `i18n.js`
- Cores, espaçamentos e responsividade: `style.css`
- Menu mobile, filtros, cópia de e-mail e envio do formulário: `script.js`
- Foto de perfil: `assets/avatar.png`

## Deploy

O projeto pode ser publicado em qualquer hospedagem de site estático (por exemplo, Netlify ou GitHub Pages), apontando a raiz do repositório como pasta de publicação.

## Contato

- GitHub: [RafaelADSdev](https://github.com/RafaelADSdev)
- LinkedIn: [rafaeladsdev](https://www.linkedin.com/in/rafaeladsdev)
- E-mail: rafaelarcanjods05@gmail.com
