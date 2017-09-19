import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Dimensions, TouchableHighlight, KeyboardAvoidingView} from 'react-native';

import LowerLinearGradient from '../LowerLinearGradient';
import { Sizes, Colors, } from "../../DefaultStyles";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class AccountSubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      id: null,
      pw: null,
      confirmingpw: null,
      buttonDisabled: true,
      isNewEmail: null,
      emailExistText: null,
      isPasswordMatch: null,
      pwMatchText: null,
    }
  }

  propTypes: {
    onClickNext: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.idInputContainer}>
            <Text style={styles.text}>{"이메일"}</Text>
            <View
              style={{flexDirection: 'row', alignSelf: 'center'}}>
              <TextInput
                style={styles.id_input}
                placeholder="이메일을 입력하세요"
                underlineColorAndroid={'#3a3a3a'}
                selectionColor={'#00a0eb'}
                keyboardType={'email-address'}
                returnKeyType='next'
                onChangeText={(email) => this.setState({id: email})}
                onSubmitEditing={()=>this.pwinput.focus()}>
              </TextInput>
              <TouchableHighlight
                style={{width: 55, alignSelf: 'center'}}
                underlayColor={'#cccccc'}
                onPress={() => this.checkId(this.state.id)}>
                <Text
                  style={styles.checkExistText}>
                  {'중복확인'}
                </Text>
              </TouchableHighlight>
            </View>
            <Text style={[styles.isExistText, {color: this.state.isNewEmail ? '#00c853' : '#ff393d'}]}>
              {this.state.emailExistText}
            </Text>
          </View>
          <View style={styles.pwInputContainer}>
            <Text style={styles.text}>{"비밀번호"}</Text>
            <TextInput
              ref={(ref)=>this.pwinput=ref}
              style={styles.text_input}
              placeholder="비밀번호를 입력하세요"
              underlineColorAndroid={'#3a3a3a'}
              selectionColor={'#00a0eb'}
              secureTextEntry={true}
              returnKeyType='next'
              onChangeText={(pw) => this.setState({pw: pw}, () => this.checkPasswordMatch())}
              onSubmitEditing={()=>this.pwconfirm.focus()}/>
          </View>
          <View style={styles.pwConfirmContainer}>
            <Text style={styles.text}>{"비밀번호 확인"}</Text>
            <TextInput
              ref={(ref)=>this.pwconfirm=ref}
              style={styles.text_input}
              placeholder="한 번 더 비밀번호를 입력하세요"
              underlineColorAndroid={'#3a3a3a'}
              selectionColor={'#00a0eb'}
              secureTextEntry={true}
              returnKeyType='done'
              onChangeText={(confirmingpw) => this.setState({confirmingpw: confirmingpw}, () => this.checkPasswordMatch())}/>
            <Text style={[styles.isMatchedText, {color: this.state.isPasswordMatch ? '#00c853' : '#ff393d'}]}>
              {this.state.pwMatchText}
            </Text>
          </View>
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

  checkId(email) {
    if (email === 'someone@email.com') {
      this.setState({isNewEmail: false, emailExistText: '이미 등록된 이메일입니다'})
    } else if (!email.includes('@')) {
      this.setState({isNewEmail: false, emailExistText: '이메일 형식이 올바르지 않습니다'})
    } else {
        this.setState({isNewEmail: true, emailExistText: '사용가능한 이메일입니다'}, () => this.activateButton())
    }
  }

  checkPasswordMatch() {
    if (this.state.pw === null || this.state.confirmingpw === null || this.state.pw === "" || this.state.confirmingpw === "") {
      this.setState({pwMatchText: null});
    } else if (this.state.pw === this.state.confirmingpw) {
      this.setState({isPasswordMatch: true, pwMatchText: '일치합니다'}, () => this.activateButton());
    } else {
      this.setState({isPasswordMatch: false, pwMatchText: '일치하지 않습니다'});
    }
  }

  activateButton() {
    if (this.state.isNewEmail && this.state.isPasswordMatch) {
      this.setState({buttonDisabled: false})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#aaaaaa',
    flex: 1,
    marginBottom: 45,
    justifyContent: 'flex-end'
  },
  inputContainer: {
    alignSelf: 'center',
  },
  idInputContainer: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  pwInputContainer: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  pwConfirmContainer: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
    color: '#333333',
    paddingLeft: 4,
  },
  text_input: {
    height: 40,
    fontSize: 15,
    width: Dimensions.get('window').width * (72/100),
    alignSelf: 'center',
    paddingBottom: 10,
  },
  id_input: {
    height: 40,
    fontSize: 15,
    width: Dimensions.get('window').width * (72/100) - 55 ,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  checkExistText: {
    fontSize: 13,
    textAlign: 'left',
    color: '#333333',
    fontWeight: 'bold',
  },
  isExistText: {
    fontSize: 13,
    height: 16,
    paddingLeft: 3,
  },
  isMatchedText: {
    fontSize: 13,
    height: 16,
    paddingLeft: 3,
  },
  buttonContainer: {
    height: (Dimensions.get('window').height - 360) / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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