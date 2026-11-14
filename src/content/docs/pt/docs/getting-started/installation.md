---
title: Instalar o OpenFishing
description: O que precisas, o ficheiro docker-compose, onde o executar, o que deverás ver e como atualizar.
---

O OpenFishing corre como um único contentor Docker num computador que é teu. Esta página leva-te
de uma máquina vazia até à tua própria instância a funcionar. Queres espreitar primeiro? A
[demo ao vivo](https://demo.openfishing.org) não precisa de instalação nem de registo.

## Antes de começar

Precisas de:

- **Um computador sempre ligado**, como um NAS, um mini PC ou um servidor doméstico.
- **Docker com Docker Compose** instalado nele. Em muitos NAS, o Docker é uma aplicação do
  centro de pacotes; em Linux, segue o [guia de instalação do Docker](https://docs.docker.com/engine/install/). No Synology chama-se Container Manager; no QNAP, Container Station.
- **Um processador de 64 bits Intel ou AMD (amd64).** A imagem só existe para amd64, por isso as
  máquinas com processador ARM não a conseguem executar. Para verificar, executa `uname -m` na
  máquina: `x86_64` significa que está tudo bem; `aarch64` ou `armv7l` significa uma máquina ARM.
  Sem terminal? Procura o processador do teu modelo de NAS na ficha técnica.

## Só queres experimentar?

Para uma vista rápida sem ficheiro compose, basta um comando:

```bash
docker run -d -p 3000:3000 \
  -e BASE_URL=http://192.168.1.50:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing
```

Troca `192.168.1.50` pelo endereço da tua máquina, para que as ligações e as etiquetas QR funcionem também nos teus outros dispositivos.

Assim o OpenFishing arranca sem início de sessão. Quando decidires ficar com ele, passa para o
ficheiro compose: guarda as tuas definições num só lugar.

## 1. Criar o ficheiro compose

Cria uma pasta chamada `openfishing` e guarda nela este ficheiro:

```yaml title="docker-compose.yml"
services:
  openfishing:
    image: ghcr.io/m1ndgames/openfishing
    container_name: openfishing
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - openfishing-db:/app/data
      - openfishing-uploads:/app/uploads
    environment:
      # Endereço onde o abres
      - BASE_URL=http://192.168.1.50:3000
      # O teu fuso horário
      - TZ=Europe/Berlin
      # Login: tira #, põe palavra-passe
      # - ADMIN_PASSWORD=

volumes:
  openfishing-db:
  openfishing-uploads:
```

**Altera estas linhas antes de arrancar:**

- `BASE_URL`: o endereço que vais escrever no navegador, com `http://` e a porta, por exemplo o
  do teu NAS. **É obrigatório:** sem ele, o OpenFishing assume HTTPS e cada gravação falha com
  «Cross-site POST form submissions are forbidden». Também vai para os códigos QR, por isso usa
  o endereço com que os outros dispositivos chegam à máquina.
  Dá à máquina um endereço fixo no router (uma *reserva DHCP*); caso contrário pode mudar e os
  códigos QR deixam de apontar para ela.
- `TZ`: o teu [fuso horário](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), para as horas das capturas não ficarem desviadas.
- `ADMIN_PASSWORD`: sem ela não há ecrã de início de sessão e qualquer pessoa na tua rede tem
  acesso total. Tira o `#` e junta a tua palavra-passe antes de outros ou a Internet chegarem à
  aplicação. O nome de utilizador é sempre `admin`.

## 2. Arrancar

**Usas uma aplicação Docker do NAS ou o Portainer?** Cria uma nova *stack* (ou *projeto*), cola
o ficheiro acima e implementa-a.

**Usas um terminal?** Liga-te à máquina (por exemplo por SSH), entra na pasta e executa:

```bash
docker compose up -d
```

O primeiro arranque demora um ou dois minutos enquanto o Docker descarrega a imagem.

## 3. Abrir

Abre o endereço que puseste em `BASE_URL`, por exemplo **`http://192.168.1.50:3000`**
(ou `http://localhost:3000` na própria máquina). Deverás ver a tua coleção de iscas vazia,
pronta para a primeira isca. Se definiste `ADMIN_PASSWORD`, inicia sessão primeiro como **`admin`**.

Se a página ainda não abrir, o primeiro arranque pode estar a decorrer: `docker compose logs openfishing`
mostra `Listening on` quando estiver pronto.

Já estás dentro. A seguir, [adiciona a tua primeira isca](/pt/docs/features/lures).

## Onde ficam os teus dados

- **Base de dados SQLite (iscas, locais, capturas, equipamento)**: caminho no contentor `/app/data`, volume `openfishing-db`
- **As tuas fotos**: caminho no contentor `/app/uploads`, volume `openfishing-uploads`

:::caution
Mantém os dois volumes. Um contentor iniciado sem eles perde tudo quando é removido. Para cópias
noutro lado, usa [Backup e restauração](/pt/docs/backup/backup-restore).
:::

## Atualizar

Faz primeiro um backup (nas **Definições**, ver [Backup e restauração](/pt/docs/backup/backup-restore)),
depois descarrega a nova imagem e reinicia:

```bash
docker compose pull
docker compose up -d
```

As migrações da base de dados correm automaticamente no arranque e os teus dados ficam nos
volumes. Numa aplicação Docker do NAS ou no Portainer, usa a ação *pull e reimplementar* (ou
*atualizar*) da stack.

Começaste com o comando único? Executa `docker pull ghcr.io/m1ndgames/openfishing`,
remove o contentor antigo (`docker rm -f <nome>`) e volta a executar o mesmo comando
`docker run`: os volumes com nome guardam os teus dados.

Queres escolher quando atualizar? Substitui a imagem por uma etiqueta de versão da
[página de versões](https://github.com/m1ndgames/OpenFishing/releases), como `ghcr.io/m1ndgames/openfishing:<version>`, e muda-a quando quiseres.
Mantém as duas máquinas na mesma versão ao mover uma cópia.

## Reverse proxy e HTTPS

Para aceder ao OpenFishing fora de casa, coloca-o atrás de um reverse proxy que trate do HTTPS e
define `BASE_URL` com o endereço público. Com o Caddy, esta é toda a configuração:

```text title="Caddyfile"
fishing.example.com {
  reverse_proxy localhost:3000
}
```

Com o nginx, encaminha os cabeçalhos de proxy habituais e permite envios do tamanho de uma foto:

```nginx title="nginx"
location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  client_max_body_size 100m;
}
```

Define primeiro `ADMIN_PASSWORD`: uma instância sem início de sessão nunca deve ficar exposta à Internet.

## Próximos passos

- Junta a tua primeira isca: [Iscas](/pt/docs/features/lures) mostra o que podes registar.
- Todas as definições (email, IA, limites de envio, modo demo) estão na
  [referência das variáveis de ambiente](/pt/docs/configuration/environment-variables).
- Para amigos e família: [Multiusuário e autenticação](/pt/docs/multi-user/authentication).
- Algo não funciona? Consulta [FAQ e resolução de problemas](/pt/docs/help/faq).
