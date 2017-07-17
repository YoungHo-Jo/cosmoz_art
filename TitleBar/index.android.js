import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// ours
import Title from './Title';
import { Colors, Sizes } from '../DefaultStyles';

class TitleBar extends Component {
  state = {}
  render() {
    return (
      <View style={styles.titleBarContainer}>
        <Title/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleBarContainer: {
    flexDirection: 'column',
    height: Sizes.titleBarHeight,
    alignItems: 'center',
    backgroundColor: Colors.titleBarColor
  },

}); 


export default TitleBar;
