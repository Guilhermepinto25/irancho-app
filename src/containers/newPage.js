import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> newPage </Text>
      </View>
    );
  }
}

NewPage.navigationOptions = {
  title: "NewPage",
}
