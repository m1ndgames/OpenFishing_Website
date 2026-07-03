---
title: Instalação (docker-compose)
description: Uma configuração docker-compose completa para o OpenFishing com volumes persistentes e as variáveis de ambiente essenciais.
---

Para tudo além de um teste rápido, executa o OpenFishing com **docker-compose**. Isto dá-te
volumes nomeados, variáveis de ambiente num só lugar e reinícios fáceis.

## docker-compose.yml

```yaml
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing:latest
    container_name: openfishing
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads
    environment:
      # Ficheiro persistente da base de dados SQLite (dentro do volume /app/data)
      - DATABASE_URL=/app/data/openfishing.db
      # Diretório de uploads (dentro do volume /app/uploads)
      - UPLOAD_PATH=/app/uploads
      # URL pública — usada para os links de código QR e de reposição de palavra-passe
      - BASE_URL=https://fishing.yourdomain.com
      # Define para ativar o início de sessão; omite para uma instância de inquilino único totalmente aberta
      - ADMIN_PASSWORD=change_me

volumes:
  openfishing-db:
  openfishing-uploads:
```

Coloca-o em funcionamento:

```bash
docker compose up -d
```

Depois navega para o teu `BASE_URL` (ou `http://localhost:3000` localmente).

## Os volumes persistentes são obrigatórios

Os dois volumes não são opcionais:

- `/app/data` contém a **base de dados SQLite** — as tuas iscas, pontos, capturas e equipamento.
- `/app/uploads` contém cada **foto** que adicionas.

:::caution
Se algum dos caminhos não estiver montado num volume persistente, esses dados são destruídos quando o
contentor é recriado. Faz sempre backup de ambos — consulta [Backup e restauro](/pt/docs/backup/backup-restore).
:::

## Variáveis de ambiente essenciais

O exemplo acima usa o essencial. A lista completa — SMTP, IA, modo demo, limites de upload e
mais — está documentada na [referência de variáveis de ambiente](/pt/docs/configuration/environment-variables).

## Proxy reverso

Coloca o OpenFishing atrás do teu proxy reverso (nginx, Caddy, Traefik…) e termina o TLS aí.
Define **`BASE_URL`** com a URL HTTPS pública para que os códigos QR e os links de reposição de palavra-passe apontem para o
sítio certo, e encaminha os cabeçalhos de proxy padrão. Consulta as
[FAQ](/pt/docs/help/faq) para mais detalhes.
