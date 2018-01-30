/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MViewPager from './MViewPager';
import DefaultStyles, {Sizes, Colors} from './DefaultStyles';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as MissionActions from "./actions/missionActions";
import * as ControlFlowActions from './actions/controlFlowActions';
import {connect} from "react-redux";
import firebase from './firebase'
import {missionToShowType} from "./reducers/missionDataReducer";
import {INITIAL_VIEW_PAGE} from "./reducers/index";
import { PAGES } from './reducers/constants';
import PopUpView from './PopUpView'
import PopupMsgBox from './Pages/MainPage/PopupMsgBox';
import PopupTextCard from './Pages/SharePage/PopupTextCard';
import Modal from 'react-native-modalbox'
import CameraPage from './Pages/MainPage/CameraPage'

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
        this.props.controlData.isPopupShown &&
        <PopUpView
          onPressOverlay={() => this.props.fetchPopupVisibility(false)}>
          {this.renderPopUpContent()}
        </PopUpView>
    )
  }

  renderPopUpContent() {
    switch (this.props.controlData.currentPage) {
      case (PAGES.mainMission):
        return(
          <PopupMsgBox
            dialogText={this.props.controlData.popupContent.dialogText}
            onLeftButtonClicked={() => this.props.controlData.popupContent.leftBtnFunc()}
            onRightButtonClicked={() => this.props.controlData.popupContent.rightBtnFunc()}/>
        );
      case PAGES.timer:
        return(
          <PopupMsgBox
            dialogText={this.props.controlData.popupContent.dialogText}
            onLeftButtonClicked={() => this.props.controlData.popupContent.leftBtnFunc()}
            onRightButtonClicked={() => this.props.controlData.popupContent.rightBtnFunc()}/>
        );
      case (PAGES.share):
        return(
          <PopupTextCard
            dialogText={this.props.controlData.popupContent.dialogText}
            onTextPressed={() => this.props.fetchPopupVisibility(false)}/>
        );
    }
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

      //// implement ////
      // shwo someting to display notification
    });
  }

  componentWillMount() {
    this.props.fetchTodayMission()
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNotificationMission: (notificationData) => dispatch(MissionActions.fetchNotificationMission(notificationData)),
    fetchTodayMission: () => dispatch(MissionActions.fetchTodayMission()),
    fetchMissionToShow: (type) => dispatch(MissionActions.fetchMissionToShow(type)),
    fetchPopupVisibility: (visibility) => dispatch(ControlFlowActions.fetchPopupVisibility(visibility)),
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
