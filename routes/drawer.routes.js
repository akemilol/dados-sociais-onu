import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './tab.routes';
import Sobre from '../screens/Sobre';
import Desenvolvedores from '../screens/Desenvolvedores';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
return (
    <Drawer.Navigator initialRouteName="Menu">
    <Drawer.Screen name="Menu" component={TabRoutes} />
    <Drawer.Screen name="Sobre" component={Sobre} />
    <Drawer.Screen name="Equipe" component={Desenvolvedores} />
    </Drawer.Navigator>
);
}
