export type ExampleDetailParams = {
  id: string;
  title: string;
  description: string;
};

export type RootStackParamList = {
  Loading: undefined;
  Home: undefined;
  Microapp: undefined;
  ExampleDetail: ExampleDetailParams;
};
