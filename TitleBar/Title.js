import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';

import {Sizes, Colors} from '../DefaultStyles';

class Title extends Component {
  constructor(props) {
    super(props)

    var isiOS = (Platform.OS === 'ios')
    this.state = {
      isIOS: isiOS
    }
  }

  render() {
    return (
      <View style={[styles.titleContainer, this.state.isIOS && {marginTop: 15}]}>
        <Image 
          style={styles.logo}
          source={require('../icons/logo_mini.png')}
        />
      </View>

    );
  }
}



const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.titleBarColor
  },
  logo: {
    width: Sizes.logoMinSize,
    height: Sizes.titleBarHeight,
    resizeMode: 'contain',
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