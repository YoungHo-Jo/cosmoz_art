import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import MainMission from './MainMissionPage';


class MainPage extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.blockContainer}>
        <MainMissionPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    flexDirection: 'column',
  }
});



export default MainPage;