import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginPage from '~/components/login/LoginPage';

class LoginPageContainer extends Component {
  render() {
    return (
      <View>
        <Text>LoginContainer</Text>
        <LoginPage />
      </View>
    );
  }
}

export default LoginPageContainer;
