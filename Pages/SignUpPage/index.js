/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Dimensions, KeyboardAvoidingView} from 'react-native';

import Swiper from 'react-native-swiper';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {Sizes, Colors} from "../../DefaultStyles";
import AccountSubmitPage from './AccountSubmitPage';
import NicknameSubmitPage from './NicknameSubmitPage';
import AgeSubmitPage from './AgeSubmitPage';
import LifeSubmitPage from './LifeSubmitPage';
import ParentsAgeSubmitPage from './ParentsAgeSubmitPage';
import FriendAmountSubmitPage from './FriendAmountSubmitPage';
import OftenRelationSubmitPage from './OftenRelationSubmitPage';
import ReadySubmitPage from './ReadySubmitPage';
import BottomBar from "../BottomBar";


class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentIndex: 0,
      progress: (1/8),
    };
  }

  render() {
    return(
        <View style={styles.container}>
          <KeyboardAwareScrollView>
            <Swiper
              ref={(Swiper) => {this.swiper = Swiper;}}
              style={styles.wrapper}
              showsPagination={false}
              loop={false}
              onIndexChanged={(index) => this.setState({progress: (index +1) * (1/8)})}
              scrollEnabled={true}>
              <AccountSubmitPage
                onClickNext={() => this.onClickNext()}/>
              <NicknameSubmitPage
                onClickNext={() => this.onClickNext()}
                onClickPrev={() => this.onClickPrev()}/>
              <AgeSubmitPage
                onClickNext={() => this.onClickNext()}
                onClickPrev={() => this.onClickPrev()}/>
              <LifeSubmitPage
                onClickNext={() => this.onClickNext()}
                onClickPrev={() => this.onClickPrev()}/>
              <ParentsAgeSubmitPage
                onClickNext={() => this.onClickNext()}
                onClickPrev={() => this.onClickPrev()}/>
              <FriendAmountSubmitPage
                onClickNext={() => this.onClickNext()}
                onClickPrev={() => this.onClickPrev()}/>
              <OftenRelationSubmitPage
                onClickNext={() => this.onClickNext()}
                onClickPrev={() => this.onClickPrev()}/>
              <ReadySubmitPage
                onClickNext={() => this.onClickNext()}
                onClickPrev={() => this.onClickPrev()}
                navigation={this.props.navigation}/>
            </Swiper>
            <BottomBar style={styles.progressContainer}>
              <Progress.Bar
                style={styles.progressBar}
                width={Dimensions.get('window').width * (75/100)}
                height={16}
                borderRadius={8}
                color={'#00a0eb'}
                unfilledColor={'#e7e7e7'}
                borderWidth={0}
                progress={this.state.progress}/>
            </BottomBar>
          </KeyboardAwareScrollView>
        </View>
    );
  }

  onClickNext() {
    this.swiper.scrollBy(1, true);
  }

  onClickPrev() {
    this.swiper.scrollBy(-1, true);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  wrapper: {
    height: Dimensions.get('window').height - 75,
  },
  progressContainer: {
    justifyContent: 'center',
  },
  progressBar: {
    alignSelf: 'center',
  },
});

export default SignUpPage;
