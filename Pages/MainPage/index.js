/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated, Easing} from 'react-native';

import LeadTextPage from './LeadTextPage';
import MainMissionPage from './MainMissionPage';
import CameraPage from './CameraPage';
import CameraButtonPage from './CameraButtonPage';
import ScanPage from './ScanPage';
import TimerPage from './TimerPage';
import {Colors, Sizes} from '../../DefaultStyles';
import {fetchCurrentPage, fetchCurrentViewPage} from '../../actions/controlFlowActions';
import { PAGES } from '../../reducers/constants';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';

const pageAnimation = {
    from: {
      opacity: 0.9,
      translateY: 10
    },
    to: {
      opacity: 1,
      translateY: 0
    },
}

class AnimatedPage extends Component {
  componentWillMount() {
    this._fadeAnim = new Animated.Value(0.9),
    this._slideAnim = new Animated.Value(20)
  }

  componentDidMount() {
    this._startPageAnim();
  }

  componentDidUpdate() {
    this._startPageAnim();
  }

  _startPageAnim() {
    this._fadeAnim.setValue(0.9);
    this._slideAnim.setValue(20);
    Animated.parallel([
      Animated.timing(this._fadeAnim,
        {
          toValue: 1,
          duration: 200,
        }),
      Animated.timing(this._slideAnim,
      {
        toValue: 0,
        duration: 200,
        isInteraction: false,
      })
    ]).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this._fadeAnim,
          transform: [{translateY: this._slideAnim}],
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

class MainPage extends Component {
  render() {
    return (
        <View style={styles.blockContainer}>
          {this.renderPage()}
        </View>
    );
  }

  animatedPage(page) {
    return(
      <AnimatedPage style={{flex: 1}}>
        {page}
      </AnimatedPage>
    );
  }

  renderPage() {
    console.log("render: " + this.props.controlData.currentPage)
    switch (this.props.controlData.currentPage) {
      case PAGES.leadText:
        return (<LeadTextPage/>);
      case PAGES.mainMission:
        return (this.animatedPage(<MainMissionPage/>));
      case PAGES.timer:
        return (this.animatedPage(<TimerPage/>));
      case PAGES.cameraButton:
        return (this.animatedPage(<CameraButtonPage/>));
      case PAGES.camera:
        return (this.animatedPage(<CameraPage/>));
      case PAGES.scan:
        return (this.animatedPage(<ScanPage/>));
    }
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



function mapStateToProps(state) {
  return {
    controlData: state.controlFlowReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentViewPage: pageNum => dispatch(fetchCurrentViewPage(pageNum)),
    fetchCurrentPage: page => dispatch(fetchCurrentPage(page))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
