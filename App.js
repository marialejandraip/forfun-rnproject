//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos]=useState([
    {todo: 'buy coffe', key:1},
    {todo: 'create a todo app', key:2},
    {todo: 'get sleep earlier', key:3},
  ])

  const pressHandler = (key) => {
    setTodos( prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    })
  };

  const submitHandler = (text) =>{
    if(text.length >3){
      setTodos( prevTodos => {
        return [{todo:text, key:Math.random()},...prevTodos]
      });
    } else {
      //Alert component from react native, alert() has 3 inputs to update, title, text and button. 
      //The last one is for the button to close the alert on press. 
      Alert.alert('oops!', 'Todos must be over 3 chars long', [
        {text: 'understood', onPress: () => console.log('alert closed')}
      ]);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={todos} 
          renderItem={({item})=>(
            <TodoItem key={item.key} item ={item} pressHandler={pressHandler} />
          )}/>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }
});
