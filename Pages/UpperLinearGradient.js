/* @flow */

import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from "react-native-linear-gradient/index.ios";
import {Sizes} from "../DefaultStyles";
export default class UpperLinearGradient extends React.Component {


  render() {
    return(
      <View style={[styles.container, {top: this.props.top ? this.props.top : Sizes.titleBarHeight}]}>
        <LinearGradient
          colors={['#00000029', '#ffffff00']}
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
    width: width
  },
  linearGradient: {
    flex: 1,
  }
});
