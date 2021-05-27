import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();   

    return(
        <View style={styles.container}>
             <Text style={{fontSize:20}}>Home</Text>                   
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFE0',
        alignItems: 'center',
        justifyContent: 'center',
    }

})