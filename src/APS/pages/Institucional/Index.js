import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Institucional(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
             <Text style={{fontSize:20}}>Institucional</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFACD',
        alignItems: 'center',
        justifyContent: 'center',
    }

})