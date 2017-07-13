import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {TitleBarHeight, } from '../../DefaultStyles';
import MissionInformationBar from './MissionInformationBar';

const MAIN_MISSION_PAGE_BG_COLOR = '#889922';

class MainMission extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        {/* mission information */}
        <View style={styles.missonInfoBarContainer}>
          <MissionInformationBar/>
        </View>


        {/* mission container */}
        <View style={styles.missionContainer}>
          {/* mission text */}
          <View>

          </View>
          {/* mission image */}
          <View>

          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  missonInfoBarContainer: {
    flex: -1,
    height: TitleBarHeight
  },
  missionContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  missionTextContainer: {

  },
  missionIconContainer: {
    flex: -1,
    
  }
});

export default MainMission;