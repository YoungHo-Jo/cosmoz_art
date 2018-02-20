/* @flow */

import PropTypes from 'prop-types';

import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, Margins} from '../../DefaultStyles';
import * as Utills from '../../Utills'

const ICON_CONTAINER_SIZE = 40;
const ICON_SIZE = 25;
const ICON_COLOR = '#111111';
const TEXT_SIZE = 13;
const BAR_BGCOLOR = '#f7f7f7';

class MissionInformationBar extends Component {
  static propTypes = {
    benefitText: PropTypes.string.isRequired,
    icon: PropTypes.string,
    secs: PropTypes.number
  }

  static defaultProps = {
    benefitText: '오늘 두 눈이 떠져요',
    icon: 'focus',
  }

  renderIcon(benefitType) {
    switch (benefitType) {
      case 'curious': return (
        <Image
          source = {require('../../icons/curious.png')}
          style={{height: ICON_SIZE, resizeMode: 'contain'}}/>
        );
      case 'focus': return (
        <Image
          source = {require('../../icons/focus.png')}
          style={{height: ICON_SIZE, resizeMode: 'contain'}}/>
        );
      case 'keen': return (
        <Image
          source = {require('../../icons/keen.png')}
          style={{height: ICON_SIZE, resizeMode: 'contain'}}/>
        );
      case 'imagine': return (
        <Image
          source = {require('../../icons/imagine.png')}
          style={{height: ICON_SIZE, resizeMode: 'contain'}}/>
        );
      case 'oneofakind': return (
        <Image
          source = {require('../../icons/oneofakind.png')}
          style={{height: ICON_SIZE, resizeMode: 'contain'}}/>
        );
      case 'sensibility': return (
        <Image
          source = {require('../../icons/sensibility.png')}
          style={{height: ICON_SIZE, resizeMode: 'contain'}}/>
        );
    }
  }


  render() {
    return (
      <View style={styles.blockContainer}>
        {/* left */}
        <View style={styles.leftContainer}>
          {/* mission icon */}
          <View style={styles.missionIconContainer}>
            {this.renderIcon(this.props.icon)}
          </View>
          {/* benefit text */}
          <View style={styles.benefitTextContainer}>
            <Text style={styles.infoText}>
              {this.props.benefitText}
            </Text>
          </View>
        </View>

        {/* right */}
        <View style={styles.rightContainer}>
          {/* time icon */}
          <View style={styles.timeIconContainer}>
            <Icon name='md-time' size={ICON_SIZE} color={ICON_COLOR}/>
          </View>
          {/* time */}
          <View style={styles.timeContainer}>
            <Text style={styles.infoText}>
              {/*{this.props.time}*/}
              {this.secsToStr(this.props.secs)}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  secsToStr(secs) {
    var sec = secs % 60
    var min = parseInt(secs / 60)
    var secStr = (sec < 10)
      ? '0' + sec
      : sec;
    var minStr = (min < 10)
      ? '0' + min
      : min;
    return minStr + ':' + secStr
  }
}


let size = Utills.getWindowSize()
const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BAR_BGCOLOR,
    width: size.width
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: Margins.left
  },
  rightContainer: {
    flex: -1,
    width: 80,
    flexDirection: 'row',
    marginRight: Margins.right + 10
  },
  missionIconContainer: {
    flex: -1,
    width: ICON_CONTAINER_SIZE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  benefitTextContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  timeIconContainer: {
    flex: -1,
    width: ICON_CONTAINER_SIZE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoText: {
    fontSize: TEXT_SIZE,
    color: Colors.defaultTextColor
  },
  timeText: {
    fontSize: TEXT_SIZE,
    color: Colors.defaultTextColor
  }
});

export default MissionInformationBar;
