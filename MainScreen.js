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
import IntroPage1 from './Pages/IntroPage/IntroPage1';
import IntroPage2 from './Pages/IntroPage/IntroPage2';
import IntroPage3 from './Pages/IntroPage/IntroPage3';
import IntroPage4 from './Pages/IntroPage/IntroPage4';

import Icon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingsPage from './Pages/SettingsPage'
import Sharepage_mission from "./Pages/SharePage/Sharepage_mission";

const INITIAL_PAGE_NUM = 0

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
  },
  IntroPage: {
    screen: IntroPage,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  IntroPage2: {
    screen: IntroPage2,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  IntroPage3: {
    screen: IntroPage3,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
  IntroPage4: {
    screen: IntroPage4,
    navigationOptions: {
      headerStyle: DefaultStyles.headerStyle,
      headerTitle: (<Title/>)
    }
  },
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


export default MainScreen;
export {App};