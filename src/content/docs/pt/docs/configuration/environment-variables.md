---
title: Variáveis de ambiente
description: Referência completa de todas as variáveis de ambiente do OpenFishing, com valores predefinidos e descrições.
---

O OpenFishing é configurado inteiramente através de variáveis de ambiente. Cada variável é opcional exceto onde
indicado; as variáveis não definidas recorrem às predefinições abaixo.

## Tabela de referência

| Variável | Predefinição | Descrição |
|---|---|---|
| `DATABASE_URL` | `local.db` | Caminho para o ficheiro da base de dados SQLite. No Docker, aponta-o para o teu volume de dados, p. ex. `/app/data/openfishing.db`. |
| `UPLOAD_PATH` | `./uploads` | Diretório para fotos de iscas/pontos/capturas. **Monta um volume** aqui (p. ex. `/app/uploads`). |
| `BASE_URL` | `http://localhost:5173` | URL base pública, usada para construir os links de código QR e de reposição de palavra-passe. Define-a com o teu URL HTTPS real atrás de um proxy reverso. |
| `ADMIN_PASSWORD` | _(não definido)_ | Define para **ativar o início de sessão multiutilizador**. É a palavra-passe da conta `admin` (o nome de utilizador é sempre `admin`, ressincronizado em cada arranque). Não definido = instância de inquilino único totalmente aberta. |
| `AUTH_PASSWORD` | _(não definido)_ | Nome alternativo **descontinuado** para `ADMIN_PASSWORD`. Prefere `ADMIN_PASSWORD`. |
| `SMTP_HOST` | _(não definido)_ | Nome de host do servidor SMTP para os e-mails de "palavra-passe esquecida". |
| `SMTP_PORT` | _(não definido)_ | Porta do servidor SMTP. |
| `SMTP_SECURE` | _(não definido)_ | Usar TLS para a ligação SMTP. |
| `SMTP_USER` | _(não definido)_ | Nome de utilizador SMTP. |
| `SMTP_PASS` | _(não definido)_ | Palavra-passe SMTP. |
| `SMTP_FROM` | _(não definido)_ | O endereço `From:` do correio de saída. |
| `DEMO_MODE` | _(não definido)_ | Qualquer valor = **modo demo só de leitura** (todas as escritas bloqueadas). |
| `CHATBOT` | _(não definido)_ | Qualquer valor verdadeiro ativa o **chatbot de IA** (requer as variáveis LiteLLM). |
| `LITELLM_URL` | _(não definido)_ | URL base do teu proxy LiteLLM, p. ex. `http://litellm:4000`. |
| `LITELLM_MODEL` | _(não definido)_ | Nome de modelo correspondente a uma entrada de `litellm.config.yaml`. |
| `LITELLM_VISION_MODEL` | _(não definido)_ | Modelo com capacidade de visão opcional para identificação de peixe/isca. Recorre a `LITELLM_MODEL`. |
| `BODY_SIZE_LIMIT` | `104857600` | Tamanho máximo de upload em bytes (predefinição ≈ 100 MB). |

:::note
A funcionalidade SMTP de "palavra-passe esquecida" só aparece quando pelo menos `SMTP_HOST` **e** `SMTP_FROM`
estão definidos. Sem eles, a opção de reposição fica oculta.
:::

## Notas sobre as predefinições

As predefinições acima são as predefinições integradas no código da aplicação. Num contentor, normalmente vais
substituir os caminhos para apontar para volumes montados:

```bash
DATABASE_URL=/app/data/openfishing.db
UPLOAD_PATH=/app/uploads
```

## Agrupadas por finalidade

- **Armazenamento:** `DATABASE_URL`, `UPLOAD_PATH`, `BODY_SIZE_LIMIT`
- **Rede / links:** `BASE_URL`
- **Autenticação:** `ADMIN_PASSWORD` (`AUTH_PASSWORD` descontinuado)
- **E-mail / reposição de palavra-passe:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- **Funcionalidades de IA:** `CHATBOT`, `LITELLM_URL`, `LITELLM_MODEL`, `LITELLM_VISION_MODEL`
- **Demo:** `DEMO_MODE`

Consulta [Multiutilizador e autenticação](/pt/docs/multi-user/authentication),
[Funcionalidades de IA](/pt/docs/ai/ai-features) e [Modo demo](/pt/docs/demo/demo-mode) para veres como estes
grupos se encaixam.
