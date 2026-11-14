---
title: "Kopia zapasowa i przywracanie"
description: "Zapisz kolekcję jako jeden plik ZIP i przywróć ją, na tej samej maszynie albo na nowej."
---

OpenFishing zapisuje wszystko, co zarejestrowałeś, razem ze zdjęciami, w **jednym pliku ZIP** do
pobrania. Trzymaj kopię gdzie indziej niż na maszynie, na której działa OpenFishing.

## Tworzenie kopii

1. Otwórz **Ustawienia → Kopia zapasowa i przywracanie**.
2. W sekcji **Eksportuj kopię zapasową** wybierz **Eksportuj**.

ZIP zawiera przynęty, łowiska, połowy i sprzęt wraz ze zdjęciami. Z logowaniem każdy zapisuje
w ten sposób tylko własne konto.

:::caution
Przywracania nie da się cofnąć. Najpierw wyeksportuj świeżą kopię.
:::

## Przywracanie kopii

1. Otwórz **Ustawienia → Kopia zapasowa i przywracanie**.
2. W sekcji **Importuj kopię zapasową** wybierz **Wybierz plik** i wskaż ZIP.
3. Zaznacz pole potwierdzające, że obecne dane zostaną zastąpione.
4. Wybierz **Importuj i zastąp**.

Cała zawartość konta zostaje zastąpiona zawartością kopii. OpenFishing najpierw sprawdza format
kopii i niczego nie zmienia, jeśli nie pasuje.

Gdy się uda, zobaczysz **Import zakończony sukcesem** z liczbą przywróconych przynęt, łowisk i połowów.

## Kopia całej instancji (administrator)

Z logowaniem administrator zapisuje i przywraca wszystkie konta naraz w **Ustawienia → Administracja**:

- **Eksportuj wszystko** pobiera wszystkie konta i ich dane jako jeden ZIP.
- **Przywróć pełną kopię** zastępuje wszystkie dane i konta pełną kopią. Wszyscy zostają
  wylogowani, a hasło administratora znów pochodzi z `ADMIN_PASSWORD`.

Aby przywrócić, zaznacz potwierdzenie i wybierz **Przywróć wszystko i zastąp**.

## Przeprowadzka na nową maszynę

1. Na starej maszynie [zaktualizuj OpenFishing](/pl/docs/getting-started/installation#aktualizacja) do najnowszej wersji, a potem wyeksportuj świeżą
   kopię. Zapisz **Format kopii** widoczny w **Ustawienia**.
2. [Zainstaluj OpenFishing](/pl/docs/getting-started/installation) na nowej maszynie. Jego **Format kopii** w **Ustawienia** musi być taki sam jak na starej maszynie.
3. Otwórz go i przywróć: w **Ustawienia → Kopia zapasowa i przywracanie**, jeśli nie masz
   logowania, albo pełną kopią w **Ustawienia → Administracja → Przywróć pełną kopię**, jeśli
   korzysta z niego kilka osób.
4. Sprawdź przynęty i zdjęcia, zanim wyłączysz starą maszynę.

## Co jest w pliku ZIP

- `backup.json`: Twoje wpisy.
- `uploads/`: zdjęcia.

To zwykły ZIP, więc możesz go otworzyć i sprawdzić.

## Kopie i wolumeny

Kopie nie zastępują [wolumenów](/pl/docs/getting-started/installation), w których leży działająca baza danych i zdjęcia.
Zachowaj jedno i drugie, a przed dużymi zmianami, np. aktualizacją, wyeksportuj kopię.
