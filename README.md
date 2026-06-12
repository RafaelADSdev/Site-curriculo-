# Curriculo Digital - Rafael Arcanjo

Curriculo digital e portfolio profissional de Rafael Arcanjo, desenvolvido como uma pagina estatica responsiva para apresentar experiencia, formacao, certificados, stack tecnica, projetos e canais de contato.

## Visao geral

O projeto foi criado com foco em uma primeira impressao profissional, navegacao simples e boa apresentacao visual para recrutadores, clientes e contatos profissionais. A interface usa uma estetica dark com cards translucidos, animacoes suaves e secoes organizadas em formato de curriculo e portfolio.

## Funcionalidades

- Hero com nome, cargo, foto profissional e links sociais.
- Secoes de sobre, servicos, stack tecnologica, carreira e formacao.
- Area de certificados e cursos.
- Projetos em destaque com filtros por categoria.
- Formulario de contato integrado ao Web3Forms.
- Botao para download do curriculo em PDF.
- Layout responsivo para desktop, tablet e celular.
- Estados acessiveis para navegacao por teclado e reducao de movimento.
- Metadados de SEO, Open Graph, Twitter Card e dados estruturados.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Web3Forms
- Lucide Icons via CDN
- Google Fonts

## Estrutura do projeto

```text
.
|-- assets/
|   |-- avatar.png
|   `-- avatar-ai-backup.png
|-- favicon.svg
|-- index.html
|-- script.js
|-- style.css
`-- README.md
```

## Como executar localmente

Como o projeto e estatico, basta abrir o arquivo `index.html` no navegador.

Tambem e possivel servir a pasta com uma extensao como Live Server ou com um servidor simples:

```bash
npx serve .
```

Depois, acesse a URL indicada no terminal.

## Formulario de contato

O formulario usa Web3Forms para enviar mensagens para o e-mail configurado na Access Key.

Para trocar a chave ou o destinatario:

1. Acesse `https://web3forms.com`.
2. Gere uma nova Access Key para o e-mail desejado.
3. Substitua o valor do campo `access_key` no `index.html`.

O envio e feito via `fetch` no `script.js`, sem recarregar a pagina.

## Curriculo em PDF

O botao "Curriculo" aponta para `curriculo.pdf` na raiz do projeto.

Para manter o download funcionando no deploy, adicione um arquivo com esse nome:

```text
curriculo.pdf
```

## Personalizacao

Os principais pontos para editar sao:

- Conteudo das secoes: `index.html`
- Cores, espacamentos e responsividade: `style.css`
- Menu mobile, filtros, copia de e-mail e envio do formulario: `script.js`
- Foto de perfil: `assets/avatar.png`

## Contato

- GitHub: `https://github.com/RafaelADSdev`
- LinkedIn: `www.linkedin.com/in/rafaeladsdev`
- E-mail: `rafaelarcanjods05@gmail.com`
