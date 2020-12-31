//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
    setTodos( prevTodos => {
      return [{todo:text, key:Math.random()},...prevTodos]
    })
  }
  return (
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
