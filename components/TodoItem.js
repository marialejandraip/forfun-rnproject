import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <Text style={styles.text}>{item.todo}</Text> 
        </TouchableOpacity> 
    )
};

const styles = StyleSheet.create({
    text:{
        padding:20,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth: 1,
        borderRadius:20,
    }
})