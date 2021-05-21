import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'; 

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Informacao from './src/pages/Informacao';

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Sobre' component={Sobre}/>
        <Drawer.Screen name='Informacao' component={Informacao}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
