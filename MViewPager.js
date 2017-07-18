import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  ToastAndroid,
  AlertIOS,
  Button,
} from 'react-native';

// external
import ViewPager from 'react-native-viewpager';

// ours
import MainPage from './Pages/MainPage';
import SharePage from './Pages/SharePage';
import MyPage from './Pages/MyPage/MyPage';
import Title from './TitleBar/Title';
import DefaultStyles, {Sizes, Colors} from './DefaultStyles';
import LeadText from "./Pages/MainPage/LeadTextPage";
import BottomBar from "./Pages/BottomBar";


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
    super(props);

    var ds = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2
    });
    this.state = {
      dataSource: ds.cloneWithPages(PAGES),
      header: (<Title/>)
    };
  }


  static navigationOptions = {

  };


  render() {
    return (
      <ViewPager
        style={styles.page}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage.bind(this)}
        onChangePage={this._onChangePage.bind(this)}
        isLoop={false}
        autoPlay={false}
        initialPage={1}
        navigation={this.props.navigation}>
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
        page = (
          <View style={styles.pageContainer}>
            <View style={styles.pageTopContainer}>
              <MyPage
                navigation={this.props.navigation}/>
            </View>


            <View style={styles.pageBottomContainer}>

            </View>
          </View>
        );
        break;

      case '1':
        // main page
        page = (
          <View style={styles.pageContainer}>
            <View style={styles.pageTopContainer}>
              <MainPage
                navigation={this.props.navigation}/>
            </View>
            <BottomBar/>
          </View>
        );
        break;
      case '2':
        // share page
        page = (
          <View style={styles.pageContainer}>
            <View style={styles.pageTopContainer}>
              <SharePage
                navigation={this.props.navigation}/>
            </View>
            <BottomBar/>
          </View>
        );
        break;
      default:
    }

    return page;
  };

  _onChangePage = function (page) {
    switch (page) {
      case '0':
          this.setState({
            header: (<Text>나의 방</Text>)
          });
        break;
      case '1':

        break;
      case '2':
        break;
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
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default MViewPager;