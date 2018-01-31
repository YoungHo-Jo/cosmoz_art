import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import IntroPage1 from './IntroPage1';
import IntroPage2 from './IntroPage2';
import IntroPage3 from './IntroPage3';
import IntroPage4 from './IntroPage4';
import {Colors, Sizes} from '../../DefaultStyles';
import LowerLinearGradient from "../LowerLinearGradient";
import BottomBar from '../BottomBar';

import Swiper from 'react-native-swiper';


class IntroPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentIndex: 0,
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Swiper
          ref={(Swiper) => {this.swiper = Swiper;}}
          style={styles.wrapper}
          showsPagination={false}
          loop={false}
          onIndexChanged={(index) => this.setState({currentIndex: index})}
          scrollEnabled={true}>
          <IntroPage1
            onClickNext={() => this.onClickNext()}/>
          <IntroPage2
            onClickNext={() => this.onClickNext()}/>
          <IntroPage3
            onClickNext={() => this.onClickNext()}/>
          <IntroPage4
            navigation={this.props.navigation}/>
        </Swiper>
        <BottomBar>
          <Text style={styles.introProgressText}>
            {(this.state.currentIndex + 1) + ' / 4'}
          </Text>
        </BottomBar>
      </View>
    );
  }

  onClickNext() {
    this.swiper.scrollBy(1, true);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  wrapper: {
    height: Dimensions.get('window').height,
  },
  introProgressText: {
    fontSize: 20,
    color: '#333333',
    alignSelf: 'center',
    marginBottom: 20,
  }
});

export default IntroPage;
