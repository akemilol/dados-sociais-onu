import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Error() {
return (
    <View style={styles.container}>
    <Text style={styles.erro}>Erro ao carregar os dados. Verifique sua conexão.</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
erro: { fontSize: 16, color: 'red', textAlign: 'center' },
});
