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
        {this.props.controlData.titleBar.leftBtnShow && this.renderLeftBtn()}
        <Title currentViewPager={this.props.controlData.currentViewPage}/>
        {this.props.controlData.titleBar.rightBtnShow && this.renderRightBtn()}
      </View>
    );
  }

  renderLeftBtn() {
    return (
      <TouchableHighlight style={styles.leftBtnContainer}
            onPress={() => this.props.controlData.titleBar.leftBtnFunc()}>
            <Text>Back</Text>
      </TouchableHighlight>
    )
  }

  renderRightBtn() {
    return (
      <TouchableHighlight style={styles.rightBtnContainer}
            onPress={() => this.props.controlData.titleBar.rightBtnFunc()}>
          {this.getRightBtn(this.props.controlData.currentPage)}
      </TouchableHighlight>
    )
  }

  getRightBtn(page) {
    switch(page) {
      case PAGES.my:
        return <Text>setting</Text>
      case PAGES.share:
        return <Text>missionHistory</Text>
    }
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
