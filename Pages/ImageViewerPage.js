import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import Image from 'react-native-transformable-image';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons';


class ImageViewerPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/*<Animatable.View
          ref="view">
          <Icon
            name={'md-colse-circle'}
            color={'#ffffff'}
            style={styles.closeButton}/>
        </Animatable.View>*/}
        <Image
          style={styles.imageViewer}
          source={{uri: this.props.navigation.state.params.imageURL}}
          onPress={() => this.onClickZoomedImage()}
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