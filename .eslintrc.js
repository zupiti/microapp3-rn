/**
 * Lint boundaries for feature modules (same rules as eleicoes-module).
 *
 * Flow:
 *   entities → services → repositories → hooks → ui/screens → ui/components
 *
 * Each layer may only import leftward. Entities must be imported via barrel
 * (`../entities`), never the individual `*_entity.ts` file.
 *
 * Hook guidelines (enforced below + by convention):
 * - One responsibility per hook (`use-<dominio>-<responsabilidade>.ts`).
 * - Call repositories only — never services.
 * - Own loading/error/data state and side effects (`useEffect`).
 * - Screens stay thin: no `useEffect` for data; no service/repository calls.
 * - Guard async races (`ativo` / AbortController) on id/unmount changes.
 * - Compose hub state via Context Provider when several screens share it.
 */
const ENTITIES_BARREL_RULE = {
  group: ['**/entities/*_entity', '**/entities/*_entity.ts'],
  message:
    'Importe entidades via barrel "../entities", nunca o ficheiro individual `*_entity.ts`.',
};

module.exports = {
  rules: {
    'max-lines': [
      'error',
      {max: 400, skipBlankLines: true, skipComments: true},
    ],
    'no-restricted-imports': ['error', {patterns: [ENTITIES_BARREL_RULE]}],
  },
  overrides: [
    {
      files: ['src/entities/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {name: 'react', message: 'entities/ contém apenas tipos.'},
              {
                name: 'react-native',
                message: 'entities/ contém apenas tipos.',
              },
            ],
            patterns: [
              {
                group: [
                  '**/services/**',
                  '**/repositories/**',
                  '**/hooks/**',
                  '**/ui/**',
                  '**/utils/**',
                ],
                message:
                  'entities/ não dependem de services/repositories/hooks/ui/utils.',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['src/services/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['**/repositories/**'],
                message: 'services/ não importa de repositories/.',
              },
              {
                group: ['**/hooks/**'],
                message: 'services/ não importa de hooks/.',
              },
              {
                group: ['**/ui/**'],
                message: 'services/ não importa de ui/.',
              },
              {
                group: ['**/utils/**'],
                message:
                  'services/ não importa de utils/ (transporte HTTP cru).',
              },
              ENTITIES_BARREL_RULE,
            ],
          },
        ],
      },
    },
    {
      files: ['src/repositories/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['**/hooks/**'],
                message: 'repositories/ não importa de hooks/.',
              },
              {
                group: ['**/ui/**'],
                message: 'repositories/ não importa de ui/.',
              },
              ENTITIES_BARREL_RULE,
            ],
          },
        ],
      },
    },
    {
      files: ['src/hooks/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['**/services/**'],
                message:
                  'hooks/ chamam o repository, nunca o service directamente.',
              },
              {
                group: ['**/ui/screens/**'],
                message: 'hooks/ não importam de ui/screens/.',
              },
              {
                group: ['**/ui/components/**'],
                message: 'hooks/ não importam de ui/components/.',
              },
              {
                group: ['**/ui/styles/**'],
                message: 'hooks/ não importam de ui/styles/.',
              },
              ENTITIES_BARREL_RULE,
            ],
          },
        ],
      },
    },
    {
      files: ['src/utils/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'react',
                message:
                  'utils/ devem ser puros — sem React (extrair para hooks/).',
              },
            ],
            patterns: [
              {
                group: ['**/services/**'],
                message: 'utils/ não importa de services/.',
              },
              {
                group: ['**/repositories/**'],
                message: 'utils/ não importa de repositories/.',
              },
              {
                group: ['**/hooks/**'],
                message: 'utils/ não importa de hooks/.',
              },
              {group: ['**/ui/**'], message: 'utils/ não importa de ui/.'},
              ENTITIES_BARREL_RULE,
            ],
          },
        ],
      },
    },
    {
      files: ['src/ui/screens/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['**/services/**'],
                message: 'screens/ não chamam services — usar hooks/.',
              },
              {
                group: ['**/repositories/**'],
                message: 'screens/ não chamam repositories — usar hooks/.',
              },
              ENTITIES_BARREL_RULE,
            ],
          },
        ],
        'no-restricted-syntax': [
          'error',
          {
            selector: "CallExpression[callee.name='useEffect']",
            message:
              'screens/ não devem ter useEffect — extrair efeito para hook em hooks/.',
          },
        ],
      },
    },
    {
      files: ['src/ui/components/**/*.{ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['**/services/**'],
                message: 'components/ não chamam services.',
              },
              {
                group: ['**/repositories/**'],
                message: 'components/ não chamam repositories.',
              },
              ENTITIES_BARREL_RULE,
            ],
          },
        ],
      },
    },
    {
      files: ['src/ui/styles/**/*.{ts,tsx}'],
      rules: {
        'max-lines': [
          'error',
          {max: 600, skipBlankLines: true, skipComments: true},
        ],
      },
    },
  ],
};
