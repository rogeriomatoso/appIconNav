import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/Ionicons';

import Login from './src/APS/pages/Login';
import Home from './src/APS/pages/Home';
import Contato from './src/APS/pages/Contato';
import Institucional from './src/APS/pages/Institucional';

const Tab = createBottomTabNavigator();  
const icons = {
  Login: {
    name: 'ios-log-in'
  },
  Home: {
    name: 'ios-home'
  },
  Institucional: {
    name: 'ios-briefcase-sharp'
  },
  Contato: {
    name: 'ios-call'
  },
 
}   

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({route})=> ({
          tabBarIcon: ({color, size})=> {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size}/>
          }
        })}

        tabBarOptions={{
          style:{
           backgroundColor: '#4B0082',
           activeTintColor: '#FFF',              
                 
          }
        }}
      >
        <Tab.Screen name="Login" component={Login}/>
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Institucional" component={Institucional}/>
          <Tab.Screen name="Contato" component={Contato}/>
          
        </Tab.Navigator>
    </NavigationContainer>
  );
}
