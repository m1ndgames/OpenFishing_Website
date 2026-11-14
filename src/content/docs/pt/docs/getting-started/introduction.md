---
title: Introdução
description: O que é o OpenFishing, como mantém os teus dados no teu próprio servidor, o que comunica com a Internet e uma visão geral das funcionalidades.
---

O **OpenFishing** é uma aplicação web auto-hospedada para pescadores organizarem a sua
**coleção de iscas**, marcarem **locais de pesca** num mapa, registarem as suas **capturas** e
acompanharem o seu **equipamento**, tudo numa única aplicação que respeita a privacidade e corre
no teu próprio servidor.

É distribuída como uma única imagem **Docker** com uma única base de dados **SQLite**. Sem
serviço na nuvem, sem conta com terceiros e sem telemetria: as tuas fotos e registos vivem no
teu servidor e em mais lado nenhum. Queres vê-la antes de instalar? Abre a
[demo ao vivo](https://demo.openfishing.org): sem registo, só de leitura.

<figure class="doc-shot">
<div class="doc-shot-frame"><img class="shot-dark" src="/screenshots/hero.jpg" alt="Uma captura no OpenFishing: uma perca no tapete de medição com o comprimento, a isca que a apanhou, o Índice de mordida e o local no mapa" width="1400" height="847" loading="lazy" decoding="async"><img class="shot-light" src="/screenshots/hero-light.jpg" alt="Uma captura no OpenFishing: uma perca no tapete de medição com o comprimento, a isca que a apanhou, o Índice de mordida e o local no mapa" width="1400" height="847" loading="lazy" decoding="async"></div>
<figcaption><a href="https://demo.openfishing.org/" target="_blank" rel="noopener">Ver na demo <svg class="doc-shot-cue" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="sr-only"> (abre num novo separador)</span></a></figcaption>
</figure>

## Visão geral das funcionalidades

| Área | O que faz |
|---|---|
| [Iscas](/pt/docs/features/lures) | Fototeca com etiquetas, espécies, favoritos, registo de iscas perdidas, etiquetas QR e pesquisa rápida. |
| [Locais](/pt/docs/features/spots) | Mapa interativo dos teus locais de pesca com GPS e fotos. |
| [Capturas](/pt/docs/features/catches) | Regista espécie, peso, comprimento, GPS, captura e devolução e estilo de recuperação, com um índice de mordida baseado no tempo. |
| [Equipamento](/pt/docs/features/tackle) | Canas, carretos, linhas e combos, com histórico de bobinas. |

Inclui ainda:

- **Análises**: [Índice de mordida](/pt/docs/features/bite-index), [Estatísticas](/pt/docs/features/stats)
- **Partilha**: [Links de partilha](/pt/docs/features/share-links)
- **Opções**: [Temas e aparência](/pt/docs/features/themes), [Idiomas](/pt/docs/features/languages)
- **Gerir o teu servidor**: [Multiusuário](/pt/docs/multi-user/authentication), [Funcionalidades de IA](/pt/docs/ai/ai-features), [Backup e restauração](/pt/docs/backup/backup-restore), [API REST](/pt/docs/api/rest-api)

## Filosofia

- **Auto-hospedado e focado na privacidade**: tu executas, os dados são teus. Os teus registos e
  fotos ficam no teu servidor.
- **Sem nuvem**: não é preciso nenhuma conta nem serviço na nuvem para a aplicação funcionar.
- **Código aberto**: publicado sob a licença AGPL-3.0 no
  [GitHub](https://github.com/m1ndgames/OpenFishing).
- **Simples de executar**: um contentor, um ficheiro SQLite, dois volumes para a base de dados e os envios.

## O que comunica com a Internet

Os teus registos e fotos nunca saem do teu servidor. Estas funcionalidades vão buscar dados ao
exterior, e mais nenhuma:

- **[Tempo](/pt/docs/features/bite-index)**: quando registas uma captura, abres um local ou perguntas ao chatbot sobre um sítio, o servidor pede
  ao [Open-Meteo](https://open-meteo.com/) o tempo atual aí. Só são enviadas as coordenadas.
- **Mapa de [locais](/pt/docs/features/spots)**: sempre que aparece um mapa, o browser carrega mosaicos do OpenStreetMap, que vê a zona que estás a
  ver. Com `MAP_TILE_URL` usas o teu próprio servidor de mosaicos.
- **[Funcionalidades de IA](/pt/docs/ai/ai-features)**: só se as configurares; o fornecedor de IA que escolheres recebe a tua pergunta ou foto.
- **[Reposição da palavra-passe](/pt/docs/multi-user/authentication)**: só se o SMTP estiver configurado; o teu próprio servidor de correio envia o email.

## Próximos passos

- [Instala o OpenFishing](/pt/docs/getting-started/installation) no teu NAS ou servidor doméstico.
- Espreita primeiro a [demo ao vivo](https://demo.openfishing.org).
- Ajusta o comportamento com as [variáveis de ambiente](/pt/docs/configuration/environment-variables).

:::note
Falta alguma coisa ou algo não está claro? [Abre uma issue no GitHub](https://github.com/m1ndgames/OpenFishing/issues)
e acrescentamos.
:::
