import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Informacao(){
    return(
        <View style={styles.container}>
            <Text>Informacao</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})