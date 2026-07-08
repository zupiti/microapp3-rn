# Microapp 3 RN

Feature module React Native consumido pelo `microapp-main-app-rn`.

## O Que Exporta

- `Microapp3Screen`: tela com botoes e contador.
- Usa `microfront2-rn` e `shared-rn`.

## Uso Pelo Main App

O fluxo recomendado fica centralizado no main repo:

```sh
cd ../microapp-main-app-rn
yarn setup:microapps:local
yarn start
```

Para voltar as dependencias para Git refs:

```sh
cd ../microapp-main-app-rn
yarn point-local
```

## Desenvolvimento Da Lib

Rode comandos da lib apenas quando estiver trabalhando nela diretamente:

```sh
yarn typecheck
yarn prepare
```

Nao rode `yarn install` neste pacote no fluxo normal. As dependencias devem ser resolvidas pelo main app.

## Example Standalone

```sh
cd ../microapp-main-app-rn
yarn example:microapp3
```

iOS:

```sh
yarn example:microapp3:ios
```

Android:

```sh
yarn example:microapp3:android
```
