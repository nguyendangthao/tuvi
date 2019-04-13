import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Home from './src/components/home';
import { AppContainer } from './config/navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
