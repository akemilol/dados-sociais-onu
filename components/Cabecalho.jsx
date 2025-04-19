import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho({ titulo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#0A74DA',
    padding: 15,
    alignItems: 'center',
},
    titulo: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
},
});
