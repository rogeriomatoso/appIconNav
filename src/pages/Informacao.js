import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Informacao({route}){

    const navigation = useNavigation();
    function retornaHome(){
        navigation.navigate('Homme')
    }
    return(
        <View>           
            <Text>{route.params?.dados}</Text>
        </View>
    );
}