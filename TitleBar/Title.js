/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import {Sizes, Colors} from '../DefaultStyles';
import {getWindowSize} from "../Utills";
var windowSize = getWindowSize()

class Title extends Component {
  render() {
    const {currentViewPager} = this.props
    return (
      <View style={styles.container}>
        {
          currentViewPager == 0 &&
          <Text style={styles.titleText}>나의 방</Text>
        }
        {
          currentViewPager == 1 &&
          <Image
            style={styles.logo}
            source={require('../icons/logo_mini.png')}/>
        }
        {
          currentViewPager == 2 &&
          <Text style={styles.titleText}>공유 방</Text>
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logo: {
    width: Sizes.logoMinSize,
    height: Sizes.titleBarHeight,
    resizeMode: 'contain',
  },
  titleText: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
  }
});
export default Title;
