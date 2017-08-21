import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

import IntroPage1 from './IntroPage1';
import IntroPage2 from './IntroPage2';
import IntroPage3 from './IntroPage3';
import IntroPage4 from './IntroPage4';

import {Colors, Sizes} from '../../DefaultStyles';


class IntroPage extends Component {

  render() {
    return (
      <View style={styles.blockContainer}>
        <IntroPage1
          navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  }
});

export default IntroPage;