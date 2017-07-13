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

    backgroundColor: '#b8860b'
  }
});


// sizes
export const TitleBarHeight = 45;
export const BottomBarHeight = 75;
export const LogoMinSize = 55;

// paddings

// margins

// colors
export const DefaultBgColor = '#dadada';
export const TitleBarBgColor = '#eeeeee';
export const BottomBarBgColor = '#ffffff';
export const TextColor = '#333333';


export default styles;


