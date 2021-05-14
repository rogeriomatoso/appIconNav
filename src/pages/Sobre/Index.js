import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Sobre({route}){

    const navigation = useNavigation();

    function retornaHome(){
        navigation.navigate('Home');
    }

   

    return(
        <View>
            <Text>Sobre</Text>
            <Text>Informações sobre o Desenvolvedor</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button
                title = 'Retornar Home'
               // onPress={retornaHome}
               onPress={()=> navigation.goBack()}
            />
        </View>
    );
}