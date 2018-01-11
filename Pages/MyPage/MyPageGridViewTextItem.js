/* @flow */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types'

class MyPageGridViewTextItem extends Component {
  propTypes: {
    text: PropTypes.string.isRequired,
    colorNum: PropTypes.number.isRequired
    //onClickImage: PropTypes.func.isRequired,
  }

  render(){
    return(
      <TouchableHighlight
        style={[styles.textBox, {backgroundColor: this.randomColor()}]}
        underlayColor={'#ffffff'}>
        <Text
          style={styles.missionText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }

  randomColor(){
    switch (this.props.colorNum){
      case 0:
        return '#5078c4';
      case 1:
        return '#ff5861';
      case 2:
        return '#14bf5f';
      case 3:
        return '#ffcc36';
    }
  }
}


const styles= StyleSheet.create({
  textBox: {
    flex: 1,
    width: Dimensions.get('window').width * (40/100),
    height: Dimensions.get('window').width * (40/100),
    justifyContent: 'center',
    borderRadius: 10,
  },
  missionText: {
    color: '#ffffff',
    fontSize: 20,
    //marginVertical: 10,
    marginHorizontal: 10,
    textAlign: 'center',
    //fontWeight: 'bold'
  }
});

export default MyPageGridViewTextItem;
