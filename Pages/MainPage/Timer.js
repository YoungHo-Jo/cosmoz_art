import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

class Timer extends Component {

  render() {
    return(
      <View style={styles.blockContainer}>
        {/*timerAnimation*/}
        <View style={styles.timerContainer}>
        </View>

        {/*timeAnimation*/}
        <View style={styles.timeContainer}>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  blockContainer: {
    alignItems: 'center',

    backgroundColor: '#888449'
  },
  timerContainer: {
    height: 100,
    width: 100,

    backgroundColor: '#999999'
  },
  timeContainer: {
    width: 50,
    height: 20,

    backgroundColor: '#111111'
  },

});

export default Timer;