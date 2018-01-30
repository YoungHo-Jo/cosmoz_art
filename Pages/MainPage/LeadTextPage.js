/* @flow */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import {Colors, Sizes} from '../../DefaultStyles';
import {connect} from "react-redux";
import * as MissionDataReducer from "../../reducers/missionDataReducer";
import * as ControlFlowActions from '../../actions/controlFlowActions'
import * as MissionActions from '../../actions/missionActions'
import * as UserActions from '../../actions/userActions'
import {PAGES} from '../../reducers/constants'

const LEAD_TEXT_SIZE = Sizes.leadTextSize;
const LEAD_TEXT_COLOR = Colors.defaultTextColor;
const SIDE_MARGIN = 50;
const BOTTOM_BAR_HEIGHT = 3;
const BOTTOM_BAR_COLOR = Colors.defaultTextColor;
const BOTTOM_BAR_WIDTH_MARGIN = 100;

class LeadTextPage extends Component {
  constructor(props) {
    super(props)

    const {missionData} = props

    this.state = {
      mission: missionData.missionToShow === MissionDataReducer.missionToShowType.todayMission ?
        missionData.todayMission.mission : missionData.pushMission.mission
    }
  }

  componentWillMount() {

  }

  render() {
    const {mission} = this.state
    return (
        <View style={styles.container}>
          <View style={styles.blockContainer}>
            <Text
                style={styles.text}
                onPress={() => {
                  this.props.fetchCurrentPage(PAGES.mainMission)
                  this.props.fetchIsMissionDoing(true)
                  this.props.fetchTitleBarLeftBtn(true, () => {
                    this.props.fetchCurrentPage(PAGES.leadText)
                    this.props.fetchTitleBarLeftBtn(false, null)
                    this.props.fetchIsMissionDoing(false)
                  })
                }}>
              {mission.leadText}
            </Text>
            <View style={styles.lineView}>
            </View>
          </View>
        </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  blockContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: SIDE_MARGIN,
    marginRight: SIDE_MARGIN,
  },
  lineView: {
    height: BOTTOM_BAR_HEIGHT,
    alignSelf: 'stretch',
    borderBottomColor: BOTTOM_BAR_COLOR,
    borderBottomWidth: BOTTOM_BAR_HEIGHT,
    marginLeft: BOTTOM_BAR_WIDTH_MARGIN,
    marginRight: BOTTOM_BAR_WIDTH_MARGIN,
  },
  text: {
    color: LEAD_TEXT_COLOR,
    fontSize: LEAD_TEXT_SIZE,
    fontWeight: '300',
    marginBottom: 20,
    textAlign: 'center',
  }

});



function mapStateToProps(state) {
  return {
    missionData: state.missionData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentPage: page => dispatch(ControlFlowActions.fetchCurrentPage(page)),
    fetchTitleBarLeftBtn: (show, leftBtnFunc) => dispatch(ControlFlowActions.fetchTitleBarLeftBtn(show, leftBtnFunc)),
    fetchIsMissionDoing: isDoing => dispatch(UserActions.fetchIsMissionDoing(isDoing))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeadTextPage);
