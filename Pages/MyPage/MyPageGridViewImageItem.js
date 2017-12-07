/* @flow */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';

class MyPageGridViewImageItem extends Component {
  propTypes: {
    imageURL: React.PropTypes.string.isRequired,
    onClickImage: React.PropTypes.func.isRequired,
  }

  render(){
    return(
      <TouchableHighlight
        underlayColor={'#ffffff'}
        onPress={() => this.props.onClickImage()}>
        <Image
          style={styles.myImage}
          source={{uri: this.props.imageURL}}/>
      </TouchableHighlight>
    );
  }
}

const styles= StyleSheet.create({
  myImage: {
    flex: 1,
    width: Dimensions.get('window').width * (40/100),
    height: Dimensions.get('window').width * (40/100),
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  }
});

export default MyPageGridViewImageItem;
