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
import LoginPage from './Pages/LoginPage'

import Icon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingsPage from './Pages/SettingsPage'
import Sharepage_mission from "./Pages/SharePage/Sharepage_mission";
import {fetchMissionToShow, fetchNotificationMission, fetchTodayMission} from "./actions/missionActions";
import {connect} from "react-redux";
import firebase from './firebase'
import PopupDialog, {ScaleAnimation} from "react-native-popup-dialog";
import PopupMsgBox from "./Pages/MainPage/PopupMsgBox";
import {missionToShowType} from "./reducers/missionDataReducer";




const INITIAL_PAGE_NUM = 1

class MainScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (
          <Title currentViewPager={navigation.state.params.currentViewPager}/>
      ),
      headerRight: (
          <View style={styles.headerRight}>
            {
              navigation.state.params.currentViewPager === 0 &&
              <Icon.Button
                  name='md-settings'
                  size={24}
                  color={Colors.defaultTextColor}
                  backgroundColor={Colors.titleBarColor}
                  onPress={() => navigation.navigate('SettingsPage', {...navigation.state.params})}/>
            }
            {
              navigation.state.params.currentViewPager === 2 &&
              <MaterialCommunityIcons.Button
                  name='format-list-bulleted'
                  size={30}
                  color={Colors.defaultTextColor}
                  backgroundColor={Colors.titleBarColor}
                  onPress={() => navigation.navigate('MissionListPage', {...navigation.state.params})}/>

            }
          </View>
      )
    }
  }

  render() {
    return (
        <View style={styles.blockContainer}>
          <View style={styles.viewPagerContainer}>
            <MViewPager
                navigation={this.props.navigation}
                initialPage={INITIAL_PAGE_NUM}/>
          </View>

          <PopupDialog
              ref={(popupDialog) => this.popupDialog = popupDialog}
              dialogAnimation={new ScaleAnimation()}
              height={'30%'}>
            <PopupMsgBox
                onLeftButtonClicked={() => {
                  this.popupDialog.dismiss()

                  this.props.fetchMissionToShow(missionToShowType.pushMission)
                }}
                onRightButtonClicked={() => this.popupDialog.dismiss()}
                dialogText="미션이 도착했어요. 확인하시겠어요?"/>
          </PopupDialog>
        </View>
    );
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (suac as async tasks) hide the splash screen
    SplashScreen.hide();

    firebase.messaging().onMessage((message) => {
      console.log('firebase onMessage')
      console.log('message: ')
      console.log(message)
      this.props.fetchNotificationMission(message)
      this.popupDialog.show()
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
    missionData: state.missionData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotificationMission: (notificationData) => dispatch(fetchNotificationMission(notificationData)),
    fetchTodayMission: () => dispatch(fetchTodayMission()),
    fetchMissionToShow: (type) => dispatch(fetchMissionToShow(type))
  }
}



const App = StackNavigator({
  MainScreen: {
    screen: connect(mapStateToProps, mapDispatchToProps)(MainScreen),
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
    },

  },
  LeadText: {
    screen: LeadText,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
    }
  },
  Mission: {
    screen: MainMission,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
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
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  TimerPage: {
    screen: TimerPage,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  CameraPage: {
    screen: CameraPage,
    navigationOptions: {
      header: null
    }
  },
  CameraButtonPage: {
    screen: CameraButtonPage,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  ScanPage: {
    screen: ScanPage,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  DetailSharePage: {
    screen: DetailSharePage,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  SettingsPage: {
    screen: SettingsPage,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  MissionListPage: {
    screen: Sharepage_mission,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  }
}, {
  initialRouteParams: {
    currentViewPager: INITIAL_PAGE_NUM,
    mission: {
      leadText: 'leadText loading...',
      time: 'time loading...',
      missionText: 'missionText loading...',
      benefitText: 'benefitText loading...',
      type: 'type loading...',
      missionPK: null
    },
    userInfo: null,
  }
});



export {MainScreen}
export default App