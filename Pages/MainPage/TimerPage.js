/* @flow */

import PropTypes from 'prop-types';

import React, { Component } from 'react';
import {StyleSheet, View, Dimensions, Text,} from 'react-native';

import Timer from './Timer';
import {Colors, Sizes} from "../../DefaultStyles";
import {MKSwitch, MKColor} from "react-native-material-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {PAGES} from '../../reducers/constants';
import {fetchCurrentPage} from '../../actions/controlFlowActions';

var WINDOW_W = Dimensions.get('window').width;
var WINDOW_H = Dimensions.get('window').height;

class TimerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerStart: true
    }
  }

  renderTimer() {
    return (
      <View style={styles.timerContainer}>
        <Timer
          start={this.state.timerStart}
          secs={100} //// implement ////
          onTimerFinished={() => this._moveToNextPage()}
          onPressCountDown={() => console.log('show dialog 벌써 다 했나요')}/>
      </View>
    )
  }

  renderMission() {
    return (
      <View style={styles.missionTextContainer}>
        <Text style={styles.missionText}>
          {this.props.missionData.todayMission.mission.mission.text}
        </Text>
      </View>
    )
  }

  renderToggle() {
    return(
      <View style={styles.toggleFlexContainer}>
        <View style={styles.toggleContainer}>
          <Icon
              name='bell'
              size={28}
              color={'#777777'}/>
          <MKSwitch
              style={styles.appleSwitch}
              onColor='rgba(0, 160, 235, 0.3)'
              thumbOnColor='rgba(0, 160, 235, 1)'
              rippleColor='rgba(0, 160, 235, 0.2)'
              onPress={() => console.log('vibration switch pressed')}
              onCheckedChange={(e) => console.log('vibration switch checked', e)}/>
          <Icon
              name='bell-off'
              size={28}
              color={'#777777'}/>
        </View>

      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {/*Timer*/}
        {this.renderTimer()}

        {/*Mission*/}
        {this.renderMission()}

        {/*alarm toggle switch*/}
        {this.renderToggle()}
      </View>
    );
  }

  _moveToNextPage() {
    this.setState({
      timerStart: false
    })

    //// implement ////
    console.log('show camera button page')
    this.props.fetchCurrentPage(PAGES.cameraButton)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.defaultPageBgColor
  },
  timerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: WINDOW_H*(5/100)
    //backgroundColor: '#cdefab'
  },
  missionTextContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  //  backgroundColor: '#abcdef'
  },
  missionText: {
    fontWeight: Sizes.middleFontWeight,
    fontSize: Sizes.missionFontSize,
    textAlign: 'center',
    lineHeight: Sizes.missionFontSize + 15,
    color: Colors.defaultTextColor,
    marginHorizontal: WINDOW_W*(10/100),
  },
  toggleFlexContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    //backgroundColor:'#fedcba'
  },
  toggleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  switch: {
    //marginTop: 2,
    // marginBottom: 5,
  },


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

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);
