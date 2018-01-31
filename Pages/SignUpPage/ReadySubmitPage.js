/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight, Dimensions} from 'react-native';

import LowerLinearGradient from '../LowerLinearGradient';
import { Sizes, Colors, } from "../../DefaultStyles";

import {NavigationActions} from "react-navigation";

class ReadySubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readyIndex: null,
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
    onDone: React.PropTypes.func
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 3}}/>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.selectInputContainer2}>
            <Text style={styles.text}>{"행복할 준비가 되었습니까?"}</Text>
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
                onPress={() => this.checkReadyButtons1Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.readyIndex === 1 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkReadyButtons2Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.readyIndex === 2 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkReadyButtons3Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.readyIndex === 3 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkReadyButtons4Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.readyIndex === 4 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button2}
                underlayColor={'#ffffff'}
                onPress={() => this.checkReadyButtons5Clicked()}>
                <View style={[styles.healingButton, {backgroundColor: this.state.readyIndex === 5 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
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
            onPress={() => {
              this.props.onDone()
            }}
            disabled={this.state.buttonDisabled}>
            <View style={[styles.button, {borderColor: this.state.buttonDisabled ? '#aaaaaa' : '#3d3d3d',}]}>
              <Text style={[styles.directButtonText, {color: this.state.buttonDisabled ? '#aaaaaa' : '#333333',}]}>
                {"완료"}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  checkReadyButtons1Clicked() {
    this.setState({readyIndex: 1}, () => this.activateButton())
  }

  checkReadyButtons2Clicked() {
    this.setState({readyIndex: 2}, () => this.activateButton())
  }

  checkReadyButtons3Clicked() {
    this.setState({readyIndex: 3}, () => this.activateButton())
  }

  checkReadyButtons4Clicked() {
    this.setState({readyIndex: 4}, () => this.activateButton())
  }

  checkReadyButtons5Clicked() {
    this.setState({readyIndex: 5}, () => this.activateButton())
  }

  activateButton() {
    if (this.state.readyIndex) {
      this.setState({buttonDisabled: false})
    }
  }

}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#aaaaaa',
    flex: 1,
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
    marginTop: 30,
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
    flex: 3,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: (Dimensions.get('window').height - 360) / 2,
    width: Dimensions.get('window').width,
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

export default ReadySubmitPage;
