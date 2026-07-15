# Microapp 3 RN

Feature module React Native consumido pelo `microapp-main-app-rn`.

## Arquitetura interna

Camadas obrigatórias (fluxo unidirecional):

```text
entities → services → repositories → hooks → ui/screens → ui/components
```

```text
src/
├── entities/       # ContadorSessao
├── services/       # ContadorService (in-memory)
├── repositories/   # ContadorRepository
├── hooks/          # useContador
├── utils/
├── ui/
│   ├── screens/    # Microapp3Screen
│   ├── components/
│   └── styles/
└── index.tsx
```

**Hooks:** uma responsabilidade; só repository; screens sem `useEffect` de dados. Fronteiras no `.eslintrc.js`.

Detalhes canônicos: `microapp-main-app-rn/rules-project/rules.md` e `IMPLEMENTACAO.md` §6.2.1.

## O Que Exporta

- `Microapp3Screen`: botões e contador (via hook + repository).
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
