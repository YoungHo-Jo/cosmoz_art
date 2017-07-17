import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

import MainMission from './MainMissionPage';
import LeadTextPage from './LeadTextPage';
import TimerPage from './TimerPage';
import CameraPage from './CameraPage'

import {Colors} from '../../DefaultStyles';


class MainPage extends Component {

  render() {

    return (
      <View style={styles.blockContainer}>
        {/*<MainMission/>*/}
        <LeadTextPage
          navigation={this.props.navigation}/>
        {/*<TimerView/>*/}
        {/*<CameraPage/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
});


export default MainPage;