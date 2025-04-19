import { Text, StyleSheet } from 'react-native';

export default function TextInfo({ texto }) {
    return <Text style={styles.texto}>{texto}</Text>;
}

const styles = StyleSheet.create({
texto: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
},
});