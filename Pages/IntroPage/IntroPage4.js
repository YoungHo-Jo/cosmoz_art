import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import {NavigationActions} from "react-navigation";

import {Sizes, Colors} from '../../DefaultStyles';
import LowerLinearGradient from "../LowerLinearGradient";

const MAIN_MISSION_PAGE_BG_COLOR = Colors.defaultPageBgColor;
const MISSION_ICON_SIZE = 120;
const MISSION_ICON_COLOR = '#111111';

class IntroPage4 extends Component {
  render() {
    return (
      <View style={styles.blockContainer}>
        {/* intro information; icon */}
        <View style={styles.introImageContainer}>
          <Text style={styles.introImageText}>
            {"공유"}
          </Text>
          <Icon
            name='md-share'
            style={styles.notiIcon}
            size={MISSION_ICON_SIZE}
            color={MISSION_ICON_COLOR}
            backgroundColor={Colors.defaultPageBgColor}/>
        </View>
        <View style={styles.introInfoContainer}>
          <Text
            style={styles.introText}
            onPress={() => {
              const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({routeName: 'MainScreen', params: {...this.props.navigation.state.params}})
                ]
              });
              this.props.navigation.dispatch(resetAction)
            }}>
            {"당신의 감성을 위한 미션을\n알려드립니다"}
          </Text>
          <Text style={styles.introProgressText}>
            {"4 / 4"}
          </Text>
        </View>
        <LowerLinearGradient/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  introImageContainer: {
    flex: 1,
    backgroundColor: MAIN_MISSION_PAGE_BG_COLOR,
    justifyContent: 'flex-start',
  },
  introImageText: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 20,
    color: '#333333'
  },
  introInfoContainer: {
    flex: 1,
    backgroundColor: MAIN_MISSION_PAGE_BG_COLOR,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  introText: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 32,
    color: '#333333',
  },
  notiIcon: {
    alignSelf: 'center',
  },
  introProgressText: {
    fontSize: 16,
    color: '#333333',
    alignSelf: 'center'
  }
});

export default IntroPage4;