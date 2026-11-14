---
title: FAQ e resolução de problemas
description: Soluções para problemas de instalação comuns (máquinas ARM, conflitos de porta, palavra-passe de admin esquecida) e respostas sobre volumes, atualizações, envios e início de sessão.
---

Os problemas aparecem com a mensagem que vês de facto, por isso pesquisar o texto exato do erro
costuma levar-te direto à solução.

Quando uma resposta diz `docker compose up -d`, num NAS podes reimplementar a stack na app dele.

## Instalação

### Gravar falha: «Cross-site POST form submissions are forbidden»

Falta `BASE_URL` ou começa por `https://` enquanto abres a aplicação por `http://` simples. Define-a com o endereço exato que abres, por exemplo `BASE_URL=http://192.168.1.50:3000`, e volta a executar `docker compose up -d`. Atrás de um proxy reverso, define `BASE_URL` como o endereço `https://` que se abre; isso basta. Ver [Variáveis de ambiente](/pt/docs/configuration/environment-variables#endereço-e-hora).

### O contentor não arranca: «exec format error»

A máquina tem um processador ARM (comum em NAS pequenos e computadores de placa única). A imagem
do OpenFishing só existe para **Intel ou AMD de 64 bits (amd64)**, por isso não consegue correr
aí. Verifica com `uname -m`: `x86_64` funciona, `aarch64` ou `armv7l` não. Ver
[Antes de começar](/pt/docs/getting-started/installation#antes-de-começar).

### «Port is already allocated» ou «address already in use»

Outro programa na máquina já usa a porta 3000. Muda o número da **esquerda** no ficheiro compose,
por exemplo `"8080:3000"`, volta a executar `docker compose up -d` e abre a aplicação na porta 8080.

### «docker compose» não é um comando

Instalações Docker mais antigas, incluindo alguns pacotes de NAS, usam a ferramenta separada `docker-compose`. Executa os mesmos comandos com hífen: `docker-compose up -d`, `docker-compose pull`.

### A página não carrega

- Verifica se o contentor está a correr: `docker ps` deve mostrar `openfishing`.
- Lê o registo à procura de erros: `docker logs openfishing`.
- A partir de outro dispositivo, usa o endereço de rede da máquina (por exemplo
  `http://192.168.1.50:3000`), não `localhost`.
- Funciona na máquina mas não no telemóvel? Permite a porta 3000 na firewall da máquina (num NAS,
  nas definições de segurança ou firewall).

### Preciso de volumes persistentes?

**Sim.** Sem eles, os dados e as fotos perdem-se quando o contentor é recriado. O ficheiro compose
em [Instalar o OpenFishing](/pt/docs/getting-started/installation) cria os dois.

## No dia a dia

### Como atualizo?

Faz primeiro um backup, depois `docker compose pull` e `docker compose up -d`. Ver
[Atualizar](/pt/docs/getting-started/installation#atualizar).

### Tenho de executar migrações da base de dados?

**Não.** As migrações **correm automaticamente no arranque**. Descarrega uma imagem mais recente
e reinicia: o esquema é atualizado por ti.

### Esqueci-me da palavra-passe de admin

Define um novo `ADMIN_PASSWORD` no ficheiro compose e executa `docker compose up -d`. A conta
`admin` é sincronizada com essa variável em cada arranque, por isso a nova palavra-passe funciona
logo. Os outros utilizadores podem repor a sua por email se
[o SMTP estiver configurado](/pt/docs/configuration/environment-variables).

### Há início de sessão por predefinição?

Não. O OpenFishing está **aberto** enquanto não definires `ADMIN_PASSWORD`. Ver
[Multiusuário e autenticação](/pt/docs/multi-user/authentication). Não exponhas uma instância
aberta à Internet.

### Porque é que o meu envio é rejeitado?

Os envios estão limitados por **`BODY_SIZE_LIMIT`** (predefinição ≈ 100 MB, ou seja `104857600`
bytes). Aumenta-o se precisares de fotos maiores e garante que um eventual reverse proxy também
permite esse tamanho (`client_max_body_size` no nginx).

### «Identificar pela foto» diz «Algo deu errado. Tente novamente.»

A IA não está configurada no teu servidor. O botão precisa de `LITELLM_URL` e de um modelo; vê
[Funcionalidades de IA](/pt/docs/ai/ai-features).

### «Quota de envio excedida»

O admin definiu um limite de espaço para a tua conta (**Quota (MB)** em **Definições → Admin**).
Apaga fotos de que não precisas ou pede ao admin para o aumentar.

### Como executo o OpenFishing atrás de um reverse proxy?

Termina o HTTPS no proxy, encaminha para a porta `3000` com os cabeçalhos de proxy habituais e
define `BASE_URL` com o endereço público, para que os [códigos QR](/pt/docs/features/qr-labels) e
os links de reposição fiquem corretos.
[Instalar o OpenFishing](/pt/docs/getting-started/installation#reverse-proxy-e-https) tem
exemplos para Caddy e nginx.

### O OpenFishing envia os meus dados para algum lado?

Os teus registos e fotos ficam no teu servidor. O tempo para o índice de mordida, os mosaicos do
mapa e as funcionalidades de IA opcionais contactam serviços externos; a
[Introdução](/pt/docs/getting-started/introduction#o-que-comunica-com-a-internet) indica exatamente quais. Os mosaicos do mapa podem vir do teu próprio servidor com [`MAP_TILE_URL`](/pt/docs/configuration/environment-variables#mapa).

### Não encontro «Criar link de partilha»

As ligações de partilha precisam de início de sessão. Define `ADMIN_PASSWORD` (vê [Multiutilizador e autenticação](/pt/docs/multi-user/authentication)) e
corre `docker compose up -d`; o botão aparece então em cada isca, local e captura.

## Cópias de segurança

### O restauro falha: «Incompatibilidade de esquema»

A cópia vem de outra versão do OpenFishing. [Atualiza](/pt/docs/getting-started/installation#atualizar) as duas instalações para a versão
mais recente, exporta uma cópia nova na antiga e restaura essa.

### «Esta é uma cópia pessoal» ou «Esta é uma cópia completa»

As cópias pessoais e completas restauram-se em sítios diferentes. Uma cópia pessoal, feita em **Definições → Backup e restauração**,
restaura-se aí. Uma cópia completa, feita pelo admin em **Definições → Admin**, só se restaura aí.

## Ajuda

### Onde obtenho ajuda ou reporto um erro?

Abre uma issue no [GitHub](https://github.com/m1ndgames/OpenFishing/issues).
