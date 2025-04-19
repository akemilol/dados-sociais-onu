import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import estilos from '../styles/global';

export default function Home() {
return (
    <ScrollView contentContainerStyle={estilos.container}>
    <Text style={estilos.titulo}>Bem-vindo ao nosso aplicativo!</Text>

    <Text style={estilos.texto}>
        Este aplicativo tem como objetivo promover a conscientização sobre os principais desafios sociais do Brasil,
        com base em dados oficiais dos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
    </Text>

    <Text style={estilos.texto}>
        Através de indicadores atualizados, é possível visualizar a realidade de temas como pobreza extrema,
        educação de qualidade, igualdade de gênero e acesso à água potável, contribuindo para o entendimento e engajamento da sociedade.
    </Text>


    <View style={styles.imagensBox}>
        <Image
        source={require('../assets/img/onu.png')}
        style={styles.imagemQuadrada}
        />
        <Image
        source={require('../assets/img/brasil.png')}
        style={styles.imagemQuadrada}
        />
    </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({
imagensBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
},
imagemQuadrada: {
    width: '48%',
    height: 150,
    borderRadius: 12,
    resizeMode: 'cover',
},
});
