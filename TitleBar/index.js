/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

// ours
import Title from './Title';
import { Colors, Sizes } from '../DefaultStyles';
import {connect} from 'react-redux'
import {fetchCurrentPage} from '../actions/controlFlowActions'
import {PAGES} from '../reducers/constants'

class TitleBar extends Component {
  render() {
    return (
      <View style={styles.titleBarContainer}>
        {this.renderLeftBtn()}
        <Title currentViewPager={this.props.controlData.currentViewPage}/>
        {this.renderRightBtn()}
      </View>
    );
  }

  renderLeftBtn() {
    return (
      <TouchableHighlight style={styles.leftBtnContainer}
            onPress={() => this.props.fetchCurrentPage(PAGES.leadText)}>
            <Text>Back</Text>
      </TouchableHighlight>
    )
  }

  renderRightBtn() {
    return (
      <TouchableHighlight style={styles.rightBtnContainer}>
          <Text>Back</Text>
      </TouchableHighlight>
    )
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
  leftBtnContainer: {
    width: Sizes.titleBarHeight,
    height: Sizes.titleBarHeight,
    position: 'absolute',
    left: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightBtnContainer: {
    width: Sizes.titleBarHeight,
    height: Sizes.titleBarHeight,
    position: 'absolute',
    right: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


function mapStateToProps(state) {
  return {
    controlData: state.controlFlowReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentPage: page => dispatch(fetchCurrentPage(page))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)
