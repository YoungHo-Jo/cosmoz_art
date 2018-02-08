/* @flow */

import React from 'react'
import {View, StyleSheet, Platform} from 'react-native'
import * as DefaultStyles from '../DefaultStyles'
import TitleBar from '../TitleBar'
import UpperLinearGradient from './UpperLinearGradient'
import PropTypes from 'prop-types'

export default class ModalContainer extends React.Component {

  static propTypes = {
    titleText: PropTypes.string,
    onLeftBtnPress: PropTypes.func
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBar
          titleText={this.props.titleText}
          onLeftBtnPress={() => this.props.onLeftBtnPress()}/>
        <UpperLinearGradient/>
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
