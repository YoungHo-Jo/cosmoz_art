import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

import Timer from './Timer';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";

class TimerPage extends Component {


  render() {
    return (
      <View style={styles.blockContainer}>
        <UpperLinearGradient/>
        {/*Mission*/}
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionText}>
            내가 생각하는 우주 외계인을 그려봐요
          </Text>
        </View>
        {/*Timer*/}
        <View style={styles.timerContainer}>
          <Timer/>
        </View>
        <LowerLinearGradient/>
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
    backgroundColor: '#004992',
  },
  missionTextContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#884400'
  },
  timerContainer: {
    backgroundColor: '#884499',
    alignItems: 'center',
    justifyContent: 'center'
  },
  missionText: {
    fontWeight: '300',
    fontSize: 18,
    textAlign: 'center'
  }

});


export default TimerPage;
