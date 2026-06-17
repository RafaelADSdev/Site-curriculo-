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
├── config.example.php
├── favicon.svg
├── i18n.js
├── index.html
├── script.js
├── send-contact.php
├── style.css
└── README.md
```

> `config.php` (com a Access Key real) fica **apenas no servidor** e não entra no Git.

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

O formulário envia os dados para `send-contact.php`, um script PHP na própria hospedagem. A **Access Key do Web3Forms fica apenas no servidor**, no arquivo `config.php` (não versionado no Git).

### Configuração local / Hostinger

1. Copie `config.example.php` para `config.php`.
2. Substitua `SUA_ACCESS_KEY_AQUI` pela sua chave do [Web3Forms](https://web3forms.com).
3. Mantenha `config.php` **fora do Git** (já está no `.gitignore`).

O `send-contact.php` repassa o formulário para a API do Web3Forms e devolve a resposta em JSON para o `script.js`.

### Hospedagem na Hostinger

Veja o passo a passo completo na seção **Deploy na Hostinger** abaixo.

## Deploy na Hostinger (domínio próprio)

### 1. Enviar os arquivos do site

1. Acesse o [hPanel da Hostinger](https://hpanel.hostinger.com).
2. Vá em **Websites** → selecione seu domínio → **Gerenciador de arquivos** (File Manager).
3. Abra a pasta **`public_html`** (raiz do site).
4. Envie todos os arquivos do projeto para `public_html`:
   - `index.html`, `style.css`, `script.js`, `i18n.js`
   - `favicon.svg`, `curriculo.pdf`
   - pasta `assets/` com `avatar.png`
   - **`send-contact.php`**

> Se já existir um `index.html` antigo, substitua pelos arquivos novos.

### 2. Criar o `config.php` (chave secreta)

1. No Gerenciador de arquivos, dentro de `public_html`, clique em **Novo arquivo**.
2. Nomeie como **`config.php`**.
3. Edite o arquivo e cole:

```php
<?php
define('WEB3FORMS_ACCESS_KEY', 'COLE_SUA_ACCESS_KEY_AQUI');
```

4. Troque `COLE_SUA_ACCESS_KEY_AQUI` pela chave real do Web3Forms.
5. Salve.

**Importante:** não faça upload do `config.php` para o GitHub. Crie ele só na Hostinger.

### 3. Gerar uma nova Access Key (recomendado)

Como a chave antiga já ficou pública no GitHub:

1. Acesse [web3forms.com](https://web3forms.com).
2. Gere uma **nova Access Key** para seu e-mail.
3. Use a chave nova no `config.php` da Hostinger.
4. Em **Allowed Domains**, adicione seu domínio:
   - `seudominio.com`
   - `www.seudominio.com`

### 4. Verificar se o PHP está ativo

O plano Business da Hostinger suporta PHP. Para testar:

1. Acesse `https://seudominio.com/send-contact.php` no navegador.
2. Deve aparecer um JSON com `"success": false` e `"Method not allowed"` — isso é normal (o script só aceita POST).

Se aparecer erro 404, confira se `send-contact.php` está em `public_html`.

### 5. Testar o formulário

1. Abra `https://seudominio.com`.
2. Vá até a seção **Contato**.
3. Preencha e envie uma mensagem de teste.
4. Confira se o e-mail chegou e se a mensagem de sucesso aparece no site.

### 6. Atualizar o site no futuro

- **Pelo Git:** faça push no repositório e envie os arquivos atualizados para `public_html` (FTP, File Manager ou Git deploy, se configurar).
- **Sempre preserve** o `config.php` na Hostinger — não apague ao atualizar os outros arquivos.

### Publicar via FTP (opcional)

1. No hPanel: **Arquivos** → **Contas FTP** → crie ou use uma conta existente.
2. Use o FileZilla (ou similar) com host, usuário e senha FTP.
3. Conecte e envie os arquivos para `public_html`.
4. Crie o `config.php` manualmente no servidor (passo 2 acima).

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

O projeto pode ser publicado em hospedagem estática ou em **Hostinger com PHP** (recomendado para o formulário de contato seguro). Veja a seção **Deploy na Hostinger** acima.

## Contato

- GitHub: [RafaelADSdev](https://github.com/RafaelADSdev)
- LinkedIn: [rafaeladsdev](https://www.linkedin.com/in/rafaeladsdev)
- E-mail: rafaelarcanjods05@gmail.com
