---
title: Wielu użytkowników i uwierzytelnianie
description: Włącz logowanie, by gościć znajomych i rodzinę, twórz konta, ustawiaj limity miejsca i pomagaj przy zapomnianych hasłach.
---

Domyślnie OpenFishing ma **jedną wspólną kolekcję i brak logowania**: każdy, kto otworzy jego
adres, może z niego korzystać. W zaufanej sieci domowej to wystarczy. Aby gościć znajomych
i rodzinę albo mieć dostęp do OpenFishing z internetu, włącz logowanie.

## Włączanie logowania

Plik compose z [Instalacja OpenFishing](/pl/docs/getting-started/installation) ma już tę linię,
wyłączoną znakiem `#`:

```yaml title="docker-compose.yml"
    environment:
      # Logowanie: usuń # i dodaj hasło
      # - ADMIN_PASSWORD=
```

Usuń `# ` przed `- ADMIN_PASSWORD=`, wpisz własne hasło zaraz po `=` i uruchom
`docker compose up -d`. Pojawi się ekran logowania: zaloguj się nazwą użytkownika **admin**
i tym hasłem.

## Konto administratora

- Nazwa użytkownika to zawsze `admin`.
- Hasło to wartość `ADMIN_PASSWORD`. OpenFishing odczytuje ją przy każdym starcie: aby je
  zmienić, zmień linię i ponownie uruchom `docker compose up -d`.

## Dodawanie członka rodziny

1. Zaloguj się jako `admin` i otwórz **Ustawienia → Administracja**.
2. W sekcji **Utwórz użytkownika** wypełnij **E-mail**, **Nazwa użytkownika** i **Hasło**.
3. Zostaw **Limit (MB)** pusty, by nie ograniczać przesyłania, albo wpisz liczbę.
4. Wybierz **Utwórz**.

Prześlij tej osobie adres, nazwę użytkownika i hasło. Loguje się e-mailem lub nazwą użytkownika
i może ustawić nowe hasło w **Ustawienia → Moje konto → Zmień hasło**.

## Kto co widzi

Każde konto ma własne przynęty, łowiska, połowy i sprzęt. Nikt nie widzi danych innych osób.

## Zarządzanie kontami

**Ustawienia → Administracja** pokazuje wszystkie konta. Przy każdym możesz zmienić nazwę użytkownika i
e-mail, limit miejsca oraz wpisać nowe hasło w polu **Zresetuj hasło**, a potem wybrać **Zapisz**. Możesz też
włączyć lub wyłączyć [chatbota AI](/pl/docs/ai/ai-features), **wygenerować nowy token** dla [REST API](/pl/docs/api/rest-api),
**Wyłączyć** konto lub je **Usunąć**. Usunięcie kasuje konto i wszystkie jego dane na zawsze.

## Zapomniane hasła

- **Członek rodziny:** admin wpisuje nowe hasło w polu **Zresetuj hasło** tego konta w **Ustawienia → Administracja** i wybiera **Zapisz**.
  Gdy poczta jest skonfigurowana (co najmniej `SMTP_HOST` i `SMTP_FROM`, zobacz
  [Zmienne środowiskowe](/pl/docs/configuration/environment-variables)), ekran logowania oferuje
  też link e-mailem.
- **Administrator:** zmień `ADMIN_PASSWORD` i uruchom `docker compose up -d`.
