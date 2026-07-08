import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppBar, Card, PrimaryButton} from 'shared-rn';
import {examples} from '../examples';
import type {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeRoute({navigation}: Props): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <AppBar
        title="microapp3-rn-example"
        subtitle="Standalone example running microapp3-rn without the main app"
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Card title="microapp3-rn" subtitle="Navegue para dentro do microapp para ver o componente real renderizado.">
          <PrimaryButton label="Abrir microapp3-rn" onPress={() => navigation.navigate('Microapp')} />
        </Card>

        <Text style={styles.sectionTitle}>Exemplos</Text>
        {examples.map(example => (
          <Card key={example.id} title={example.title} subtitle={example.description}>
            <PrimaryButton
              label="Ver detalhes"
              variant="outline"
              onPress={() => navigation.navigate('ExampleDetail', example)}
            />
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
});
