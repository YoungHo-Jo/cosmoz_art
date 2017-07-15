import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  ToastAndroid,
  AlertIOS
} from 'react-native';

// external
import ViewPager from 'react-native-viewpager';

// ours
import MainPage from './Pages/MainPage';
import SharePage from './Pages/SharePage';
import DefaultStyles, { Sizes, Colors } from './DefaultStyles';


function notifyMessage(msg) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT)
  } else {
    AlertIOS.alert(msg);
  }
}

var deviceWidth = Dimensions
  .get('window')
  .width;
var PAGES = ['myPage', 'mainPage', 'sharePage'];

class MViewPager extends Component {
  constructor(props) {
    super(props)
    var ds = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2
    });
    this.state = {
      dataSource: ds.cloneWithPages(PAGES)
    }
  }

  render() {
    return (
      <ViewPager
        style={styles.page}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        onChangePage={this._onChangePage}
        isLoop={false}
        autoPlay={false}
        initialPage={1}>
      </ViewPager>
        
    );
  }

  _renderPage = function (data, pageID) {
    var page = (
      <View style={styles.pageContainer}>
        <View style={styles.page}>
          <Text style={styles.text}>{data}</Text>
          <Text style={styles.text}>{pageID}</Text>
        </View>
      </View>
    );
      

    switch (pageID) {
      case '0':
        // my page
        break;

      case '1':
        // main page
        page = (
          <View style={styles.pageContainer}>
            <View style={styles.pageTopContainer}>
               <MainPage/>
            </View>


            <View style={styles.pageBottomContainer}>

            </View>
          </View>
        );
        break;
      case '2':
        // share page
        page = (
          <View style={styles.pageContainer}>
            <View style={styles.pageTopContainer}>
              <SharePage/>
            </View>


            <View style={styles.pageBottomContainer}>

            </View>
          </View>
        );
        break;
      default:
    }

    return page;
  };

  _onChangePage = function (page) {
    // notifyMessage('current page: ' + page);
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
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default MViewPager;