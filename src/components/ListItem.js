import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native'

import Checkbox from '@react-native-community/checkbox'

// Store
import dataStore from '../store/data'

const ListItem = (props) => {
  const [done, setDone] = useState(props.item.done)
  const { updateItem, deleteItem } = dataStore()

  return (
    <View style={[styles.listItem, done && styles.listItemDone]}>
      <Checkbox disabled={false} value={done} onValueChange={(newValue) => {setDone(newValue);  updateItem(props.item.id, {id: props.item.id, title: props.item.title, done: newValue});}} />
      <Text style={styles.listItemText}>{props.item.title}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(props.item)}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
  },
  listItemDone: {
    backgroundColor: '#eee'
  },
  listItemText: {
    fontSize: 18,
    textAlign: 'left',
    width: '70%'
  },
  deleteButton: {
    padding: 5,
    margin: 5
  },
  deleteButtonText: {
    color: '#ff4d4d',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default ListItem