---
title: Início rápido
description: Executa o OpenFishing com um único comando, inicia sessão pela primeira vez e descobre onde ficam os teus dados.
---

A forma mais rápida de experimentar o OpenFishing na tua própria máquina é um único `docker run`.

## Comando único

```bash
docker run -d -p 3000:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing:latest
```

Depois abre **http://localhost:3000**.

Isto inicia o OpenFishing em modo **de inquilino único, totalmente aberto** — sem início de sessão. Qualquer pessoa que consiga alcançar
a porta tem acesso total, por isso expõe-a apenas numa rede de confiança até ativares a
[autenticação](/pt/docs/multi-user/authentication).

## Primeiro início de sessão

- **Sem `ADMIN_PASSWORD`** (como acima): a aplicação está aberta — não há ecrã de início de sessão e todas
  as funcionalidades estão disponíveis de imediato.
- **Com `ADMIN_PASSWORD` definido**: aparece um ecrã de início de sessão. O nome de utilizador admin é sempre
  `admin`, e a palavra-passe é a que definires em `ADMIN_PASSWORD`. A conta é
  ressincronizada a partir da variável de ambiente em cada arranque.

Consulta [Multiutilizador e autenticação](/pt/docs/multi-user/authentication) para o panorama completo.

## Onde ficam os teus dados

O OpenFishing mantém duas coisas que tens de persistir:

| Dados | Caminho no contentor | No comando acima |
|---|---|---|
| Base de dados SQLite | `/app/data` | volume nomeado `openfishing-db` |
| Fotos carregadas | `/app/uploads` | volume nomeado `openfishing-uploads` |

:::caution
Tanto a base de dados como o diretório de uploads **têm** de estar em volumes persistentes. Se executares o
contentor sem volumes, tudo se perde quando o contentor é removido.
:::

Para uma configuração pronta para produção com volumes nomeados e variáveis de ambiente num ficheiro, usa a
[instalação com docker-compose](/pt/docs/getting-started/installation).
