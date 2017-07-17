import React, {Component} from 'react';
import {StyleSheet, Text, View, } from 'react-native';

export default class CameraPage extends Component {

  render() {
    return (
      <View style={styles.blockContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            혼자 보기 아깝잖아요.{'\n'}
            마음껏 자랑해주세요.
          </Text>
        </View>

        <View style={styles.cameraIconContainer}>

        </View>

        <View style={styles.shareButtonContainer}>
          <View style={{height: 20}}><Text>공유하기</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004992',
  },
  textContainer: {
    backgroundColor: '#889482'
  },
  cameraIconContainer: {
    height: 200,
    width: 200,
    backgroundColor: '#881920'
  },
  shareButtonContainer: {
    backgroundColor: '#5ce151'
  },
  text: {
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center'
  }
});
