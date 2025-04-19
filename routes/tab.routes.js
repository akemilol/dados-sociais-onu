import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import DadosAPI from '../screens/DadosAPI';
import Formulario from '../screens/Formulario';
import Sobre from '../screens/Sobre';
import Desenvolvedores from '../screens/Desenvolvedores';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Início') iconName = 'home';
            else if (route.name === 'Dados') iconName = 'bar-chart';
            else if (route.name === 'Formulário') iconName = 'document-text';
            else if (route.name === 'Sobre') iconName = 'information-circle';
            else if (route.name === 'Equipe') iconName = 'people';

    return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1976D2', 
        tabBarInactiveTintColor: '#757575', 
        tabBarStyle: {
        backgroundColor: '#e0f2f1', 
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height: 65,
        paddingBottom: 5,
        },
        tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        },
    })}
    >
    <Tab.Screen name="Início" component={Home} />
    <Tab.Screen name="Dados" component={DadosAPI} />
    <Tab.Screen name="Formulário" component={Formulario} />
    <Tab.Screen name="Sobre" component={Sobre} />
    <Tab.Screen name="Equipe" component={Desenvolvedores} />
    </Tab.Navigator>
);
}
