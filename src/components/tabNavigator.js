//copiar a colar no App() para rodar.

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Informacao from './src/pages/Informacao';

const Tab = createBottomTabNavigator();

const icons = {
  Home:{
    name: 'ios-home'
  },
  Sobre:{
    name: 'ios-people'
  },
  Informacao:{
    name: 'ios-call'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({color, size})=> {
            const {name} = icons[route.name];
            return <Icon name={name} color={color} size={size}/>
          }
        })}

        //personalização da tabBar

        tabBarOptions={{
          style:{
           backgroundColor: '#000',
           activeTintColor: '#FFF',  
           //inactiveTintColor: '#FF0000'          
          }
        }}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Sobre" component={Sobre}/>
        <Tab.Screen name="Informacao" component={Informacao}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

