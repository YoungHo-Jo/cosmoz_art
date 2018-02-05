/* @flow */

import React, {Component} from 'react'
import {View, StyleSheet, TouchableHighlight} from 'react-native'
import ImageViewerPage from '../ImageViewerPage'
import * as DefaultStyles from '../../DefaultStyles'
import * as Utills from '../../Utills'
import Icon from 'react-native-vector-icons/Ionicons';


const BUTTON_SIZE = 30
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
        <View style={styles.leftButtonContainer}>
          <TouchableHighlight
            onPress={this.props.onPressCloseBtn}>
            <Icon
                name='md-close'
                color={'#ffffff'}
                backgroundColor='#000000'
                size={BUTTON_SIZE}/>
          </TouchableHighlight>
          <TouchableHighlight
              style={{marginLeft: 15}}
              onPress={this.props.onPressRedoBtn}>
            <Icon
                name='md-redo'
                color={'#ffffff'}
                backgroundColor='#000000'
                size={BUTTON_SIZE}/>
          </TouchableHighlight>
        </View>
        <View style={styles.rightButtonContainer}>
          <TouchableHighlight
            onPress={this.props.onPressCheckBtn}>
            <Icon
                name='md-checkmark'
                color={'#ffffff'}
                backgroundColor='#000000'
                size={BUTTON_SIZE}/>
          </TouchableHighlight>
        </View>

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
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftButtonContainer: {
    position: 'absolute',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    left: 15
  },
  rightButtonContainer: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
    right: 15
  }
})

export default UploadConfirmPage
