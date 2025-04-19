import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';
import estilos from '../styles/global';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviarFormulario() {
    if (!nome || !messagem) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }

    Alert.alert('Obrigado!', `Sua mensagem foi enviada com sucesso, ${nome}.`);
    setNome('');
    setMensagem('');
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Relate um Problema Social</Text>

      <Text style={estilos.texto}>
        Se você conhece ou vivencia alguma situação de desigualdade social, relate aqui.
        Sua contribuição é importante para visibilizar os problemas que afetam a sociedade.
      </Text>

      <View style={estilos.formGrupo}>
        <Text style={estilos.label}>Nome:</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={estilos.formGrupo}>
        <Text style={estilos.label}>Descrição do problema:</Text>
        <TextInput
          style={[estilos.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Escreva sua mensagem aqui..."
          multiline
          numberOfLines={5}
          value={mensagem}
          onChangeText={setMensagem}
        />
      </View>

      <TouchableOpacity style={estilos.botao} onPress={enviarFormulario}>
        <Text style={estilos.botaoTexto}>Enviar</Text>
      </TouchableOpacity>

      {/* Imagens lado a lado */}
      <View style={styles.imagensBox}>
        <Image
          source={require('../assets/img/tirinha.jpg')}
          style={styles.imagemQuadrada}
        />
        <Image
          source={require('../assets/img/favela.jpg')}
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
