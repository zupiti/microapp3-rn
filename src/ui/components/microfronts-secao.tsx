import React from 'react';
import {Text, View} from 'react-native';
import {Microfront2Card} from 'microfront2-rn';
import {contadorStyles as styles} from '../styles/contador.styles';

export function MicrofrontsSecao(): React.JSX.Element {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Microfronts</Text>
      <Microfront2Card title="MF2 via Microapp3" />
    </View>
  );
}
