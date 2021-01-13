import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'

import Checkbox from '@react-native-community/checkbox'

// Store
import dataStore from '../store/data'

const ListItem = (props) => {
  const [done, setDone] = useState(props.item.done)
  const { updateItem } = dataStore()

  return (
    <View style={[styles.listItem, done && styles.listItemDone]}>
      <Checkbox disabled={false} value={done} onValueChange={(newValue) => {updateItem(props.item.id, props.item); setDone(newValue);}} />
      <Text style={styles.listItemText}>{props.item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
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
  }
})

export default ListItem