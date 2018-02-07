import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import {observer} from 'mobx-react'
import AppState from './store/AppState'

@observer
export default class App extends Component<{}> {
  render () {
    return (
      <View style={styles.container}>
        <Text>{AppState.count}</Text>
        <Button
          onPress={() => AppState.addCount()}
          title='+'
        />
        <Button
          onPress={() => AppState.resetCount()}
          title='reset'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
