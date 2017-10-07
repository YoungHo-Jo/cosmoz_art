/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight, Dimensions} from 'react-native';

import LowerLinearGradient from '../LowerLinearGradient';
import { Sizes, Colors, } from "../../DefaultStyles";

import {NavigationActions} from "react-navigation";

class OftenRelationSubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentsIndex: null,
      friendsIndex: null,
      unselectedButtonColor: '#d0d0d0',
      selectedButtonColor: '#00a0eb',
      unselectedButtonTextColor: Colors.defaultTextColor,
      selectedButtonTextColor: '#ffffff',
      buttonDisabled: true,
    }
  }

  propTypes: {
    onClickNext: React.PropTypes.func.isRequired,
    onClickPrev: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'space-between', height: 360}}>
          <View style={styles.selectInputContainer1}>
            <Text style={styles.text}>{"부모님께 자주\n연락드리는 편이세요?"}</Text>
            <View style={styles.standardTextContainer}>
              <Text style={styles.standardText}>
                {"아니다"}
              </Text>
              <Text style={styles.standardText}>
                {"그렇다"}
              </Text>
            </View>
            <View style={styles.selectContainer2}>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkParentsButtons1Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.parentsIndex === 1 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkParentsButtons2Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.parentsIndex === 2 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkParentsButtons3Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.parentsIndex === 3 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkParentsButtons4Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.parentsIndex === 4 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkParentsButtons5Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.parentsIndex === 5 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.selectInputContainer2}>
            <Text style={styles.text}>{"친구 생일을 잊지 않고\n챙기는 편인가요?"}</Text>
            <View style={styles.standardTextContainer}>
              <Text style={styles.standardText}>
                {"아니다"}
              </Text>
              <Text style={styles.standardText}>
                {"그렇다"}
              </Text>
            </View>
            <View style={styles.selectContainer2}>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkFriendsButtons1Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.friendsIndex === 1 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkFriendsButtons2Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.friendsIndex === 2 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkFriendsButtons3Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.friendsIndex === 3 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkFriendsButtons4Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.friendsIndex === 4 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkFriendsButtons5Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.friendsIndex === 5 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.leftDirectionButton}
            underlayColor={'#ffffff'}
            onPress={() => this.props.onClickPrev()}>
            <View style={styles.button}>
              <Text style={[styles.directButtonText, {color: Colors.defaultTextColor}]}>
                {"이전"}
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.rightDirectionButton}
            underlayColor={'#ffffff'}
            onPress={() => this.props.onClickNext()}>
            <View style={[styles.button, {borderColor: this.state.buttonDisabled ? '#aaaaaa' : '#3d3d3d',}]}>
              <Text style={[styles.directButtonText, {color: this.state.buttonDisabled ? '#aaaaaa' : '#333333',}]}>
                {"다음"}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <LowerLinearGradient/>
      </View>
    )
  }

  checkParentsButtons1Clicked() {
    this.setState({parentsIndex: 1}, () => this.activateButton())
  }

  checkParentsButtons2Clicked() {
    this.setState({parentsIndex: 2}, () => this.activateButton())
  }

  checkParentsButtons3Clicked() {
    this.setState({parentsIndex: 3}, () => this.activateButton())
  }

  checkParentsButtons4Clicked() {
    this.setState({parentsIndex: 4}, () => this.activateButton())
  }

  checkParentsButtons5Clicked() {
    this.setState({parentsIndex: 5}, () => this.activateButton())
  }

  checkFriendsButtons1Clicked() {
    this.setState({friendsIndex: 1}, () => this.activateButton())
  }

  checkFriendsButtons2Clicked() {
    this.setState({friendsIndex: 2}, () => this.activateButton())
  }

  checkFriendsButtons3Clicked() {
    this.setState({friendsIndex: 3}, () => this.activateButton())
  }

  checkFriendsButtons4Clicked() {
    this.setState({friendsIndex: 4}, () => this.activateButton())
  }

  checkFriendsButtons5Clicked() {
    this.setState({friendsIndex: 5}, () => this.activateButton())
  }

  activateButton() {
    if (this.state.parentsIndex && this.state.friendsIndex) {
      this.setState({buttonDisabled: false})
    }
  }

}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#aaaaaa',
    flex: 1,
    marginBottom: 45,
    justifyContent: 'flex-end',
  },
  selectInputContainer1: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: 60,
  },
  selectInputContainer2: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color:'#333333',
    alignSelf: 'center',
    lineHeight: 30,
  },
  selectContainer1: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 20,
    marginTop: 30,
  },
  standardTextContainer: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 50,
    marginTop: 15,
  },
  selectContainer2: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 20,
    marginTop: 15,
  },
  buttonContainer: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: (Dimensions.get('window').height - 360) / 2,
    width: Dimensions.get('window').width -0,
    marginBottom: 20,
  },
  button1: {
    height: 35,
  },
  button2: {
    height: 25,
  },
  leftDirectionButton: {
    height: 35,
    alignSelf: 'center',
  },
  rightDirectionButton: {
    height: 35,
    marginLeft: -150,
    alignSelf: 'center',
  },
  timeButton: {
    width: 70,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  healingButton: {
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#d0d0d0'
  },
  button: {
    width: 80,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#3d3d3d',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: Sizes.fontSize - 4,
    fontWeight: Sizes.fontWeight,
  },
  standardText: {
    fontSize: Sizes.fontSize - 4,
    color: Colors.defaultTextColor,
    fontWeight: Sizes.fontWeight,
  },
  directButtonText: {
    fontSize: Sizes.fontSize - 4,
    fontWeight: Sizes.fontWeight,
  }
});

export default OftenRelationSubmitPage;
