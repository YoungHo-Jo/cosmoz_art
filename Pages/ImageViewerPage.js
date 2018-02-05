/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import Image from 'react-native-transformable-image';
import * as Utills from '../Utills'

class ImageViewerPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageViewer}
          source={{
            uri: this.props.imageURI
          }}
          />
      </View>
    )
  }
}

const sizes = Utills.getWindowSize()


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    position: 'absolute'
  },
  imageViewer: {
    width: sizes.width,
    height: sizes.height
  }
});

export default ImageViewerPage;
