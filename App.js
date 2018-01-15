/* @flow */

// internal module
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

// external module
import SplashScreen from 'react-native-splash-screen';
import {StackNavigator} from 'react-navigation';

// our module
import MViewPager from './MViewPager';
import MainMission from './Pages/MainPage/MainMissionPage';
import MainPage from './Pages/MainPage';
import CameraPage from './Pages/MainPage/CameraPage';
import CameraButtonPage from './Pages/MainPage/CameraButtonPage';
import LeadText from './Pages/MainPage/LeadTextPage'
import DefaultStyles, {Sizes, Colors} from './DefaultStyles';
import Title from "./TitleBar/Title";
import TimerPage from "./Pages/MainPage/TimerPage";
import ScanPage from "./Pages/MainPage/ScanPage";
import DetailSharePage from "./Pages/SharePage/DetailSharePage";
import LoginPage from './Pages/LoginPage';
import IntroPage from './Pages/IntroPage';
import IntroPage4 from './Pages/IntroPage/IntroPage4';
import SignUpPage from './Pages/SignUpPage';
import ImageViewerPage from './Pages/ImageViewerPage';

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingsPage from './Pages/SettingsPage'
import Sharepage_mission from "./Pages/SharePage/Sharepage_mission";
import {fetchMissionToShow, fetchNotificationMission, fetchTodayMission} from "./actions/missionActions";
import {connect} from "react-redux";
import firebase from './firebase'
import PopupDialog, {ScaleAnimation} from "react-native-popup-dialog";
import PopupMsgBox from "./Pages/MainPage/PopupMsgBox";
import {missionToShowType} from "./reducers/missionDataReducer";
import {INITIAL_VIEW_PAGE} from "./reducers/index";


class App extends Component {
  render() {
    return (
        <View style={styles.blockContainer}>
          <View style={styles.viewPagerContainer}>
            <MViewPager
                initialPage={INITIAL_VIEW_PAGE}/>
          </View>
        </View>
    );
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (suac as async tasks) hide the splash screen
    SplashScreen.hide();



    // push notification 받을시 작동
    firebase.messaging().onMessage((message) => {
      console.log('firebase onMessage')
      console.log('message: ')
      console.log(message)
      this.props.fetchNotificationMission(message)

      //// implement ////
      // shwo someting to display notification
    });
  }

  componentWillMount() {
    this.props.fetchTodayMission()
  }
}


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
  },
  headerRight: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
    flexDirection: 'row',
  }
});


function mapStateToProps(state) {
  return {
    missionData: state.missionData,
    controlData: state.controlFlowReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotificationMission: (notificationData) => dispatch(fetchNotificationMission(notificationData)),
    fetchTodayMission: () => dispatch(fetchTodayMission()),
    fetchMissionToShow: (type) => dispatch(fetchMissionToShow(type))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
