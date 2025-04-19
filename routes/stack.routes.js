import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import DadosAPI from '../screens/DadosAPI';
import Formulario from '../screens/Formulario';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dados" component={DadosAPI} />
        <Stack.Screen name="Formulário" component={Formulario} />
    </Stack.Navigator>
);
}
