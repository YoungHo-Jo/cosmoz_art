/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import Image from 'react-native-transformable-image';


class ImageViewerPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageViewer}
          source={{
            uri: this.props.imageURL
          }}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    position: 'absolute',
    top: 30
  },
  imageViewer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginTop: 50,
    marginLeft: 50,
  }
});

export default ImageViewerPage;
