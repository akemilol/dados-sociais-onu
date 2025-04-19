import { StyleSheet } from 'react-native';
import Cores from './cores';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Cores.fundo,
        padding: 20,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Cores.azul,
        marginBottom: 15,
        textAlign: 'center',
    },
    texto: {
        fontSize: 16,
        color: Cores.cinza,
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: Cores.cinza,
        backgroundColor: Cores.branco,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    botao: {
        backgroundColor: Cores.azul,
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
    },
    botaoTexto: {
        color: Cores.branco,
        fontWeight: 'bold',
        fontSize: 16,
    },
    imagem: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 10,
    },
    imagemPerfil: {
        width: 140,
        height: 140,
        borderRadius: 70, 
        resizeMode: 'cover',
        alignSelf: 'center',
        marginVertical: 15,
        borderWidth: 2,
        borderColor: '#1976D2', 
    },
});
