/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Sizes, Colors} from '../../DefaultStyles';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import MissionInformationBar from "./MissionInformationBar";
import BottomBar from "../BottomBar";
import PopupDialog, {ScaleAnimation, FadeAnimation} from "react-native-popup-dialog";
import PopupMsgBox from "./PopupMsgBox";
import {NavigationActions} from "react-navigation";

const MAIN_MISSION_PAGE_BG_COLOR = Colors.defaultPageBgColor;
const MISSION_ICON_SIZE = 30;
const MISSION_FONT_SIZE = Sizes.missionFontSize;
const MISSION_BLOCK_MARGIN = 50;
const MISSION_ICON_COLOR = '#111111';

class MainMissionPage extends Component {

  static propTypes = {
    secs: React.PropTypes.number,
    benefitText: React.PropTypes.string,
    benefitIcon: React.PropTypes.string,
    missionText: React.PropTypes.string,
    missionIconType: React.PropTypes,
  }

  renderMissionInfoBar() {
    return (
      <View style={styles.missionInfoBarContainer}>
        <MissionInformationBar
            benefitText={this.props.benefitText || 'NULL'} // deprecated
            icon={this.props.benefitIcon}
            secs={this.props.secs || 100}/>
      </View>
    )
  }

  renderMission() {
    return (
      <View style={styles.missionContainer}>
        {/* deprecated */}
        <UpperLinearGradient/>


        <View style={styles.missionBlockContainer}>
          {/* mission text */}
          <View style={styles.missionTextContainer}>
            <Text style={styles.missionText}
                  onPress={this._onMissionPress.bind(this)}>
              {this.props.missionText || 'NULL'}
            </Text>
          </View>
          {/* mission image */}
          <View style={styles.missionIconContainer}>
            <Icon.Button
                name='md-create'
                size={MISSION_ICON_SIZE}
                color={MISSION_ICON_COLOR}
                backgroundColor={Colors.defaultPageBgColor}
                onPress={this._onMissionPress.bind(this)}/>
          </View>
        </View>


        {/* deprecated */}
        <LowerLinearGradient/>

      </View>
    )
  }

  renderPopUpDialog() {
    // deprecated
    return (
      <PopupDialog
          ref={(popupDialog) => this.popupDialog = popupDialog}
          dialogAnimation={new FadeAnimation({toValue: 0})}
          height={'30%'}>
        <PopupMsgBox
            onLeftButtonClicked={() => {
              const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({routeName: 'TimerPage', params: {...this.props.navigation.state.params}})
                ]
              });
              this.popupDialog.dismiss()
              this.props.navigation.dispatch(resetAction)
            }}
            onRightButtonClicked={() => this.popupDialog.dismiss()}
            dialogText="시작할래요?"/>
      </PopupDialog>
    )
  }

  render() {
    return (
        <View style={styles.blockContainer}>
          {this.renderMissionInfoBar()}
          {this.renderMission()}
          {/* deprecated */}
          <BottomBar/>

          {this.renderPopUpDialog()}
        </View>
    );
  }

  _onMissionPress() {
    this.popupDialog.show()
  }
}

const styles = StyleSheet.create({
  blockContainer: {
    flex: 1
  },
  missionInfoBarContainer: {
    flex: -1,
    height: Sizes.titleBarHeight
  },
  missionContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: MAIN_MISSION_PAGE_BG_COLOR,
    justifyContent: 'center',
    marginBottom: Sizes.bottomBarHeight
  },
  missionBlockContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    marginLeft: MISSION_BLOCK_MARGIN,
    marginRight: MISSION_BLOCK_MARGIN

  },
  missionTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  missionIconContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  missionText: {
    fontSize: MISSION_FONT_SIZE,
    color: Colors.defaultTextColor,
    fontWeight: Sizes.middleFontWeight,
    textAlign: 'center',
  }
});

export default MainMissionPage;
