//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

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
  const pressHandle =(id)=>{
    console.log(id)
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.key != id);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList 
      data={people}
      renderItem={({ item })=>(
        <TouchableOpacity onPress={() => pressHandle(item.key)}>
          <Text style={styles.item} > {item.name}</Text>
        </TouchableOpacity>
      )}/>
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
