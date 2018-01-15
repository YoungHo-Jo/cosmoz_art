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
import {fetchCurrentViewPage} from "./actions/controlFlowActions";
import {connect} from "react-redux";

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

class MViewPager extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <View style={styles.container}>
          <Swiper dot={(<View style={styles.dot}/>)}
                  activeDot={(<View style={[styles.dot, {backgroundColor: Colors.defaultTextColor}]}/>)}
                  paginationStyle={{
                    bottom: Sizes.bottomBarHeight / 2 - 5
                  }}
                  loop={false}
                  index={this.props.controlData.initialViewPage}
                  height={height - Sizes.titleBarHeight - 20}
                  onIndexChanged={index => this._onIndexChanged(index)}>
            <MyPage/>
            <MainPage/>
            <SharePage/>
          </Swiper>
        </View>
    )
  }

  _onIndexChanged(index) {
    switch (index) {
      case 0:
        return this.props.fetchCurrentViewPage(0)
      case 1:
        return this.props.fetchCurrentViewPage(1)
      case 2:
        return this.props.fetchCurrentViewPage(2)
      default:
        this.props.fetchCurrentViewPage(1)
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
    controlData: state.controlFlowReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentViewPage: page => dispatch(fetchCurrentViewPage(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MViewPager);
