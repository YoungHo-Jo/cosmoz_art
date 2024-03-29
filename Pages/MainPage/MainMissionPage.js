/* @flow */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Sizes, Colors} from '../../DefaultStyles';
import MissionInformationBar from "./MissionInformationBar";
import {connect} from 'react-redux'
import * as ControlActions from '../../actions/controlFlowActions'
import * as UserActions from '../../actions/userActions'
import * as MissionReducers from '../../reducers/missionDataReducer'
import {PAGES} from '../../reducers/constants'
import PopupMsgBox from '../../PopupMsgBox'

const MAIN_MISSION_PAGE_BG_COLOR = Colors.defaultPageBgColor;
const MISSION_ICON_SIZE = 30;
const MISSION_FONT_SIZE = Sizes.missionFontSize;
const MISSION_BLOCK_MARGIN = 50;
const MISSION_ICON_COLOR = '#111111';

class MainMissionPage extends Component {
  constructor(props) {
    super(props)
    const {missionData} = this.props
    this.state = {
      mission: missionData.missionToShow == MissionReducers.missionToShowType.todayMission ?
        missionData.todayMission.mission : missionData.pushMission.mission
    }
  }

  renderMissionInfoBar() {
    return (
      <View style={styles.missionInfoBarContainer}>
        <MissionInformationBar
          //benefitText={this.state.mission.benefit.text || 'NULL'}
          //icon={this.state.mission.benefit.type}
          secs={this.state.mission.time}/>
      </View>
    );
  }

  renderStartIcon(type) {
    switch (type) {
      case 'drawing': return (
        <Icon.Button
            name='md-color-palette'
            size={MISSION_ICON_SIZE}
            color={MISSION_ICON_COLOR}
            backgroundColor={Colors.defaultPageBgColor}
            onPress={this._onMissionPress.bind(this)}/>
        );
      case 'capturing': return (
        <Icon.Button
            name='md-photos'
            size={MISSION_ICON_SIZE}
            color={MISSION_ICON_COLOR}
            backgroundColor={Colors.defaultPageBgColor}
            onPress={this._onMissionPress.bind(this)}/>
        );
      case 'writing': return (
        <Icon.Button
            name='md-create'
            size={MISSION_ICON_SIZE}
            color={MISSION_ICON_COLOR}
            backgroundColor={Colors.defaultPageBgColor}
            onPress={this._onMissionPress.bind(this)}/>
        );
    }
  }

  renderMission() {
    return (
      <View style={styles.missionContainer}>
        <View style={styles.missionBlockContainer}>
          {/* mission text */}
          <View style={styles.missionTextContainer}>
            <Text style={styles.missionText}
                  onPress={this._onMissionPress.bind(this)}>
              {this.state.mission.mission.text || 'NULL'}
            </Text>
          </View>
          {/* mission image */}
          <View style={styles.missionIconContainer}>
            {this.renderStartIcon(this.state.mission.mission.type)}
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
        <View style={styles.blockContainer}>
          {this.renderMissionInfoBar()}
          {this.renderMission()}
        </View>
    );
  }

  _onMissionPress() {
    this.props.fetchPopup(true, <PopupMsgBox
      dialogText='정말로 시작하시겠어요?'
      onLeftButtonClicked={() => {
        this.props.fetchCurrentPage(PAGES.timer)
        this.props.fetchIsMissionDoing(true, this.state.mission.missionID)
        this.props.fetchPopup(false)
        this.props.fetchTitleBarLeftBtn(false, null)
      }}
      onRightButtonClicked={() => this.props.fetchPopup(false)}/>)
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
    lineHeight: MISSION_FONT_SIZE + 15,
  }
});

function mapStateToProps(state) {
  return {
      missionData: state.missionData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentPage: page => dispatch(ControlActions.fetchCurrentPage(page)),
    fetchIsMissionDoing: (doing, missionPK) => dispatch(UserActions.fetchIsMissionDoing(doing, missionPK)),
    fetchPopup: (show, content?) => dispatch(ControlActions.fetchPopup(show, content)),
    fetchTitleBarLeftBtn: (leftBtnShow, leftBtnFunc) => dispatch(ControlActions.fetchTitleBarLeftBtn(leftBtnShow, leftBtnFunc))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMissionPage);
