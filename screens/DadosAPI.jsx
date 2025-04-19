import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import {
  Text,
  Title,
  Paragraph,
  Card,
  ActivityIndicator,
} from 'react-native-paper';

const indicadores = {
  '1.1.1': {
    titulo: 'Erradicação da Pobreza',
    descricao: 'Proporção da população vivendo com menos de US$ 1,90 por dia.',
  },
  '4.1.1': {
    titulo: 'Educação de Qualidade',
    descricao: 'Taxa de conclusão do ensino fundamental.',
  },
  '5.5.1': {
    titulo: 'Igualdade de Gênero',
    descricao: 'Proporção de mulheres ocupando cargos parlamentares.',
  },
  '6.1.1': {
    titulo: 'Água Potável e Saneamento',
    descricao: 'População com acesso a serviços de água potável segura.',
  },
};

export default function DadosAPI() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [indicadorSelecionado, setIndicadorSelecionado] = useState('1.1.1');

  const pais = 'BRA';
  const meta = indicadores[indicadorSelecionado];

  useEffect(() => {
    async function buscarDados() {
      setCarregando(true);
      try {
        const response = await axios.get(
          `https://unstats.un.org/SDGAPI/v1/sdg/Indicator/Data?indicator=${indicadorSelecionado}&country=${pais}`
        );

        const resultado = response.data?.data?.[0];
        const anoAnterior = new Date().getFullYear() - 1;

        if (resultado) {
          setDados({
            ano: resultado.year ?? anoAnterior,
            valor: resultado.value ?? 'Não disponível',
            unidade: resultado.units ?? 'Não informado',
            fonte: resultado.source ?? 'Fonte não especificada',
          });
        } else {
          Alert.alert('Aviso', 'Nenhum dado encontrado para o Brasil.');
        }

      } catch (error) {
        console.error('Erro ao buscar dados da ONU:', error.message);
        Alert.alert('Erro', 'Não foi possível carregar os dados da ONU.');
      }

      setCarregando(false);
    }

    buscarDados();
  }, [indicadorSelecionado]);

  return (
    <ScrollView
      style={{ backgroundColor: '#FFFFFF' }}
      contentContainerStyle={styles.container}
    >
      <Title style={styles.titulo}>Indicadores da ONU</Title>

      <View style={styles.seletor}>
        {Object.entries(indicadores).map(([codigo, obj]) => (
          <TouchableOpacity
            key={codigo}
            style={[
              styles.botaoSeletor,
              indicadorSelecionado === codigo && styles.botaoAtivo,
            ]}
            onPress={() => setIndicadorSelecionado(codigo)}
          >
            <Text
              style={[
                styles.textoBotao,
                indicadorSelecionado === codigo && styles.textoBotaoAtivo,
              ]}
            >
              {obj.titulo}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Paragraph style={styles.descricao}>{meta.descricao}</Paragraph>

      {carregando && (
        <ActivityIndicator animating={true} size="large" style={{ marginTop: 30 }} />
      )}

      {!carregando && dados && (
        <Card style={styles.card}>
          <Card.Content>
            <Paragraph>
              📅 <Text style={styles.rotulo}>Ano:</Text>{' '}
              <Text style={styles.valor}>{dados.ano}</Text>
            </Paragraph>
            <Paragraph>
              📊 <Text style={styles.rotulo}>Valor:</Text>{' '}
              <Text style={styles.valor}>{dados.valor}%</Text>
            </Paragraph>
            <Paragraph>
              📦 <Text style={styles.rotulo}>Unidade:</Text>{' '}
              <Text>{dados.unidade}</Text>
            </Paragraph>
            <Paragraph>
              🧭 <Text style={styles.rotulo}>Fonte:</Text>{' '}
              <Text>{dados.fonte}</Text>
            </Paragraph>
          </Card.Content>
        </Card>
      )}

      {!carregando && dados && (
        <Paragraph style={styles.explicacao}>
          Este dado representa o indicador oficial da ONU relacionado ao objetivo escolhido. 
          O valor indica a porcentagem da população brasileira impactada, com base em dados do ano informado. 
          A unidade mostra como o dado foi medido, e a fonte indica o responsável pela coleta ou validação dos dados.
        </Paragraph>
      )}

      <View style={styles.imagensBox}>
        <Image
          source={require('../assets/img/17ods.png')}
          style={styles.imagemQuadrada}
        />
        <Image
          source={require('../assets/img/desigualdade1.jpg')}
          style={styles.imagemQuadrada}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 10,
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
    color: '#263238',
  },
  seletor: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  botaoSeletor: {
    backgroundColor: '#E0F2F1',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  botaoAtivo: {
    backgroundColor: '#43A047',
  },
  textoBotao: {
    color: '#263238',
    fontWeight: 'bold',
  },
  textoBotaoAtivo: {
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 10,
  },
  valor: {
    fontWeight: 'bold',
    color: '#43A047',
  },
  rotulo: {
    fontWeight: 'bold',
    color: '#263238',
  },
  explicacao: {
    marginTop: 20,
    color: '#37474F',
    fontSize: 15,
    lineHeight: 22,
  },
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
