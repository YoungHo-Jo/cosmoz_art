import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import {NavigationActions} from "react-navigation";

import {Sizes, Colors} from '../../DefaultStyles';
import LowerLinearGradient from "../LowerLinearGradient";

const MAIN_MISSION_PAGE_BG_COLOR = Colors.defaultPageBgColor;
const MISSION_ICON_SIZE = 60;
const MISSION_ICON_COLOR = '#111111';

class IntroPage1 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state

    return (
      <View style={styles.blockContainer}>
        {/* intro information; icon */}
        <View style={styles.introImageContainer}>
          <Image
            style={styles.logo}
            source={require('../../icons/logo.png')}
          />
        </View>
        <View
          style={styles.introInfoContainer}>
          <Text style={styles.introText}>
            {"만나서 정말 반가워요.\n제 2번째 우연이세요.\n제 소중한 인연이 되길 바라요"}
          </Text>
          <Icon
            name='md-arrow-round-forward'
            style={styles.clickIcon}
            size={MISSION_ICON_SIZE}
            color={MISSION_ICON_COLOR}
            backgroundColor={Colors.defaultPageBgColor}
            onPress={() => this.props.navigation.navigate('IntroPage2', {...this.props.navigation.state.params})}/>
          <Text style={styles.introProgressText}>
            {"1 / 4"}
          </Text>
        </View>
        <LowerLinearGradient/>
      </View>
    );
  }

  _onIntroPress() {
    this.popupDialog.show()
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
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
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
  clickIcon: {
    alignSelf: 'center',
  },
  introProgressText: {
    fontSize: 16,
    color: '#333333',
    alignSelf: 'center'
  }
});

export default IntroPage1;