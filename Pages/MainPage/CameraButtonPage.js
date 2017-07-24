import React, {Component} from 'react';
import {StyleSheet, Text, View, } from 'react-native';

export default class CameraButtonPage extends Component {

  render() {
    return (
      <View style={styles.blockContainer}>

        <View style={styles.cameraIconContainer}>

        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}
            onPress={() => this.props.navigation.navigate('CameraPage')}>
            카메라 아이콘을 누르면{'\n'}
            사진찍기로 넘어갑니다.
          </Text>
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
