import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

export default function CustonDrawer(props){


   

    return(
        <View>
           <DrawerContentScrollView {...props}>
               <View
                style={{width: '100%', 
                        height: 77,
                        alignItems: 'center',
                        justifyContent:'center',
                        marginTop:25,}}
               >
                   <Image
                    source = {require('../img/profile-user.png')}
                    style={{width:65 , height: 65}}
                   />
                   <Text
                    style={{color: '#000', fontSize:17}}
                   >Seja Bem vindo</Text>
               </View>
               <DrawerItemList {...props}/>
            </DrawerContentScrollView>            
        </View>
    );
}

