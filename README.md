# UX em Foco — Pipeline DevOps

Página educativa sobre UX Design criada para demonstrar uma pipeline automatizada de integração e entrega contínua com GitHub Actions.

## Actions utilizadas

| Action | Etapa | Função e contribuição |
| --- | --- | --- |
| `actions/checkout@v4` | Preparação | Baixa o código no ambiente da pipeline. |
| `actions/setup-node@v4` | Preparação | Configura o Node.js 20 e o cache do npm. |
| `peaceiris/actions-gh-pages@v4` | Deploy | Publica a pasta `dist` na branch `gh-pages`. |

## Pipeline

`Checkout → Node.js → Instalação → Lint → Testes → Build → Deploy`

A pipeline roda em `push` e `pull_request` para `main`. O deploy ocorre apenas em pushes na branch principal, evitando publicar mudanças ainda não aprovadas.

## Executar localmente

```bash
npm ci
npm run lint
npm test
npm run build
```

Abra `index.html` no navegador para visualizar a página.

## GitHub Pages

Após a primeira execução, acesse **Settings → Pages**, escolha **Deploy from a branch** e selecione a branch **gh-pages**, pasta **/(root)**.

[![CI/CD - UX em Foco](https://github.com/Isadora-Correa/Pipeline-Devops/actions/workflows/pipeline.yml/badge.svg)](https://github.com/Isadora-Correa/Pipeline-Devops/actions/workflows/pipeline.yml)
