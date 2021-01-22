import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'

// Store
import dataStore from '../store/data'

const ListForm = () => {
  const [input, setInput] = useState('')
  const { addItem } = dataStore()

  const handleSubmit = () => {
    if (input != '') {
      addItem({
        id: Math.random().toString(16).substr(2, 8),
        title: input,
        done: false
      })

      setInput('')
    }
  }

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Task"
        onBlur={Keyboard.dismiss}
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#cccccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 60,
    fontSize: 20,
    padding: 12,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    margin: 5
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default ListForm