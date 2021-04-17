import React from 'react'
import { Text, Button, View, TextInput, StyleSheet, ScrollView } from 'react-native'

export default _ => {
  const [text, changeText] = React.useState('');
  const [tasks, changeTasks] = React.useState([]);

  function addTask() {
    changeTasks([...tasks, text])
    changeText('')
  }
  function clearTasks() {
    changeTasks([])
  }

  const styles = StyleSheet.create({
    inputWrapper: {
      width: '100%',
      color: '#292D3E',
      paddingRight: 10,
      paddingLeft: 10,
      marginBottom: 30
    },
    input: {
      backgroundColor: '#A6ACCD',
      width: '100%',
      borderRadius: 8,
      height: 40,
    },
    tasksWrapper: {
      width: '100%',
      margin: 25,
      height: '100%',
      display: 'flex',
      width: '100%',
    },
    task: {
      width: '100%',
      padding: 10,
    },
    taskText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#A6ACCD',
      color: '#292D3E',
      padding: 20,
      width: '100%',
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 8
    },
    buttonWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%'
    },
    buttonLeft: {
      alignItems: 'flex-start',
      marginLeft: 25,
    },
    buttonRight: {
      marginLeft: 'auto',
      marginRight: 25,
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 50, alignItems: 'center', backgroundColor: '#292D3E' }}>
      <View style={styles.inputWrapper}>
        <TextInput value={ text } style={styles.input} onChangeText={changeText}/>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonLeft}>
          <Button
            title="Add Task"
            color='#717CB470'
            onPress={() => addTask()}
          />
        </View>
        <View style={styles.buttonRight}>
          <Button 
            color='#2b2a3e'
            title="Clear Tasks" 
            onPress={() => clearTasks()} 
          />
        </View>
      </View>  
      <ScrollView style={styles.tasksWrapper}>
          { tasks.map( (task, key) => {
            return <View key={key} style={styles.task}>
              <Text style={styles.taskText}>{ task }</Text>
            </View>
          })}
      </ScrollView>
    </View>
  )
}

