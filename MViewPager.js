/* @flow */


import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper'
import MainPage from './Pages/MainPage';
import SharePage from './Pages/SharePage';
import MyPage from './Pages/MyPage';
import DefaultStyles, {Sizes, Colors} from './DefaultStyles';
import * as ControlFlowActions from "./actions/controlFlowActions";
import {PAGES} from './reducers/constants'
import {connect} from "react-redux";
import TitleBar from './TitleBar'
import SettingsPage from './Pages/SettingsPage'
import UpperLinearGradient from './Pages/UpperLinearGradient'
import LowerLinearGradient from './Pages/LowerLinearGradient'

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

class MViewPager extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
          <TitleBar/>
          <UpperLinearGradient/>
          <Swiper dot={(<View style={styles.dot}/>)}
                  activeDot={(<View style={[styles.dot, {backgroundColor: Colors.defaultTextColor}]}/>)}
                  paginationStyle={{
                    bottom: Sizes.bottomBarHeight / 2 - 5
                  }}
                  loop={false}
                  index={this.props.controlData.initialViewPage}
                  height={height - Sizes.titleBarHeight - 20}
                  onIndexChanged={index => this._onIndexChanged(index)}
                  scrollEnabled={!this.props.userData.mission.isDoing}>
            <MyPage/>
            <MainPage/>
            <SharePage/>
          </Swiper>
          <LowerLinearGradient/>
        </View>
    )
  }

  _onIndexChanged(index) {
    switch (index) {
      case 0:
        this.props.fetchCurrentPage(PAGES.my)
        this.props.fetchTitleBarRightBtn(true, () => {
          this.props.fetchModal(true, <SettingsPage/>)
        })
        return this.props.fetchCurrentViewPage(0)
      case 1:
        this.props.fetchCurrentPage(PAGES.leadText)
        return this.props.fetchCurrentViewPage(1)
      case 2:
        this.props.fetchCurrentPage(PAGES.share)
        this.props.fetchTitleBarRightBtn(true, () => {
          this.props.fetchModal(true, )
        })
        return this.props.fetchCurrentViewPage(2)
    }
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  pageTopContainer: {
    flex: 93
  },
  pageBottomContainer: {
    flex: -1,
    height: Sizes.bottomBarHeight,
    backgroundColor: Colors.bottomBarBgColor
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  dot: {
    backgroundColor: '#e7e7e7',
    width: 9,
    height: 9,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
  container: {
    flex: 1,
  }
});


function mapStateToProps(state) {
  return {
    controlData: state.controlFlowReducer,
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentViewPage: page => dispatch(ControlFlowActions.fetchCurrentViewPage(page)),
    fetchCurrentPage: page => dispatch(ControlFlowActions.fetchCurrentPage(page)),
    fetchTitleBarRightBtn: (rightBtnShow, rightBtnFunc) =>
      dispatch(ControlFlowActions.fetchTitleBarRightBtn(rightBtnShow, rightBtnFunc)),
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MViewPager);
