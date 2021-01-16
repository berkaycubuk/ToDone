import React, {useEffect} from 'react'
import {
  StyleSheet, 
  Text, 
  View,
  FlatList,
} from 'react-native'

import ListItem from './components/ListItem'
import ListForm from './components/ListForm'

// Store
import dataStore from './store/data'

const App = () => {
  const { list, fetch } = dataStore()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ToDone</Text>
      </View>
      <ListForm />
      <FlatList
        data={list}
        renderItem={({item}) =>
          <ListItem item={item} />
        }
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
})

export default App
