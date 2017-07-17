import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

// const fontSize = ; const titleSize = ; const titlebarSize = ; const topMargin
// = ; const bottomMargin = ; const leftMargin = ; const rightMargin = ; const
// topPadding = ; const bottomPadding = ; const leftPadding = ; const
// rightPadding = ; const buttonSize = ;


export const Sizes = {
  titleBarHeight: 45,
  bottomBarHeight: 45,
  logoMinSize: 55,
  missionFontSize: 20,
  leadTextSize: 20,
  linearGradientHeight: 5,
};

export const Colors = {
  defaultBgColor: '#d1d1d1',
  topBarBgColor: '#ffffff',
  bottomBarBgColor: '#ffffff',
  defaultTextColor: '#333333',
  titleBarColor: '#f7f7f7',
  defaultPageBgColor: '#ffffff'
};

export const Margins = {
  right: 5,
  left: 5,
  top: 8,
  bottom: 8
};

// paddings margins colors

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
    height: Sizes.titleBarHeight,
    backgroundColor: Colors.titleBarColor
  },
  headerTextStyle: {

  }
});


export default defaultStyles;
