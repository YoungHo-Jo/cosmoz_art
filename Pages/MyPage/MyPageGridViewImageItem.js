/* @flow */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

class MyPageGridViewImageItem extends Component {
  propTypes: {
    imageURL: PropTypes.string.isRequired,
    onClickImage: PropTypes.func.isRequired,
  }

  renderPublicIcon() {
    if (this.props.isPublic) {
      return (
        <Icon
          name = 'md-eye'
          size = {24}
          style = {{position: 'absolute', bottom: 6, right: 10, color: '#999999'}}/>
      );
    } else {
      return (
        <Icon
          name = 'md-eye-off'
          size = {24}
          style = {{position: 'absolute', bottom: 6, right: 10, color: '#999999'}}/>
      )
    }
  }

  render(){
    return(
      <TouchableHighlight
        underlayColor={'#ffffff'}
        onPress={() => this.props.onClickImage()}>
        <View>
          <Image
            style={styles.myImage}
            source={{uri: this.props.imageURL}}/>
          {this.renderPublicIcon()}
        </View>
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
