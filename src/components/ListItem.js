import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

class ListItem extends Component {
  render() {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{this.props.item.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    marginTop: 10,
  },
  listItemText: {
    fontSize: 18,
  }
})

export default ListItem