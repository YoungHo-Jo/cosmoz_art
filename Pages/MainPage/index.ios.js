import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import MainMission from './MainMission';


class MainPage extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.container}>
        <MainMission/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});



export default MainPage;