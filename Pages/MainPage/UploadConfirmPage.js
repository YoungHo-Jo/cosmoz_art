/* @flow */

import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import ImageViewerPage from '../ImageViewerPage'
import * as DefaultStyles from '../../DefaultStyles'
import * as Utills from '../../Utills'

class UploadConfirmPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ImageViewerPage imageURI={this.props.uri}/>
      </View>
    )
  }

  renderHeader() {
    return (
      <View style={styles.headerContainer}>

      </View>

    )
  }
}

const sizes = Utills.getWindowSize()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'row'
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: sizes.width,
    height: DefaultStyles.Sizes.titleBarHeight,
    backgroundColor: '#ffffff' // temp
  }

})

export default UploadConfirmPage
