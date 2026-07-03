---
title: Wielu użytkowników i uwierzytelnianie
description: Włącz logowanie, aby hostować znajomych i rodzinę, z izolacją na użytkownika, limitami, panelem administracyjnym i resetem hasła przez SMTP.
---

Domyślnie OpenFishing działa w trybie **jednodostępowym i w pełni otwartym** — bez logowania. Ustaw zmienną
środowiskową **`ADMIN_PASSWORD`**, aby włączyć **tryb wielu użytkowników**.

## Włączanie logowania

Ustaw `ADMIN_PASSWORD` (zobacz [Zmienne środowiskowe](/pl/docs/configuration/environment-variables)):

```yaml
environment:
  - ADMIN_PASSWORD=change_me
```

Po ustawieniu pojawia się ekran logowania. Użytkownicy logują się swoim **adresem e-mail/nazwą użytkownika +
hasłem**.

:::note
`AUTH_PASSWORD` to **przestarzała** zapasowa nazwa dla `ADMIN_PASSWORD`. Użyj `ADMIN_PASSWORD`.
:::

## Konto admin

- Konto **`admin`** istnieje zawsze, gdy uwierzytelnianie jest włączone.
- Jego nazwa użytkownika to zawsze `admin`; jego hasło to to, na które ustawiono `ADMIN_PASSWORD`.
- Jest **ponownie synchronizowane ze zmiennej środowiskowej przy każdym uruchomieniu**, więc zmiana zmiennej i
  ponowne uruchomienie aktualizuje hasło.

## Panel administracyjny

Administratorzy otrzymują panel pod **`/settings/admin`** do zarządzania instancją:

- **Użytkownicy** — tworzenie, włączanie/wyłączanie i zarządzanie kontami.
- **Limity pamięci** — ograniczanie, ile każdy użytkownik może przesłać.
- **Przełącznik chatbota** — włączanie/wyłączanie [funkcji AI](/pl/docs/ai/ai-features) na użytkownika.
- **Tokeny API** — zarządzanie tokenami Bearer [API REST](/pl/docs/api/rest-api).

## Izolacja danych na użytkownika

Przynęty, łowiska, połowy i sprzęt każdego użytkownika są **izolowane** — użytkownicy widzą tylko własne dane.

## Reset hasła (SMTP)

Jeśli skonfigurujesz SMTP (co najmniej `SMTP_HOST` i `SMTP_FROM`), użytkownicy mogą resetować zapomniane hasła
przez e-mail. Bez skonfigurowanego SMTP opcja resetu jest ukryta. Zobacz
[zmienne SMTP](/pl/docs/configuration/environment-variables).

## Limity pamięci na użytkownika

Administratorzy mogą ustawić **limity pamięci** na użytkownika z panelu administracyjnego, aby żaden pojedynczy
użytkownik nie mógł zapełnić dysku przesłanymi plikami.
