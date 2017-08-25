import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

// external
import Swiper from 'react-native-swiper'

// ours
import MainPage from './Pages/MainPage';
import SharePage from './Pages/SharePage';
import MyPage from './Pages/MyPage';
import DefaultStyles, {Sizes, Colors} from './DefaultStyles';
import BottomBar from "./Pages/BottomBar";
import {getOS, notifyMessage} from "./Utilis";


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
                  index={0}
                  height={height - Sizes.titleBarHeight - 20}>

            <MyPage navigation={this.props.navigation}/>
            <MainPage navigation={this.props.navigation}/>
            <SharePage navigation={this.props.navigation}/>
          </Swiper>
        </View>

    )
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

export default MViewPager;