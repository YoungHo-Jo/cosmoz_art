/* @flow */

import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Colors, Sizes} from "../DefaultStyles";

export default class BottomBar extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <View style={[styles.block, this.props.style]}>
          {this.props.children}
        </View>
      </View>
    );
  }
}



var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    height: Sizes.bottomBarHeight,
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 0,
    width: width,
  },
  block: {
    flex: 1,
    backgroundColor: '#940201'
    // backgroundColor: Colors.bottomBarBgColor
  }
});
