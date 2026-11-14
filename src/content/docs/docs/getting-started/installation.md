---
title: Install OpenFishing
description: What you need, the docker-compose file, where to run it, what you should see, and how to update.
---

OpenFishing runs as one Docker container on a computer you own. This page takes you from an
empty machine to your own running instance. Want to look around first? The
[live demo](https://demo.openfishing.org) needs no install and no signup.

## Before you start

You need:

- **A computer that stays on**, such as a NAS, a mini PC or a home server.
- **Docker with Docker Compose** installed on it. On many NAS systems Docker is an app in the
  package center; on Linux, follow [Docker's install guide](https://docs.docker.com/engine/install/). On Synology it's called Container Manager, on QNAP Container Station.
- **A 64-bit Intel or AMD processor (amd64).** The image is built for amd64 only, so ARM-based
  machines can't run it. To check, run `uname -m` on the machine: `x86_64` means you're set;
  `aarch64` or `armv7l` means it's an ARM machine.
  No terminal? Look up your NAS model's processor on the maker's spec sheet.

## Just trying it?

For a quick look without a compose file, one command does it:

```bash
docker run -d -p 3000:3000 \
  -e BASE_URL=http://192.168.1.50:3000 \
  -v openfishing-db:/app/data \
  -v openfishing-uploads:/app/uploads \
  ghcr.io/m1ndgames/openfishing
```

Replace `192.168.1.50` with your machine's address, so links and QR labels work on your other devices too.

This starts OpenFishing without login. When you decide to keep it, switch to the compose file:
it keeps your settings in one place.

## 1. Create the compose file

Create a folder called `openfishing` and save this file in it:

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
      # Address you open it at
      - BASE_URL=http://192.168.1.50:3000
      # Your time zone
      - TZ=Europe/Berlin
      # Login: remove #, add a password
      # - ADMIN_PASSWORD=

volumes:
  openfishing-db:
  openfishing-uploads:
```

**Change these lines before you start it:**

- `BASE_URL`: the address you'll type in the browser, with `http://` and the port, for example
  your NAS's address. **It is required:** without it, OpenFishing assumes HTTPS and every save
  fails with "Cross-site POST form submissions are forbidden". It also goes into QR codes, so
  use the address other devices reach the machine at.
  Give the machine a fixed address in your router (a *DHCP reservation*), or the address can
  change and your QR codes stop pointing at it.
- `TZ`: your [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), so catch times aren't shifted.
- `ADMIN_PASSWORD`: without it there is no login screen and anyone on your network has full
  access. Remove the `#` and add your own password before other people or the internet can
  reach the app. The username is always `admin`.

## 2. Start it

**Using a NAS Docker app or Portainer?** Create a new *stack* (or *project*), paste the file
above and deploy it.

**Using a terminal?** Connect to the machine (for example with SSH), go to the folder and run:

```bash
docker compose up -d
```

The first start takes a minute or two while Docker downloads the image.

## 3. Open it

Open the address you put in `BASE_URL`, for example **`http://192.168.1.50:3000`**
(or `http://localhost:3000` on the machine itself). You should see your empty lure collection,
ready for the first lure. If you set `ADMIN_PASSWORD`, log in as **`admin`** first.

If the page doesn't load yet, the first start may still be running: `docker compose logs openfishing`
shows `Listening on` when it's ready.

You're in. Next, [add your first lure](/docs/features/lures).

## Where your data lives

- **SQLite database (lures, spots, catches, tackle)**: container path `/app/data`, volume `openfishing-db`
- **Your photos**: container path `/app/uploads`, volume `openfishing-uploads`

:::caution
Keep both volumes. A container started without them loses everything when it is removed.
For copies elsewhere, use [Backup & restore](/docs/backup/backup-restore).
:::

## Updating

Take a backup first (in **Settings**, see [Backup & restore](/docs/backup/backup-restore)), then pull the new image and restart:

```bash
docker compose pull
docker compose up -d
```

Database migrations run automatically on startup, and your data stays in the volumes. In a NAS
Docker app or Portainer, use the stack's *pull and redeploy* (or *update*) action.

Started with the one-liner? Run `docker pull ghcr.io/m1ndgames/openfishing`, remove the
old container (`docker rm -f <name>`) and run the same `docker run` command again: the named
volumes keep your data.

Want to choose when you update? Replace the image with a version tag from the
[releases page](https://github.com/m1ndgames/OpenFishing/releases), such as `ghcr.io/m1ndgames/openfishing:<version>`, and change it when you're
ready. Keep both machines on the same version when you move a backup.

## Reverse proxy and HTTPS

To reach OpenFishing from outside your home, put it behind a reverse proxy that handles HTTPS,
and set `BASE_URL` to the public address. With Caddy, this is the whole configuration:

```text title="Caddyfile"
fishing.example.com {
  reverse_proxy localhost:3000
}
```

With nginx, forward the standard proxy headers and allow photo-sized uploads:

```nginx title="nginx"
location / {
  proxy_pass http://localhost:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  client_max_body_size 100m;
}
```

Set `ADMIN_PASSWORD` before you do this: an instance without login should never face the
internet.

## Next steps

- Add your first lure: [Lures](/docs/features/lures) shows what you can record.
- Every setting (email, AI, upload limits, demo mode) is in the
  [Environment variables reference](/docs/configuration/environment-variables).
- Hosting friends and family: [Multi-user & authentication](/docs/multi-user/authentication).
- Something not working? See [FAQ & troubleshooting](/docs/help/faq).
