---
title: FAQ / Resolução de problemas
description: Volumes persistentes, migrações automáticas, notas sobre proxy reverso e o limite de tamanho de upload.
---

## Preciso de volumes persistentes?

**Sim.** Tanto a base de dados SQLite (`/app/data`) como o diretório de uploads (`/app/uploads`) têm de estar em
volumes persistentes. Sem eles, os teus dados e fotos perdem-se quando o contentor é recriado. Consulta
[Instalação](/pt/docs/getting-started/installation).

## Tenho de executar migrações da base de dados?

**Não.** Em produção, as **migrações da base de dados são executadas automaticamente no arranque**. Basta obter
uma imagem mais recente e reiniciar — o esquema é atualizado por ti.

## Como executo o OpenFishing atrás de um proxy reverso?

- Termina o TLS no teu proxy (nginx, Caddy, Traefik…) e encaminha para a porta `3000` do contentor.
- Define **`BASE_URL`** com o teu URL HTTPS público para que os [códigos QR](/pt/docs/features/qr-labels) e os
  links de reposição de palavra-passe estejam corretos.
- **Encaminha os cabeçalhos de proxy padrão** (host e forwarded-for/proto) para que a aplicação veja o URL
  externo correto.

## Porque é que o meu upload está a ser rejeitado?

Os uploads são limitados por **`BODY_SIZE_LIMIT`** (predefinição ≈ 100 MB, ou seja, `104857600` bytes).
Aumenta-o se precisares de fotos maiores, e certifica-te de que qualquer proxy reverso à frente também permite
o tamanho de corpo maior.

## Existe um início de sessão por predefinição?

Não — o OpenFishing é **aberto** a menos que definas `ADMIN_PASSWORD`. Consulta
[Multiutilizador e autenticação](/pt/docs/multi-user/authentication). Não exponhas uma instância aberta à
Internet pública.

## Onde posso obter ajuda ou reportar um bug?

Abre uma issue no [GitHub](https://github.com/m1ndgames/OpenFishing/issues).
