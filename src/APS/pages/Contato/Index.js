import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contato({route}){

    const navigation = useNavigation();
    

    return(
        <View style={styles.container}>
            <Text style={{fontSize:20, marginBottom: 50}}>Contato</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fone: (34) 9 9999 0000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FAFAD2',
        alignItems: 'center',
        justifyContent: 'center',
    }

})