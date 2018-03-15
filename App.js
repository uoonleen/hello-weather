import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  redView: {
    height:50,
    width:50,
    backgroundColor: 'red'
  },
  yellowView: {
    height:50,
    width:50,
    backgroundColor: 'yellow'
  }
});
