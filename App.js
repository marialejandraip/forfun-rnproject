//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName]= useState('Maria');
  const [age, setAge] =useState(26)

  const handlePress = () => {
    setName('Alejita')
    setAge(26)
  }
  return (
    //View is like a div, Text component always when want to see text
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput 
      multiline //when press enter start new line
      style={styles.input} 
      placeholder='Mariita' 
      onChangeText={(e)=> setName(e)}
      />
       <Text>Enter your age:</Text>
      <TextInput 
      keyboardType='number-pad' //property to change the type keyboard
      style={styles.input} 
      placeholder= '45' 
      onChangeText={(e)=> setAge(e)}
      />
      <Text>your name is {name} and age is {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  buttonContainer:{
  marginTop:20, 
  }, 
  input:{
    borderWidth:1,
    borderRadius: 10,
    borderColor:'#777',
    padding:8,
    margin: 10,
    width:200,
  }
});
