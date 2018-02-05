/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform, BackHandler} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MViewPager from './MViewPager';
import DefaultStyles, {Sizes, Colors} from './DefaultStyles';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as MissionActions from "./actions/missionActions";
import * as ControlFlowActions from './actions/controlFlowActions';
import * as UserActions from './actions/userActions'
import {connect} from "react-redux";
import firebase from './firebase'
import {missionToShowType} from "./reducers/missionDataReducer";
import {INITIAL_VIEW_PAGE} from "./reducers/index";
import { PAGES } from './reducers/constants';
import PopUpView from './PopUpView'
import PopupTextCard from './Pages/SharePage/PopupTextCard';
import Modal from 'react-native-modalbox'
import CameraPage from './Pages/MainPage/CameraPage'
import * as LocalStorage from './LocalStorage'

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
        <View style={styles.blockContainer}>
          <View style={styles.viewPagerContainer}>
            <MViewPager
                initialPage={INITIAL_VIEW_PAGE}/>
          </View>
          {this.renderPopUpView()}
          {this.renderModal()}
        </View>
    );
  }

  renderPopUpView() {
    return (
        this.props.controlData.popupDialog.show &&
        <PopUpView
          onPressOverlay={() => this.props.fetchPopup(false)}>
          {this.props.controlData.popupDialog.content}
        </PopUpView>
    )
  }

  renderModal() {
    return (
      <Modal
        style={{position: 'absolute', top: 0, bottom: 0, left: 0, right:0, backgroundColor: '#000000'}}
        ref='modal'
        swipeToClose={true}
        onClosed={() => this.props.fetchModal(false, null)}
        onOpened={() => console.log('modal onOpen')}
        onClosingState={() => console.log('modal onClosingState')}
        position='top'>
          {this.props.controlData.modal.content}
      </Modal>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.controlData.modal.show) {
      this.refs.modal.open()
    }
    if (nextProps.controlData.modal.show == false) {
      this.refs.modal.close()
    }
    return true
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
    });

    BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.props.controlData.popupDialog.show) {
        this.props.fetchPopup(false)
        return true
      } else if(this.props.controlData.modal.show) {
        this.props.fetchModal(false)
        return true
      }
      return false
    })
  }

  componentWillMount() {
    this.props.fetchTodayMission()

    // Do autologin
    LocalStorage.isAutoLoginEnabled().then(enabled => {
      if(enabled) {
        LocalStorage.getId().then((id) => {
          LocalStorage.getPW().then(pw => {
            this.props.fetchLogin({
              id: id,
              pw: pw
            }, true).then(() => {
              console.log('autologin succeed')
            })
          })
        })
      }
    })
  }



  componentWillReceiveProps(nextProps) {
    const prevUserData = this.props.userData
    const nextUserData = nextProps.userData
    if((!prevUserData.isLogin && nextUserData.isLogin) ||
      (!prevUserData.userInfo.artsNeedUpdate && nextUserData.userInfo.artsNeedUpdate)) {
      this.props.fetchUserArts()
    }
  }


}


const topMargin = Platform.select({
  ios: 15,
  android: 0
})

const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.defaultBgColor,
    marginTop: topMargin

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
  },

});


function mapStateToProps(state) {
  return {
    missionData: state.missionData,
    controlData: state.controlFlowReducer,
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotificationMission: (notificationData) => dispatch(MissionActions.fetchNotificationMission(notificationData)),
    fetchTodayMission: () => dispatch(MissionActions.fetchTodayMission()),
    fetchMissionToShow: (type) => dispatch(MissionActions.fetchMissionToShow(type)),
    fetchPopup: (show, content?) => dispatch(ControlFlowActions.fetchPopup(show, content)),
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content)),
    fetchLogin: (loginInfo, isPwEncrypted) => dispatch(UserActions.fetchLogin(loginInfo, isPwEncrypted)),
    fetchUserArts: () => dispatch(UserActions.fetchUserArts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
