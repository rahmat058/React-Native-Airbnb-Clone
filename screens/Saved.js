import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Saved extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Saved </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
