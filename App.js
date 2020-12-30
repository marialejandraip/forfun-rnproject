//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName]= useState('Maria');
  const [person, setPerson] =useState({name:'Fernando', age:26});

  const handlePress = () => {
    setName('Alejita')
    setPerson({name:'Johan', age:27})
  }
  return (
    //View is like a div, Text component always when want to see text
    <View style={styles.container}>
       <Text>My name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>
        <View style={styles.buttonContainer}>
          <Button title="update state" onPress={handlePress}/>
        </View>
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
  }
});
