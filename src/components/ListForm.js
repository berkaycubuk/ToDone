import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'

export default class ListForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = { input: '' }
    
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(input) {
    this.setState({input})
  }

  handleSubmit() {
    console.log(this.state)
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Task"
          onBlur={Keyboard.dismiss}
          value={this.state.input}
          onChangeText={this.handleInput}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }
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