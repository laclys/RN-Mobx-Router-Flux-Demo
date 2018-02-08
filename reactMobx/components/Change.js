import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Change extends Component {
  render () {
    return (
      <View style={styles.container} >
        <Text></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF'
  }
})
