---
title: "Backup e restauro"
description: "Guarda a tua coleção num único ZIP e restaura-a, na mesma máquina ou numa nova."
---

O OpenFishing guarda tudo o que registaste, fotos incluídas, num **único ficheiro ZIP** que
descarregas. Mantém uma cópia num sítio que não seja a máquina onde o OpenFishing corre.

## Fazer um backup

1. Abre **Definições → Backup e restauração**.
2. Em **Exportar cópia de segurança**, escolhe **Exportar**.

O ZIP contém as tuas iscas, locais, capturas e equipamento com as fotos. Com início de sessão,
cada pessoa guarda assim só a sua própria conta.

:::caution
Um restauro não pode ser desfeito. Exporta antes um backup recente.
:::

## Restaurar um backup

1. Abre **Definições → Backup e restauração**.
2. Em **Importar cópia de segurança**, escolhe **Escolher ficheiro** e seleciona o ZIP.
3. Marca a caixa que confirma que os teus dados atuais vão ser substituídos.
4. Escolhe **Importar e substituir**.

Tudo na tua conta é substituído pelo conteúdo do backup. O OpenFishing verifica primeiro o
formato do backup e não muda nada se não corresponder.

Se funcionar, vês **Importação bem-sucedida** com o número de iscas, locais e capturas restaurados.

## Backup de toda a instância (admin)

Com início de sessão, o admin guarda e restaura todas as contas de uma vez em **Definições → Admin**:

- **Exportar tudo** descarrega todas as contas e os seus dados num único ZIP.
- **Restaurar cópia completa** substitui todos os dados e contas por um backup completo. Todos
  terminam a sessão, e a palavra-passe do admin volta a vir de `ADMIN_PASSWORD`.

Para restaurar, marca a confirmação e seleciona **Restaurar tudo e substituir**.

## Mudar para uma máquina nova

1. Na máquina antiga, [atualiza o OpenFishing](/pt/docs/getting-started/installation#atualizar) para a versão mais recente e exporta uma cópia
   nova. Aponta o **Formato da cópia** mostrado em **Definições**.
2. [Instala o OpenFishing](/pt/docs/getting-started/installation) na máquina nova. O seu **Formato da cópia** em **Definições** tem de ser igual ao da máquina antiga.
3. Abre-o e restaura: em **Definições → Backup e restauração** se não tens início de sessão, ou com
   um backup completo em **Definições → Admin → Restaurar cópia completa** se várias pessoas o usam.
4. Verifica as iscas e as fotos antes de desligar a máquina antiga.

## O que está no ZIP

- `backup.json`: os teus registos.
- `uploads/`: as fotos.

É um ZIP normal, por isso podes abri-lo para o verificar.

## Backups e volumes

Os backups não substituem os [volumes](/pt/docs/getting-started/installation) que guardam a base de dados ativa e as fotos.
Mantém ambos e exporta um backup antes de grandes mudanças, como uma atualização.
