---
title: Introdução
description: O que é o OpenFishing, a sua filosofia auto-hospedada e focada na privacidade, e uma visão geral das suas funcionalidades.
---

**O OpenFishing** é uma aplicação web auto-hospedada para pescadores organizarem a sua **coleção de iscas**,
marcarem **pontos de pesca** num mapa, registarem as suas **capturas** e acompanharem o seu **equipamento** — tudo a partir de
uma única aplicação focada na privacidade que corre no teu próprio servidor.

É uma aplicação [SvelteKit](https://kit.svelte.dev/) suportada por uma única base de dados **SQLite**,
distribuída como uma única imagem **Docker**. Não há serviço na nuvem, conta com terceiros nem
telemetria: as tuas fotos e dados residem na tua infraestrutura e em mais lado nenhum.

## Filosofia

- **Auto-hospedado e focado na privacidade** — tu executa-lo, os dados são teus. Nada sai do teu servidor.
- **Sem nuvem** — não são necessárias dependências externas para o núcleo da aplicação funcionar.
- **Código aberto** — lançado sob a licença AGPL-3.0 no
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Simples de executar** — um contentor, um ficheiro SQLite, dois volumes para a base de dados e uploads.

## Visão geral das funcionalidades

| Área | O que faz |
|---|---|
| [Iscas](/pt/docs/features/lures) | Biblioteca de fotos com etiquetas, espécies, favoritos, registo de iscas perdidas, etiquetas QR e pesquisa rápida. |
| [Pontos](/pt/docs/features/spots) | Mapa Leaflet interativo dos teus pontos de pesca com GPS e fotos. |
| [Capturas](/pt/docs/features/catches) | Regista espécie, peso, comprimento, GPS, captura e libertação e apresentação, com um Índice de fisgada baseado no clima. |
| [Índice de fisgada](/pt/docs/features/bite-index) | Uma pontuação automática de 0 a 10 que avalia as condições de pesca a partir de dados meteorológicos. |
| [Equipamento](/pt/docs/features/tackle) | Canas, carretos, linhas e conjuntos, com histórico de bobinas. |
| [Estatísticas](/pt/docs/features/stats) | Tendências nas tuas capturas e equipamento. |
| [Funcionalidades de IA](/pt/docs/ai/ai-features) | Chatbot opcional e identificação de peixes e iscas a partir de fotos. |
| [Multiutilizador](/pt/docs/multi-user/authentication) | Início de sessão opcional para alojar amigos e família, com quotas e um painel de administração. |
| [Ligações de partilha](/pt/docs/features/share-links) | Páginas públicas só de leitura para uma isca, ponto ou captura. |
| [API REST](/pt/docs/api/rest-api) | API JSON só de leitura com tokens Bearer e uma interface Swagger. |
| [Backup e restauro](/pt/docs/backup/backup-restore) | Exportação/importação ZIP com um clique. |
| [Idiomas](/pt/docs/features/languages) | 9 idiomas com um seletor de bandeiras. |

## Próximos passos

- Segue o [Início rápido](/pt/docs/getting-started/quick-start) para ficares operacional com um único comando.
- Faz um deploy adequado com [Instalação (docker-compose)](/pt/docs/getting-started/installation).
- Ajusta o comportamento com as [Variáveis de ambiente](/pt/docs/configuration/environment-variables).

:::note
Esta documentação é uma referência concisa. Para detalhes ao nível do código-fonte, consulta o
[repositório OpenFishing](https://github.com/m1ndgames/OpenFishing) no GitHub.
:::
