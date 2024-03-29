/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Text } from 'react-native';

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
import AnimatedPage from './AnimatedPage'


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
      <AnimatedPage
        style={{flex: 1}}
        currentPage={this.props.controlData.currentPage}>
        {page}
      </AnimatedPage>
    );
  }

  renderPage() {
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
      default:
        return (<LeadTextPage/>)
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
