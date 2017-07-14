import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import MainMission from './MainMission';
import LeadText from './LeadText';
import {Colors} from '../../DefaultStyles';


class MainPage extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.container}>
        <MainMission/>
        {/*<LeadText/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
});



export default MainPage;