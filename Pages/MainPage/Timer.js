import React, {Component} from 'react';
import {StyleSheet, View, Text, Image,} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'


class Timer extends Component {

  render() {
    return (
        <View style={styles.blockContainer}>
          {/*timerAnimation*/}
          <View style={styles.timerContainer}>
            <Image
                source={require('./timer.png')}
                resizeMode='contain'
                style={eStyles.timer}/>
          </View>

          {/*timeAnimation*/}
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>
              05 : 00
            </Text>
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  blockContainer: {
    alignItems: 'center',
  },
  timer: {
    resizeMode: 'contain',
  },
  timerContainer: {
    height: 130,
    width: 130,
    marginBottom: 10,
  },
  timeContainer: {
  },
  timeText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000000'
  }
});


EStyleSheet.build()
const eStyles = EStyleSheet.create({
  timer: {
    width: '100%',
    height: '100%'
  },
})

export default Timer;