import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Dimensions, TouchableHighlight, KeyboardAvoidingView} from 'react-native';

import LowerLinearGradient from '../LowerLinearGradient';
import { Sizes, Colors, } from "../../DefaultStyles";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class AccountSubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      idEdited: false,
      pwEdited: false,
      pwConfirmed: false,
      buttonDisabled: true,
    }
  }

  propTypes: {
    onClickNext: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.idInputContainer}>
          <Text style={styles.text}>{"이메일"}</Text>
          <TextInput
            style={styles.text_input}
            placeholder="이메일을 입력하세요"
            underlineColorAndroid={'#3a3a3a'}
            keyboardType={'email-address'}
            returnKeyType='next'
            onChange={() => this.checkidTypingFinish()}/>
        </View>
        <View style={styles.pwInputContainer}>
          <Text style={styles.text}>{"비밀번호"}</Text>
          <TextInput
            style={styles.text_input}
            placeholder="비밀번호를 입력하세요"
            underlineColorAndroid={'#3a3a3a'}
            secureTextEntry={true}
            returnKeyType='next'
            onChange={() => this.checkpwTypingFinish()}/>
        </View>
        <View style={styles.pwConfirmContainer}>
          <Text style={styles.text}>{"비밀번호 확인"}</Text>
          <TextInput
            style={styles.text_input}
            placeholder="한 번 더 비밀번호를 입력하세요"
            underlineColorAndroid={'#3a3a3a'}
            secureTextEntry={true}
            returnKeyType='done'
            onChange={() => this.checkpwConfirmingFinish()}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.nextButton}
            underlayColor={'#ffffff'}
            onPress={() => this.props.onClickNext()}
            disabled={this.state.buttonDisabled}>
            <View style={[styles.button, {borderColor: this.state.buttonDisabled ? '#aaaaaa' : '#3d3d3d',}]}>
              <Text style={[styles.buttonText, {color: this.state.buttonDisabled ? '#aaaaaa' : '#333333',}]}>
                {"다음"}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <LowerLinearGradient/>
      </View>
    )
  }

  checkidTypingFinish() {
    this.setState({idEdited: true}, () => this.activateButton())
  }

  checkpwTypingFinish() {
    this.setState({pwEdited: true}, () => this.activateButton())
  }

  checkpwConfirmingFinish() {
    this.setState({pwConfirmed: true}, () => this.activateButton())
  }

  activateButton() {
    if (this.state.idEdited && this.state.pwEdited && this.state.pwConfirmed) {
      this.setState({buttonDisabled: false})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#aaaaaa',
    flex: 1,
    marginBottom: 45,
    justifyContent: 'space-between'
  },
  idInputContainer: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: 100,
  },
  pwInputContainer: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
  },
  pwConfirmContainer: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: -30
  },
  text: {
    fontSize: 15,
    color: '#333333',
    paddingLeft: 5,
    paddingBottom: 10,
    paddingTop: 10,
  },
  text_input: {
    height: 40,
    fontSize: 15,
    width: 300,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  buttonContainer: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginBottom: 90,
  },
  nextButton: {
    height: 35
  },
  button: {
    width: 80,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: Sizes.fontSize - 4,
    fontWeight: Sizes.fontWeight,
  }
});

export default AccountSubmitPage;