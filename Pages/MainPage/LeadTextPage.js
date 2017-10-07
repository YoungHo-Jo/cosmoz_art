/* @flow */
 
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import {Colors, Sizes} from '../../DefaultStyles';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import {connect} from "react-redux";
import {missionToShowType} from "../../reducers/missionDataReducer";

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
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>

          <UpperLinearGradient/>
          <View style={styles.blockContainer}>
            <Text
                style={styles.text}
                onPress={() => {
                  console.log(missionData)
                  let mission = (missionData.missionToShow === missionToShowType.todayMission) ?
                      missionData.todayMission.mission : missionData.pushMission.mission
                  navigate('Mission', {...mission})
                }}>
              {
                missionData.missionToShow === missionToShowType.todayMission ?
                    missionData.todayMission.mission.leadText : missionData.pushMission.mission.leadText
              }
            </Text>
            <View style={styles.lineView}>
            </View>
          </View>
          <LowerLinearGradient/>
        </View>
    );
  }

  componentDidMount() {
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeadTextPage);
