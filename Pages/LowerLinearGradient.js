/* @flow */

import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from "react-native-linear-gradient/index.ios";
import {Sizes} from "../DefaultStyles";
export default class LowerLinearGradient extends React.Component {


  render() {
    return(
      <View style={[styles.container, {marginBottom: this.props.marginBottom}]}>
        <LinearGradient
          colors={['#ffffff00','#0000002a']}
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
    bottom: Sizes.bottomBarHeight,
    width: width
  },
  linearGradient: {
    flex: 1,
  }
});
