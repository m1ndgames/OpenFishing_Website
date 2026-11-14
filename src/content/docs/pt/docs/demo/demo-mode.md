---
title: "Modo demo"
description: "O que faz o DEMO_MODE (uma instância só de leitura, sem gravar) e como a demo pública o usa."
---

O **modo demo** deixa uma instância do OpenFishing **só de leitura**: pode-se ver tudo, mas não
mudar nada. A demo pública funciona assim.

## Ativar

```yaml title="docker-compose.yml"
    environment:
      - DEMO_MODE=1
```

**Qualquer valor o ativa, mesmo `false` ou `0`.** Para o desligar, apaga a linha e executa
`docker compose up -d`. Ver [Variáveis de ambiente](/pt/docs/configuration/environment-variables).

## O que faz

- **Nada pode ser gravado**: os visitantes veem tudo, mas não podem criar, editar nem eliminar.
- Um **aviso** («Modo demo») indica que é uma demo, e uma tentativa de gravar mostra uma mensagem curta a explicar porque não resultou.
- **Mudar de idioma continua a funcionar**, por isso a demo pode ser vista nos [9 idiomas](/pt/docs/features/languages).
- O **chatbot de IA** não responde; mostra «O chatbot de IA está desativado nesta demonstração.»

## A demo pública

A demo oficial em **[demo.openfishing.org](https://demo.openfishing.org)** corre neste modo. Está
cheia de dados de exemplo e podes explorá-la à vontade sem mudar nada.
