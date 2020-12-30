import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //View is like a div, Text component always when i want to see text
    <View style={styles.container}>
      <View style ={styles.header}>
        <Text style ={styles.boldText}>Hello World! </Text>
      </View>
      <View style ={styles.body}>
        <Text style ={styles.boldText} >Lorem imsum <Text>Holi</Text>salut</Text>
        <Text>Lorem imsum salut</Text>
        <Text>Lorem imsum salut</Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//React native emulate css because android and IOS dont use it

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'pink',
    padding:20,
  },
  boldText:{
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  }
});
