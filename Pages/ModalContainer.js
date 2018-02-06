/* @flow */

import React from 'react'
import {View, StyleSheet, Platform} from 'react-native'
import * as DefaultStyles from '../DefaultStyles'
import TitleBar from '../TitleBar'
import UpperLinearGradient from './UpperLinearGradient'

export default class ModalContainer extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <UpperLinearGradient/>
        <TitleBar
          titleText={this.props.titleText}
          onLeftBtnPress={() => this.props.onLeftBtnPress()}/>
        {this.props.children}
      </View>
    )
  }
}

const topMargin = Platform.select({
  ios: 15,
  android: 0
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: topMargin,
    flexDirection: 'column',
    backgroundColor: DefaultStyles.Colors.defaultPageBgColor
  }

})
