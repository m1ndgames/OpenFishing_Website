---
title: Modo demo
description: O que o DEMO_MODE faz — uma instância só de leitura com as escritas bloqueadas — e como a demo pública o usa.
---

O **modo demo** torna uma instância do OpenFishing **só de leitura**. Define a variável de ambiente
**`DEMO_MODE`** com qualquer valor para o ativar (consulta
[Variáveis de ambiente](/pt/docs/configuration/environment-variables)).

## O que faz

- **Todas as escritas estão bloqueadas** — os visitantes podem navegar por tudo mas não podem criar, editar ou
  eliminar.
- Um **banner** indica que a instância é uma demo, e tentar escrever mostra um **toast** a explicar que as
  escritas estão desativadas.
- **A mudança de idioma continua a funcionar**, para que os visitantes possam ver a demo em qualquer um dos
  [9 idiomas](/pt/docs/features/languages).

## A demo pública

A demo oficial em **[demo.openfishing.org](https://demo.openfishing.org)** corre neste modo. É uma instância
totalmente preenchida que podes explorar livremente sem afetar quaisquer dados.

```yaml
environment:
  - DEMO_MODE=1
```
