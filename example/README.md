# Microapp 3 Example

App React Native standalone para testar `microapp3-rn` fora do main app.

## Requisitos

- Node >= 18
- Yarn Classic 1.x
- Ambiente React Native configurado para iOS e/ou Android
- CocoaPods para iOS

## Setup Recomendado

O fluxo principal fica centralizado no main repo:

```sh
cd ../../microapp-main-app-rn
yarn setup:microapps:local
```

Esse comando prepara o grafo local, instala dependencias pelo main repo e valida os links dos microapps.

## Rodar Pelo Main Repo

```sh
cd ../../microapp-main-app-rn
yarn example:microapp3
```

iOS:

```sh
cd ../../microapp-main-app-rn
yarn example:microapp3:ios
```

Android:

```sh
cd ../../microapp-main-app-rn
yarn example:microapp3:android
```

## Rodar Diretamente

Use apenas quando precisar debugar o example isolado:

```sh
yarn start
yarn ios
yarn android
```

Para iOS, instale pods dentro de `ios/` quando necessario:

```sh
cd ios
bundle exec pod install
cd ..
```

## Pacotes Consumidos

- `microapp3-rn`
- `shared-rn`
