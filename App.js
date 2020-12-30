//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
  const [people, setPeople]= useState([
    {name:'Alejita', key:1,},
    {name:'Anita', key:2,},
    {name:'Fernando', key:3,},
    {name:'Johan', key:4,},
    {name:'Cata', key:5,},
    {name:'Rozito', key:6,},
    {name:'Aleja', key:7,},
    {name:'Cami', key:8,},
    {name:'Osquitar', key:9,},
  ]);

  return (
    <View style={styles.container}>
      
      <ScrollView>
      { people.map(person => (
          <View key={person.key} style={styles.item}>
            <Text >{person.name}</Text>
          </View>
        ))}
      </ScrollView>
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
  item:{
    marginTop:24,
    padding:30,
    fontSize:24,
    backgroundColor:'pink',
    width:300
  }
});
