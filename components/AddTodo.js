import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button  } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [newTodo, setNewTodo]=useState('')

    const changeHandler = (value) => {
        setNewTodo(value)
    }

    return (
        <View>
            <TextInput 
            style ={styles.input}
            placeholder= "new to do..."
            onChangeText={(e) => changeHandler(e)}
            />
            <Button onPress={() => submitHandler(newTodo)} title='add todo' color='pink'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd',
    }
})
