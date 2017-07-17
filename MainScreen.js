// internal module
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

// external module 
import SplashScreen from 'react-native-splash-screen';
import {StackNavigator} from 'react-navigation';

// our module
import TitleBar from './TitleBar';
import MViewPager from './MViewPager';
import MainMission from './Pages/MainPage/MainMissionPage';
import MainPage from './Pages/MainPage';
import CameraPage from './Pages/MainPage/CameraPage';
import LeadText from './Pages/MainPage/LeadTextPage'
import DefaultStyles, {Sizes, Colors} from './DefaultStyles';
import Title from "./TitleBar/Title";
import TimerPage from "./Pages/MainPage/TimerPage";

class MainScreen extends Component {
  static navigationOptions = {
    headerStyle: DefaultStyles.headerStyle,
    header: (<Title/>),

  };

  render() {
    return (
      <View style={styles.blockContainer}>
        <View style={styles.viewPagerContainer}>
          <MViewPager
            navigation={this.props.navigation}/>
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

const App = StackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle
    }
  },
  LeadText: {
    screen: LeadText,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle
    }
  },
  Mission: {
    screen: MainMission,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      title: 'MainMissionPage'
    }
  },
  ViewPager: {
    screen: MViewPager,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle
    }
  },
  MainPage: {
    screen: MainPage,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle
    }
  },
  TimerPage: {
    screen: TimerPage,
    navigationOptions: {
      title: 'TimerPage',
      headerStyle: DefaultStyles.headerStyle
    }
  },
  CameraPage: {
    screen: CameraPage,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle
    }
  }
});

/**
 * MainScreen에 customize된 ViewPager를 끼워넣는다.
 * 콜백 함수를 가지고 있으며 MainScreen에서 콜백 함수를 등록한다.
 * 등록된 콜백 함수는 page가 변경될때마다 titleBar의 내용을 바꾸는 일을 담당한다.
 *
 */

const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.defaultBgColor
  },
  titleBarContainer: {
    flex: -1,
    height: Sizes.titleBarHeight,
  },
  viewPagerContainer: {
    flex: 1,
    backgroundColor: Colors.defaultBgColor
  }
});


export default MainScreen;
export {App};