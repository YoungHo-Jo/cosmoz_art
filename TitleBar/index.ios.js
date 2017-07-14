import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// ours
import Title from './Title';
import { Colors } from '../DefaultStyles';

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
    flex: 1,
    flexDirection: 'column',
    height: 30,
    alignItems: 'center',
    backgroundColor: Colors.titleBarColor
  },

});


export default TitleBar;
