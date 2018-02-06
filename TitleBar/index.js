/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

// ours
import Title from './Title';
import { Colors, Sizes } from '../DefaultStyles';
import {connect} from 'react-redux'
import {fetchCurrentPage} from '../actions/controlFlowActions'
import {PAGES} from '../reducers/constants'
import Icon from 'react-native-vector-icons/Ionicons';


class TitleBar extends Component {
  render() {
    if(this.props.titleText) {
      return (
        <View style={styles.titleBarContainer}>
          {this.props.onLeftBtnPress && this.renderLeftBtn(this.props.onLeftBtnPress)}
          <Title titleText={this.props.titleText}/>
        </View>
      )
    } else {
      return (
        <View style={styles.titleBarContainer}>
          {this.props.controlData.titleBar.leftBtnShow && this.renderLeftBtn()}
          <Title currentViewPager={this.props.controlData.currentViewPage}/>
          {this.props.controlData.titleBar.rightBtnShow && this.renderRightBtn()}
        </View>
      );
    }
  }

  renderLeftBtn(func) {
    return (
      <View style={styles.leftBtnContainer}>
        <Icon.Button
            name='md-arrow-round-back'
            color={'#000000'}
            backgroundColor={Colors.defaultPageBgColor}
            onPress={() => {
              if(func) {
                func()
              } else {
                this.props.controlData.titleBar.leftBtnFunc()
              }
            }}/>
      </View>


    )
  }

  renderRightBtn() {
    return (
      <View style={styles.rightBtnContainer}>
        {this.getRightBtn(this.props.controlData.currentPage)}
      </View>
    )
  }

  getRightBtn(page) {
    switch(page) {
      case PAGES.my:
        return <Icon.Button
            name='md-settings'
            color={'#000000'}
            backgroundColor={Colors.defaultPageBgColor}
            onPress={() => this.props.controlData.titleBar.rightBtnFunc()}/>
      case PAGES.share:
        return <Icon.Button
            name='md-list-box'
            color={'#000000'}
            backgroundColor={Colors.defaultPageBgColor}
            onPress={() => this.props.controlData.titleBar.rightBtnFunc()}/>
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
    left: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightBtnContainer: {
    width: Sizes.titleBarHeight,
    height: Sizes.titleBarHeight,
    position: 'absolute',
    right: 5,
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
