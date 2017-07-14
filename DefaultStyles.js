import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

// const fontSize = ; const titleSize = ; const titlebarSize = ; const topMargin
// = ; const bottomMargin = ; const leftMargin = ; const rightMargin = ; const
// topPadding = ; const bottomPadding = ; const leftPadding = ; const
// rightPadding = ; const buttonSize = ;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  pageTopContainer: {
    flex: 93
  },
  pageBottomContainer: {
    flex: 7,
  }
});

export const Sizes = {
  titleBarHeight: 45,
  bottomBarHeight: 75,
  logoMinSize: 55
};

export const Colors = {
  defaultBgColor: '#d1d1d1',
  topBarBgColor: '#ffffff',
  bottomBarBgColor: '#ffffff',
  defaultTextColor: '#333333',
  titleBarColor: '#f7f7f7',
};

export const Margins = {
  right: 5,
  left: 5,
  top: 8,
  bottom: 8
};
// paddings margins colors
export default styles;
