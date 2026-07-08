import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Card, PrimaryButton} from 'shared-rn';
import type {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleDetail'>;

export function ExampleDetailRoute({route, navigation}: Props): React.JSX.Element {
  const {title, description} = route.params;
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Card title={title} subtitle={description} />
        <PrimaryButton label="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
});
