export type ExampleItem = {
  id: string;
  title: string;
  description: string;
};

export const examples: ExampleItem[] = [
  {
    id: 'overview',
    title: 'Overview do microapp3-rn',
    description:
      'microapp3-rn é uma lib react-native-builder-bob consumida pelo main app e, aqui, por este example standalone.',
  },
  {
    id: 'microfronts',
    title: 'Microfronts inclusos',
    description: 'Este microapp renderiza microfront2-rn, publicado em seu próprio repositório.',
  },
  {
    id: 'shared',
    title: 'Componentes compartilhados',
    description:
      'Card, PrimaryButton, AppBar e LoadingScreen vêm de shared-rn — o mesmo pacote usado por microapp1-rn e microapp2-rn.',
  },
  {
    id: 'feature',
    title: 'Botões',
    description:
      'microapp3-rn implementa botões com um contador interativo. Abra o microapp para ver o componente real renderizado.',
  },
];
