import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Tag extends Component {
  render() {
    return (
      <View style={{minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2, marginRight: 5}}>
        <Text style={{fontWeight: '700', fontSize: 14}}>{this.props.name}</Text>
      </View>
    );
  }
}
