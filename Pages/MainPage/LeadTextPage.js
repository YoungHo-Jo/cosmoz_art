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
import {missionToShowType} from "../../reducers/missionDataReducer";
import {fetchCurrentPage} from '../../actions/controlFlowActions'
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
  }

  render() {
    const {missionData} = this.props
    return (
        <View style={styles.container}>

          <View style={styles.blockContainer}>
            <Text
                style={styles.text}
                onPress={() => {
                  console.log(missionData)
                  let mission = (missionData.missionToShow === missionToShowType.todayMission) ?
                      missionData.todayMission.mission : missionData.pushMission.mission
                  this.props.fetchCurrentPage(PAGES.mainMission);
                }}>
              {
                missionData.missionToShow === missionToShowType.todayMission ?
                    missionData.todayMission.mission.leadText : missionData.pushMission.mission.leadText
              }
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
    fetchCurrentPage: page => dispatch(fetchCurrentPage(page))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeadTextPage);
