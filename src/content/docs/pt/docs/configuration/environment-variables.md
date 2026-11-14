---
title: Variáveis de ambiente
description: Todas as definições do OpenFishing, com os valores predefinidos da imagem Docker, agrupadas por função.
prev: false
---

O OpenFishing configura-se inteiramente com variáveis de ambiente, na secção `environment:` do
teu ficheiro compose (ou com `-e` no `docker run`). Os valores predefinidos abaixo são os da
imagem Docker. Quase todas as instalações definem `BASE_URL` e `TZ`; o resto é opcional.

## Endereço e hora

- **`BASE_URL`** · predefinição: não definida\
  O endereço com que se abre o OpenFishing, com `http://` ou `https://`, por exemplo
  `http://192.168.1.50:3000` ou `https://fishing.example.com`. O servidor tira daí o esquema:
  **sem ela assume HTTPS e, numa instalação só com HTTP, cada gravação é rejeitada**
  («Cross-site POST form submissions are forbidden»). Também constrói as ligações dos códigos QR e de partilha, que sem ela apontam para `http://localhost:5173`.
- **`PROTOCOL_HEADER`** · predefinição: não definida\
  Só para um reverse proxy que indica ele próprio o esquema, por exemplo
  `PROTOCOL_HEADER=x-forwarded-proto`. Se definida, tem prioridade sobre o esquema de `BASE_URL`.
- **`TZ`** · predefinição: UTC\
  O teu fuso horário, por exemplo `Europe/Lisbon` ou `America/Sao_Paulo`. Sem ele, as horas das
  capturas ficam desviadas.

## Armazenamento

- **`DATABASE_URL`** · predefinição: `/app/data/openfishing.db`\
  O ficheiro da base de dados SQLite, no volume `/app/data`. Não alterar.
- **`UPLOAD_PATH`** · predefinição: `/app/uploads`\
  Onde ficam as fotos, no volume `/app/uploads`. Não alterar.
- **`BODY_SIZE_LIMIT`** · predefinição: `104857600` (≈ 100 MB)\
  O maior envio em bytes. Um reverse proxy à frente precisa de um limite equivalente.

## Início de sessão

- **`ADMIN_PASSWORD`** · predefinição: não definida\
  Ativa o início de sessão. É a palavra-passe da conta `admin` (o nome de utilizador é sempre
  `admin`), lida de novo em cada arranque. Não definida: a instância está aberta, sem início de sessão.
- **`AUTH_PASSWORD`** · obsoleta\
  O nome antigo de `ADMIN_PASSWORD`. Ainda funciona; usa `ADMIN_PASSWORD`.

Ver [Multiusuário e autenticação](/pt/docs/multi-user/authentication).

## Email para repor a palavra-passe

A opção «esqueci-me da palavra-passe» só aparece se estiverem definidas pelo menos `SMTP_HOST` e `SMTP_FROM`.

- **`SMTP_HOST`** · predefinição: não definida\
  O teu servidor de email.
- **`SMTP_PORT`** · predefinição: `587`\
  A porta `465` implica TLS; as outras usam STARTTLS.
- **`SMTP_SECURE`** · predefinição: não definida\
  Define como `true` para TLS implícito (normalmente com a porta 465).
- **`SMTP_USER`** / **`SMTP_PASS`** · predefinição: não definidas\
  Credenciais do servidor de email. Omite-as em relays que não as pedem.
- **`SMTP_FROM`** · predefinição: não definida\
  O remetente, por exemplo `OpenFishing <noreply@example.com>`.

Por exemplo, com uma conta de email na porta 587:

```yaml title="docker-compose.yml"
    environment:
      - SMTP_HOST=smtp.example.com
      - SMTP_PORT=587
      - SMTP_USER=you@example.com
      # Palavra-passe da conta de email
      - SMTP_PASS=
      - SMTP_FROM=you@example.com
```

## Mapa

- **`MAP_TILE_URL`** · predefinição: OpenStreetMap\
  Um modelo de URL de mosaicos para
  usar o teu próprio servidor de mosaicos ou outro em vez do OpenStreetMap.\
  Por exemplo: `https://tiles.example.com/{z}/{x}/{y}.png`
- **`MAP_TILE_ATTRIBUTION`** · predefinição: não definida\
  A atribuição mostrada no mapa para `MAP_TILE_URL`. A maioria dos fornecedores exige-a.

## Funcionalidades de IA

- **`CHATBOT`** · predefinição: não definida\
  Define como `true` para ativar o chatbot de IA. Precisa das definições LiteLLM abaixo. Vê [Funcionalidades de IA](/pt/docs/ai/ai-features).
- **`LITELLM_URL`** · predefinição: não definida\
  O teu proxy LiteLLM, por exemplo `http://litellm:4000`.
- **`LITELLM_MODEL`** · predefinição: não definida\
  O modelo do chatbot, igual a um `model_name` do teu `litellm.config.yaml`.
- **`LITELLM_VISION_MODEL`** · predefinição: não definida\
  Modelo opcional para identificar peixes e iscas em fotos. Se faltar, usa `LITELLM_MODEL`.

Ver [Funcionalidades de IA](/pt/docs/ai/ai-features).

## Demo

- **`DEMO_MODE`** · predefinição: não definida\
  **Qualquer** valor ativa o modo demo só de leitura, mesmo `false` ou `0`. Para o desligar,
  remove a linha. Ver [Modo demo](/pt/docs/demo/demo-mode).
