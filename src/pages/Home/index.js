import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home(){
    

    function irSobre(){        
        alert('entrou');
    }


    return(
        <View>
            <Text> Home </Text>
            <Text> Conteudo inicial </Text>
            <Button
                title= 'Acessar Sobre'
                onPress={irSobre}
            />
        </View>
    );
}