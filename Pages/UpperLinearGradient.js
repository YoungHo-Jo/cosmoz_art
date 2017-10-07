/* @flow */

import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from "react-native-linear-gradient/index.ios";
import {Sizes} from "../DefaultStyles";
export default class UpperLinearGradient extends React.Component {


  render() {
    return(
      <View style={styles.container}>
        <LinearGradient
          colors={['#eef2f5', '#ffffff']}
          style={styles.linearGradient}/>
      </View>

    );
  }
}

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    height: Sizes.linearGradientHeight,
    alignSelf: 'stretch',
    position: 'absolute',
    top: 0,
    width: width
  },
  linearGradient: {
    flex: 1,
  }
});
