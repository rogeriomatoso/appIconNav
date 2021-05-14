import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default function Home({route}){
    
    const navigation = useNavigation();   

    function irSobre(){        
        navigation.navigate('Sobre', {
                                        nome:'Rogerio',
                                        email: 'rogeriogm@unipam.edu.br'
                            });
    }
   
    function infoHome(){
        navigation.navigate('Informacao', {
                                            dados: 'Texto Informativo',

                            });
    }

    return(
        <View>
            <Text> Home </Text>
            <Text> Conteudo inicial </Text>
            <Button 
                title= 'Sobre'
                onPress={irSobre}
                
            />
            <View style={{marginTop:10}}>
                <Button
                    title= 'Informações'
                    onPress ={infoHome}
                />
            </View>
        </View>
    );
}