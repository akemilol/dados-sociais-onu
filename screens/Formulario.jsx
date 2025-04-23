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
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilos from '../styles/global';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function enviarFormulario() {
    if (!nome.trim() || !mensagem.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }

    if (/\d/.test(nome)) {
      Alert.alert('Nome inválido', 'O campo "nome" não pode conter números.');
      return;
    }

    const novoRelato = {
      nome,
      mensagem,
      data: new Date().toLocaleString(),
    };

    try {
      const dadosAntigos = await AsyncStorage.getItem('relatos');
      const relatos = dadosAntigos ? JSON.parse(dadosAntigos) : [];
      relatos.push(novoRelato);
      await AsyncStorage.setItem('relatos', JSON.stringify(relatos));

      Alert.alert('Obrigado!', `Sua mensagem foi enviada com sucesso, ${nome}.`);
      setNome('');
      setMensagem('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o relato.');
      console.error(error);
    }
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
