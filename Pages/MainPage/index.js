/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';


import LeadTextPage from './LeadTextPage';
import {Colors, Sizes} from '../../DefaultStyles';


class MainPage extends Component {

  render() {
    return (
        <View style={styles.blockContainer}>
          <LeadTextPage
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
    marginBottom: Sizes.bottomBarHeight
  }
});


export default MainPage;
