import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const FlexDimensionBasics = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            <Text style={StyleSheet.heading}>Tela de Login</Text>
        </View>
    );
};

const styles= StyleSheet.creater({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBotton: 20,
    },
});

export default FlexDimensionBasics;