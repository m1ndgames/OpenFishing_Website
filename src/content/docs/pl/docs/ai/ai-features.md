---
title: Funkcje AI
description: "Włącz opcjonalnego chatbota Kumpel Wędkarz i rozpoznawanie ze zdjęć dzięki proxy LiteLLM obok OpenFishing."
---

OpenFishing ma dwie **opcjonalne** funkcje AI: chatbota **Kumpel Wędkarz** i **Rozpoznaj ze zdjęcia**. Obie działają przez
[LiteLLM](https://litellm.ai/), małe proxy uruchamiane obok OpenFishing, które przekazuje zapytania
do wybranego dostawcy AI. Twój klucz API zostaje na Twoim serwerze.

## Konfiguracja

1. W folderze z plikiem `docker-compose.yml` utwórz `litellm.config.yaml`:

   ```yaml title="litellm.config.yaml"
   model_list:
     - model_name: claude-sonnet
       litellm_params:
         model: anthropic/claude-sonnet-4-6
         api_key: os.environ/ANTHROPIC_API_KEY
   ```

2. Wpisz klucz API swojego dostawcy do pliku `.env` w tym samym folderze:

   ```bash title=".env"
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Zastąp swój `docker-compose.yml` tą wersją. To plik instalacyjny plus linie AI i usługa `litellm`;
   zachowaj własne linie z adresem, strefą czasową i hasłem.

   ```yaml title="docker-compose.yml" wrap=false
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
         # Adres, pod którym go otwierasz
         - BASE_URL=http://192.168.1.50:3000
         # Twoja strefa czasowa
         - TZ=Europe/Berlin
         # Logowanie: usuń # i dodaj hasło
         # - ADMIN_PASSWORD=
         - CHATBOT=true
         - LITELLM_URL=http://litellm:4000
         - LITELLM_MODEL=claude-sonnet
       depends_on:
         - litellm

     litellm:
       image: ghcr.io/berriai/litellm:main-latest
       command: ["--config", "/config.yaml"]
       volumes:
         - ./litellm.config.yaml:/config.yaml
       env_file:
         - .env

   volumes:
     openfishing-db:
     openfishing-uploads:
   ```

4. Uruchom ponownie `docker compose up -d` albo wdróż stos ponownie w aplikacji NAS.

Wolisz OpenAI? W `litellm.config.yaml` użyj `model: openai/gpt-4o` z
`api_key: os.environ/OPENAI_API_KEY` i wpisz `OPENAI_API_KEY` do `.env`. `LITELLM_MODEL` musi pasować do
`model_name` w pliku.

## Kumpel Wędkarz

Z `CHATBOT=true` przycisk czatu otwiera **Kumpel Wędkarz**. Odpowiada na pytania o Twoje przynęty, łowiska,
połowy i sprzęt oraz zna bieżącą pogodę, gdy pytasz o miejsce. Z logowaniem admin może go wyłączyć
dla każdej osoby w **Ustawienia → Administracja** (**Chatbot: wł.**).

## Rozpoznaj ze zdjęcia

Gdy dodajesz nowy połów lub przynętę, przycisk **Rozpoznaj ze zdjęcia** pojawia się, gdy jest zdjęcie. Podpowiada
gatunek albo dane przynęty. Wymaga `LITELLM_URL` i korzysta z `LITELLM_VISION_MODEL`, jeśli go
ustawisz (model, który czyta obrazy), w przeciwnym razie z `LITELLM_MODEL`. Nie wymaga `CHATBOT`.
Bez skonfigurowanego AI przycisk i tak się pojawia, ale odpowiada „Coś poszło nie tak. Spróbuj ponownie.”

:::note
Bez tych ustawień nie ma chatbota, a **Rozpoznaj ze zdjęcia** nie może odpowiedzieć; reszta działa tak samo.
Wszystkie ustawienia znajdziesz w [Zmiennych środowiskowych](/pl/docs/configuration/environment-variables).
:::
