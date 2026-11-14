---
title: Multiutilizador e autenticação
description: Ativa o início de sessão para alojar amigos e família, cria contas, define quotas de armazenamento e trata de palavras-passe esquecidas.
---

De origem, o OpenFishing tem **uma única coleção partilhada e nenhum início de sessão**: quem
conseguir abrir o endereço pode usá-lo. Numa rede doméstica de confiança, isso chega. Para alojar
amigos e família, ou para chegar ao OpenFishing a partir da internet, ativa o início de sessão.

## Ativar o início de sessão

O ficheiro compose de [Instalar o OpenFishing](/pt/docs/getting-started/installation) já tem a
linha, desligada com um `#`:

```yaml title="docker-compose.yml"
    environment:
      # Login: tira #, põe palavra-passe
      # - ADMIN_PASSWORD=
```

Tira o `# ` antes de `- ADMIN_PASSWORD=`, escreve a tua palavra-passe logo a seguir ao `=` e
executa `docker compose up -d`. Aparece um ecrã de início de sessão: entra com o utilizador
**admin** e essa palavra-passe.

## A conta admin

- O nome de utilizador é sempre `admin`.
- A palavra-passe é a que estiver em `ADMIN_PASSWORD`. O OpenFishing lê-a em cada arranque: para
  a mudar, edita a linha e volta a executar `docker compose up -d`.

## Adicionar um familiar

1. Entra como `admin` e abre **Definições → Admin**.
2. Em **Criar utilizador**, preenche **E-mail**, **Nome de utilizador** e **Palavra-passe**.
3. Deixa **Quota (MB)** vazia para não limitar envios, ou escreve um número.
4. Escolhe **Criar**.

Envia-lhe o endereço, o nome de utilizador e a palavra-passe. Entra com o e-mail ou o nome de
utilizador e pode escolher uma nova palavra-passe em **Definições → A minha conta → Alterar
palavra-passe**.

## Quem vê o quê

Cada conta tem as suas próprias iscas, locais, capturas e equipamento. Ninguém vê os dos outros.

## Gerir contas

**Definições → Admin** lista todas as contas. Em cada uma podes editar o nome de utilizador e o email,
mudar a quota de armazenamento e escrever uma palavra-passe nova no campo **Repor palavra-passe**, e depois
selecionar **Guardar**. Também podes ligar ou desligar o [chatbot de IA](/pt/docs/ai/ai-features), **Regenerar token** para
a [API REST](/pt/docs/api/rest-api), **Desativar** a conta ou **Eliminá-la**. Eliminar apaga a conta e todos os
seus dados para sempre.

## Palavras-passe esquecidas

- **Um familiar:** o admin escreve uma palavra-passe nova no campo **Repor palavra-passe** dessa conta, em **Definições → Admin**, e seleciona **Guardar**. Com o e-mail
  configurado (pelo menos `SMTP_HOST` e `SMTP_FROM`, ver
  [Variáveis de ambiente](/pt/docs/configuration/environment-variables)), o ecrã de início de
  sessão também oferece uma ligação por e-mail.
- **O admin:** muda `ADMIN_PASSWORD` e executa `docker compose up -d`.
