import React from 'react'
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native'

export default (props) => {
  const [active, changeActive] = React.useState(true);
  const [removed, changeRemoved] = React.useState(false);

  function onPress() {
    changeActive(!active);
  }

  function onLongPress() {
    changeRemoved(true)
  }

  const styles = StyleSheet.create({
    task: {
      width: '100%',
      padding: 10,
      display: removed ? 'none' : 'flex',
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
      borderRadius: 8,
      textDecorationLine: active ? 'none' : 'line-through',
      textDecorationStyle: 'solid',
      opacity: active ? 1 : 0.5
    },
  });

  return (
    <View style={styles.task}>
      <TouchableHighlight onPress={onPress} onLongPress={onLongPress}>
        <Text style={styles.taskText}>{ props.task }</Text>
      </TouchableHighlight>       
    </View>
  )
}

