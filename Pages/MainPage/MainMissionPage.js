import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Sizes, Colors} from '../../DefaultStyles';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import MissionInformationBar from "./MissionInformationBar";
import BottomBar from "../BottomBar";

const MAIN_MISSION_PAGE_BG_COLOR = Colors.defaultPageBgColor;
const MISSION_ICON_SIZE = 30;
const MISSION_FONT_SIZE = Sizes.missionFontSize;
const MISSION_BLOCK_MARGIN = 50;
const MISSION_ICON_COLOR = '#111111';


class MainMissionPage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.blockContainer}>
        {/* mission information */}
        <View style={styles.missionInfoBarContainer}>
          <MissionInformationBar/>
        </View>

        {/* mission container */}
        <View style={styles.missionContainer}>
          <UpperLinearGradient/>
          <View style={styles.missionBlockContainer}>
            {/* mission text */}
            <View style={styles.missionTextContainer}>
              <Text style={styles.missionText}
                onPress={() => navigate('TimerPage')}>
                내가 생각하는 {'\n'}우주 외계인을 그려봐요.
              </Text>

            </View>
            {/* mission image */}
            <View style={styles.missionIconContainer}>
              <Icon
                name='md-create'
                size={MISSION_ICON_SIZE}
                color={MISSION_ICON_COLOR}
              />
            </View>

          </View>
          <LowerLinearGradient/>
        </View>
        <BottomBar/>

      </View>
    );
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

export default MainMissionPage;