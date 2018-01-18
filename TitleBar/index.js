/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// ours
import Title from './Title';
import { Colors, Sizes } from '../DefaultStyles';
import {connect} from 'react-redux'

class TitleBar extends Component {
  render() {
    return (
      <View style={styles.titleBarContainer}>
        <Title currentViewPager={this.props.controlData.currentViewPage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleBarContainer: {
    flexDirection: 'column',
    height: Sizes.titleBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.titleBarColor
  },

});


function mapStateToProps(state) {
  return {
    controlData: state.controlFlowReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)
