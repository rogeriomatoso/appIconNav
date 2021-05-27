import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
             <Text style={{fontSize:20}}>Login</Text>
             <TouchableOpacity
                style={styles.btn}
                onPress={()=> navigation.navigate('Home')}
             >
                 <Text style={styles.btnText}>Entrar</Text>
             </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFF8DC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText:{
        padding: 5,
        textAlign: 'center',
        color: '#FFF',
        alignContent: 'center'
    },
    btn:{
        backgroundColor: '#4B0082',
        borderRadius: 5,
        marginTop: 10,
        width: 80,      

    },

})