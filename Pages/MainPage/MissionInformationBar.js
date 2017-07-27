import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



import {Colors, Margins} from '../../DefaultStyles';

const ICON_CONTAINER_SIZE = 40;
const ICON_SIZE = 25;
const ICON_COLOR = '#111111';
const TEXT_SIZE = 13;
const BAR_BGCOLOR= '#f7f7f7';

class MissionInformationBar extends Component {
  static propTypes = {
    benefitText: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={styles.blockContainer}>
        {/* left */}
        <View style={styles.leftContainer}>
          {/* mission icon */}
          <View style={styles.missionIconContainer}>
            <Icon
              name='md-bulb'
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          </View>
          {/* benefit text */}
          <View style={styles.benefitTextContinaer}>
            <Text style={styles.infoText}>
              {this.props.benefitText}
            </Text>
          </View>
        </View>

        {/* right */}
        <View style={styles.rightContainer}>
          {/* time icon */}
          <View style={styles.timeIconContainer}>
            <Icon
              name='md-time'
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          </View>
          {/* time */}
          <View style={styles.timeContainer}>
            <Text style={styles.infoText}>
              {this.props.time}
            </Text>
          </View>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BAR_BGCOLOR
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
  benefitTextContinaer: {
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
    color: Colors.defaultTextColor,

  }
});

export default MissionInformationBar;