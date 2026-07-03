---
title: Multiutilizador e autenticação
description: Ativa o início de sessão para alojar amigos e família, com isolamento por utilizador, quotas, um painel de administração e reposição de palavra-passe por SMTP.
---

Por predefinição, o OpenFishing corre em modo **de inquilino único e totalmente aberto** — sem início de sessão.
Define a variável de ambiente **`ADMIN_PASSWORD`** para ativar o **modo multiutilizador**.

## Ativar o início de sessão

Define `ADMIN_PASSWORD` (consulta [Variáveis de ambiente](/pt/docs/configuration/environment-variables)):

```yaml
environment:
  - ADMIN_PASSWORD=change_me
```

Uma vez definido, aparece um ecrã de início de sessão. Os utilizadores iniciam sessão com o seu **e-mail/nome de
utilizador + palavra-passe**.

:::note
`AUTH_PASSWORD` é um nome alternativo **descontinuado** para `ADMIN_PASSWORD`. Usa `ADMIN_PASSWORD`.
:::

## A conta admin

- A conta **`admin`** existe sempre quando a autenticação está ativada.
- O seu nome de utilizador é sempre `admin`; a sua palavra-passe é a definida em `ADMIN_PASSWORD`.
- É **ressincronizada a partir da variável de ambiente em cada arranque**, por isso alterar a variável e
  reiniciar atualiza a palavra-passe.

## O painel de administração

Os administradores têm um painel em **`/settings/admin`** para gerir a instância:

- **Utilizadores** — criar, ativar/desativar e gerir contas.
- **Quotas de armazenamento** — limitar quanto cada utilizador pode carregar.
- **Interruptor do chatbot** — ativar/desativar as [funcionalidades de IA](/pt/docs/ai/ai-features) por utilizador.
- **Tokens de API** — gerir os tokens Bearer da [API REST](/pt/docs/api/rest-api).

## Isolamento de dados por utilizador

As iscas, pontos, capturas e equipamento de cada utilizador estão **isolados** — os utilizadores só veem os seus próprios dados.

## Reposição de palavra-passe (SMTP)

Se configurares o SMTP (pelo menos `SMTP_HOST` e `SMTP_FROM`), os utilizadores podem repor palavras-passe
esquecidas por e-mail. Sem SMTP configurado, a opção de reposição fica oculta. Consulta as
[variáveis SMTP](/pt/docs/configuration/environment-variables).

## Quotas de armazenamento por utilizador

Os administradores podem definir **quotas de armazenamento** por utilizador a partir do painel de administração,
para que nenhum utilizador possa encher o disco com uploads.
