import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Sizes, Colors} from '../../DefaultStyles';
import MissionInformationBar from './MissionInformationBar';

const MAIN_MISSION_PAGE_BG_COLOR = Colors.titleBarColor;
const MISSION_ICON_SIZE = 30;
const MISSION_FONT_SIZE = Sizes.missionFontSize;
const MISSION_BLOCK_MARGIN = 50;
const MISSION_ICON_COLOR = '#111111';


class MainMission extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* mission information */}
        <View style={styles.missionInfoBarContainer}>
          <MissionInformationBar/>
        </View>

        {/* mission container */}
        <View style={styles.missionContainer}>

          <View style={styles.missionBlockContainer}>
            {/* mission text */}
            <View style={styles.missionTextContainer}>
              <Text style={styles.missionText}>
                내가 생각하는 우주 외계인을 그려봐요.
              </Text>

            </View>
            {/* mission image */}
            <View style={styles.missionIconContainer}>
              <Icon
                name='md-create'
                size={MISSION_ICON_SIZE}
                color={MISSION_ICON_COLOR}
              />
              <Button
                title={'hi'}
                onPress={() => navigate('CameraPage')}/>
            </View>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    flex: -1,
    width: MISSION_ICON_SIZE + 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionText: {
    fontSize: MISSION_FONT_SIZE,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default MainMission;