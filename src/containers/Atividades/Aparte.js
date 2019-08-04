import React, { Component } from 'react';
import { View, Text } from 'react-native';
import withSideBar from '~/components/withSideBar';

class Aparte extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Aparte </Text>
      </View>
    );
  }
}

export default withSideBar(Aparte);
