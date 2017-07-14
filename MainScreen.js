// internal module
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// external module 
import SplashScreen from 'react-native-splash-screen';
import Viewpager from 'react-native-viewpager';

// our module
import TitleBar from './TitleBar';
import MViewPager from './MViewPager';
import DefaultStyles, { Sizes, Colors } from './DefaultStyles';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBarContainer}>
          <TitleBar/>
        </View>

        <View style={styles.viewPagerContainer}>
          <MViewPager/>
        </View>
      </View>
    );
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (suac as async tasks) hide the splash screen
    SplashScreen.hide();
  }
}

/**
 * MainScreen에 customize된 ViewPager를 끼워넣는다.
 * 콜백 함수를 가지고 있으며 MainScreen에서 콜백 함수를 등록한다.
 * 등록된 콜백 함수는 page가 변경될때마다 titleBar의 내용을 바꾸는 일을 담당한다.
 * 
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.defaultBgColor
  },
  titleBarContainer: {
    flex: -1,
    height: Sizes.titleBarHeight,
    backgroundColor: '#ed2929'
  },
  viewPagerContainer: {
    flex: 1,
    backgroundColor: Colors.defaultBgColor
  }
});




export default MainScreen;