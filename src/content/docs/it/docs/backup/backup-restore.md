---
title: "Backup e ripristino"
description: "Fai il backup della collezione in un unico ZIP e ripristinalo, sulla stessa macchina o su una nuova."
---

OpenFishing salva tutto ciò che hai registrato, foto comprese, in **un unico file ZIP** da
scaricare. Tienine una copia in un posto diverso dalla macchina su cui gira OpenFishing.

## Fare un backup

1. Apri **Impostazioni → Backup e ripristino**.
2. In **Esporta backup**, scegli **Esporta**.

Lo ZIP contiene esche, spot, catture e attrezzatura con le loro foto. Con l'accesso attivo, ognuno
salva così solo il proprio account.

:::caution
Un ripristino non si può annullare. Esporta prima un backup recente.
:::

## Ripristinare un backup

1. Apri **Impostazioni → Backup e ripristino**.
2. In **Importa backup**, scegli **Scegli file** e seleziona lo ZIP.
3. Spunta la casella che conferma la sostituzione dei dati attuali.
4. Scegli **Importa e sostituisci**.

Tutto il contenuto del tuo account viene sostituito da quello del backup. OpenFishing controlla
prima il formato del backup e non cambia nulla se non corrisponde.

Se funziona, vedi **Importazione riuscita** con il numero di esche, spot e catture ripristinati.

## Backup dell'intera istanza (admin)

Con l'accesso attivo, l'admin salva e ripristina tutti gli account insieme in **Impostazioni → Admin**:

- **Esporta tutto** scarica tutti gli account e i loro dati in un unico ZIP.
- **Ripristina backup completo** sostituisce tutti i dati e gli account con un backup completo.
  Tutti vengono disconnessi e la password admin torna a essere quella di `ADMIN_PASSWORD`.

Per ripristinare, spunta la conferma e seleziona **Ripristina tutto e sostituisci**.

## Passare a una nuova macchina

1. Sulla vecchia macchina, [aggiorna OpenFishing](/it/docs/getting-started/installation#aggiornare) all'ultima versione, poi esporta un backup
   recente. Annota il **Formato backup** mostrato in **Impostazioni**.
2. [Installa OpenFishing](/it/docs/getting-started/installation) sulla nuova macchina. Il suo **Formato backup** in **Impostazioni** deve corrispondere a quello della vecchia macchina.
3. Aprilo e ripristina: in **Impostazioni → Backup e ripristino** se non hai l'accesso, oppure con
   un backup completo in **Impostazioni → Admin → Ripristina backup completo** se lo usano più persone.
4. Controlla esche e foto prima di spegnere la vecchia macchina.

## Cosa c'è nello ZIP

- `backup.json`: i tuoi dati.
- `uploads/`: le foto.

È un normale ZIP, quindi puoi aprirlo per controllarlo.

## Backup e volumi

I backup non sostituiscono i [volumi](/it/docs/getting-started/installation) che contengono il database attivo e le foto. Tieni
entrambi ed esporta un backup prima di grandi cambiamenti come un aggiornamento.
