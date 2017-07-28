import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';

// const fontSize = ; const titleSize = ; const titlebarSize = ; const topMargin
// = ; const bottomMargin = ; const leftMargin = ; const rightMargin = ; const
// topPadding = ; const bottomPadding = ; const leftPadding = ; const
// rightPadding = ; const buttonSize = ;


export const Sizes = {
  titleBarHeight: 50,
  bottomBarHeight: 45,
  logoMinSize: 55,
  missionFontSize: 25,
  leadTextSize: 25,
  linearGradientHeight: 20,
  fontSize: 20,
  fontWeight: '300',
  middleFontWeight: '500'
};

export const Colors = {
  defaultBgColor: '#ffffff',
  topBarBgColor: '#ffffff',
  bottomBarBgColor: '#ffffff',
  defaultTextColor: '#333333',
  titleBarColor: '#ffffff',
  defaultPageBgColor: '#ffffff',
};


export const Margins = {
  right: 5,
  left: 5,
  top: 8,
  bottom: 8
};

var isiOS = false;
// paddings margins colors
if (Platform.OS === 'ios') {
  isiOS = true
}
const defaultStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  pageTopContainer: {
    flex: 93
  },
  pageBottomContainer: {
    flex: 7,
  },
  headerStyle: {
    height: Sizes.titleBarHeight + ((isiOS) ? 20 : 0),
    backgroundColor: Colors.titleBarColor
  },
  headerTextStyle: {

  }
});


export default defaultStyles;
