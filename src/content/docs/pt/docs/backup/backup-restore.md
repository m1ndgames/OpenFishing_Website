---
title: Backup e restauro
description: Backup e restauro ZIP com um clique, por utilizador ou de toda a instância, e o que o arquivo contém.
---

O OpenFishing tem **backup e restauro** integrados como arquivos ZIP transferíveis/carregáveis.

## Backup e restauro por utilizador

A partir de **`/settings`**, qualquer utilizador pode fazer backup e restaurar **os seus próprios dados** — as
suas iscas, pontos, capturas e equipamento, além dos uploads associados.

## Backup e restauro de toda a instância (admin)

A partir do painel de administração em **`/settings/admin`**, um administrador pode fazer backup e restaurar a
**instância inteira** — incluindo todos os utilizadores e contas.

:::caution
Um **restauro completo** executa uma **limpeza e reconstrução** completas da instância: os dados existentes são
substituídos pelo conteúdo do arquivo. Faz primeiro um backup novo.
:::

## Formato do arquivo

Um backup é um ZIP que contém:

- **`backup.json`** — os dados estruturados (registos).
- **`uploads/`** — os ficheiros de fotos associados.

Como é um ZIP simples, podes armazená-lo em qualquer lugar e inspecioná-lo se necessário.

## Relacionado

- Lembra-te de que a base de dados ativa e os uploads têm de estar em
  [volumes persistentes](/pt/docs/getting-started/installation) — os backups complementam, mas não substituem,
  volumes adequados.
