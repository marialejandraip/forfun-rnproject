//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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

  //Other way using Flat, when is a large array of items is better use it. It can be better for performance.
  //it dont automatically load onto the screen all data, only in the first view and then more will load as the scrolldown 
  //ScrollView will be better when is a more less data and will render all the items from the begining.

  return (
    <View style={styles.container}>
      <FlatList 
      data={people}
      renderItem={({person})=>(
        <Text style={styles.item}>{person.name}</Text>
      )}/>
  
    {/*   <ScrollView>
      { people.map(person => (
          <View key={person.key} >
            <Text style={styles.item} >{person.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
