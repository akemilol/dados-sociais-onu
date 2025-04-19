import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import estilos from '../styles/global';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Sobre o Aplicativo</Text>

      <Text style={estilos.texto}>
        Este aplicativo tem como objetivo promover a conscientização sobre desigualdades sociais
        no Brasil, utilizando dados reais fornecidos pela ONU através dos Objetivos de Desenvolvimento Sustentável (ODS).
        Os indicadores apresentados abordam temas como pobreza extrema, acesso à água potável, educação de qualidade e igualdade de gênero.
      </Text>

      <Text style={estilos.texto}>
        Através da visualização de dados e da interação com informações relevantes,
        esperamos contribuir para uma sociedade mais informada e engajada com as causas sociais.
      </Text>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://sdgs.un.org/goals')}
      >
        <Text style={styles.linkTexto}>🔗 Acesse os Objetivos da ONU</Text>
      </TouchableOpacity>

      <View style={styles.imagensBox}>
        <Image
          source={require('../assets/img/curiosidade.jpeg')}
          style={styles.imagemQuadrada}
        />
        <Image
          source={require('../assets/img/pobreza.jpg')}
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
  linkTexto: {
    marginTop: 20,
    fontSize: 16,
    color: '#1E88E5',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
