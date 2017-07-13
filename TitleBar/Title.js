import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {LogoMinSize} from '../DefaultStyles';

class Title extends Component {

  render() {
    return (
      <View style={styles.titleContainer}>
        <Image 
          style={styles.logo}
          source={require('../Icons/logo_mini.png')}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: LogoMinSize,
    resizeMode: 'contain'
  },
  titleText: {
    flex: 1,
    color: '#333333',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default Title;