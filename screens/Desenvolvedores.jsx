import { View, Text, Image, ScrollView } from 'react-native';
import estilos from '../styles/global';

export default function Desenvolvedores() {
return (
    <ScrollView contentContainerStyle={estilos.container}>
    <Text style={estilos.titulo}>Desenvolvedoras</Text>

    <Image source={require('../assets/img/mirela.jpg')} style={estilos.imagemPerfil} />
    <Text style={estilos.texto}>Mirela Pinheiro Silva Rodrigues</Text>
    <Text style={estilos.texto}>RM: 558191</Text>

    <Image source={require('../assets/img/valeria.jpg')} style={estilos.imagemPerfil} />
    <Text style={estilos.texto}>Valéria Conceição dos Santos</Text>
    <Text style={estilos.texto}>RM: 557177</Text>
    </ScrollView>
);
}
