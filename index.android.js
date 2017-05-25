/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AchievementView from 'achievement-view'

export default class AchievementViewSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AchievementView index={1} style={{width: 50,height: 50}}/>
        <AchievementView index={2} style={{width: 100,height: 100}}/>
        <AchievementView index={3} style={{width: 50,height: 50}}/>
        <AchievementView index={6969} style={{width: 100,height: 100}}/>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AchievementViewSample', () => AchievementViewSample);
