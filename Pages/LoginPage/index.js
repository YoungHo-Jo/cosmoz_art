/* @flow */
import React, {Component,} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import Button from 'apsl-react-native-button';
import {connect} from "react-redux";
import {fetchLogin} from "../../actions/userActions";
import {Colors} from "../../DefaultStyles";
import {MKSwitch, MKColor} from "react-native-material-kit";
import * as ControlFlowActions from '../../actions/controlFlowActions'
import SignUpPage from '../SignUpPage'
import * as LocalStorage from '../../LocalStorage'

class Login extends Component {

  constructor(props){
    super(props)

    this.state = {
      id: null,
      pw: null,
      autoLogin: false,
      saveId: false
    }
  }

  componentWillMount() {
    LocalStorage.isSaveIdEnabled().then(enabled => {
      if(enabled) {
        LocalStorage.getId().then(id => {
          this.setState({
            id: id,
            saveId: true
          })
        })
      }
    })
    LocalStorage.isAutoLoginEnabled().then(enabled => {
      if(enabled) {
        this.setState({
          autoLogin: true
        })
      }
    })
  }


  render() {
    return (
            <KeyboardAwareScrollView style={{backgroundColor: Colors.defaultBgColor}}>
              <View style={styles.container}>
                {this.renderLogo()}
                <View style={styles.info}>
                  {this.renderIDInput()}
                  {this.renderPWInput()}
                  <View>
                    {this.renderLoginButton()}
                    {this.renderAutoLoginSwitch()}
                    {this.renderSaveIdSwitch()}
                  </View>
                  {this.renderSignUpButton()}
                </View>
              </View>
              {this.renderProgrssIndicator()}
            </KeyboardAwareScrollView>
    )
  }

  renderLogo() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image style={styles.image_logo} source={require('../../icons/logo.png')}/>
      </View>
    )
  }

  renderIDInput() {
    return (
      <View style={{width: Dimensions.get('window').width * (75/100), alignSelf: 'center',}}>
        <Text style={styles.text}>아이디</Text>
        <TextInput
            style={styles.text_input}
            placeholder="아이디를 입력하세요"
            underlineColorAndroid={'#3a3a3a'}
            selectionColor={'#00a0eb'}
            keyboardType='default'
            returnKeyType='next'
            onSubmitEditing={() => this.pw.focus()}
            defaultValue={this.state.id ? this.state.id : ''}
            onChangeText={(text) => this.setState({id: text})}/>
      </View>
    )
  }

  renderPWInput() {
    return (
      <View style={{width: Dimensions.get('window').width * (75/100), alignSelf: 'center',}}>
        <Text style={styles.text}>비밀번호</Text>
        <TextInput
            ref={(ref) => this.pw = ref}
            style={styles.text_input}
            placeholder="비밀번호를 입력하세요"
            underlineColorAndroid={'#3a3a3a'}
            selectionColor={'#00a0eb'}
            secureTextEntry={true}
            returnKeyType='done'
            onChangeText={(text) => this.setState({pw: text})}/>
      </View>
    )
  }

  renderLoginButton() {
    return (
      <Button style={styles.button_login}
              textStyle={{fontSize: 18}}
              onPress={() => {
                this.props.fetchLogin({
                  id: this.state.id,
                  pw: this.state.pw
                }).then((pw) => {
                  if(this.state.autoLogin) {
                    console.log('autoLogin enabled');
                    LocalStorage.setAutoLoginEnabled(true)
                    LocalStorage.saveId(this.state.id)
                    LocalStorage.savePW(pw)
                  }
                  if(this.state.saveId) {
                    console.log('saveId enabled');
                    LocalStorage.setSaveIdEnabled(true)
                    LocalStorage.saveId(this.state.id)
                  }
                  if (!this.state.saveId && !this.state.autoLogin) {
                    console.log('autoLogin && saveId not enabled')
                    LocalStorage.deleteId()
                    LocalStorage.deletePW()
                    LocalStorage.setSaveIdEnabled(false)
                    LocalStorage.setAutoLoginEnabled(false)
                  }
                  setTimeout(() => this.props.fetchModal(false), 500)
                }).catch(() => {
                  console.log('login failed');
                })
              }}>
        로그인
      </Button>
    )
  }

  renderAutoLoginSwitch() {
    return (
      <View style={styles.info_setting}>
        <Text style={styles.text_setting}>자동로그인</Text>
        <MKSwitch
          style={{alignSelf: 'center'}}
          onColor='rgba(0, 160, 235, 0.3)'
          thumbOnColor='rgba(0, 160, 235, 1)'
          trackSize={15}
          trackLength={35}
          thumbRadius={10}
          rippleColor='rgba(0, 160, 235, 0.2)'
          checked={this.state.autoLogin}
          onPress={() => setTimeout(() => {
            this.setState({
              autoLogin: !this.state.autoLogin
            })
          }, 250)}/>
      </View>
    )
  }

  renderSaveIdSwitch() {
    return (
      <View style={styles.info_setting}>
        <Text style={styles.text_setting}>아이디저장</Text>
        <MKSwitch
          style={{alignSelf: 'center'}}
          onColor='rgba(0, 160, 235, 0.3)'
          thumbOnColor='rgba(0, 160, 235, 1)'
          trackSize={15}
          trackLength={35}
          thumbRadius={10}
          rippleColor='rgba(0, 160, 235, 0.2)'
          checked={this.state.saveId}
          onPress={() => setTimeout(() => {
            this.setState({
              saveId: !this.state.saveId
            })
          }, 250)}/>
      </View>
    )
  }

  renderSignUpButton() {
    return (
      <Button
        style={styles.button_signup}
        textStyle={{fontSize: 12}}
        onPress={() => {
          this.props.fetchModal(true, <SignUpPage/>)
        }}>
        회원가입
      </Button>
    )
  }

  renderProgrssIndicator() {
    return (
        this.props.userData.isLogin &&
        <View style={styles.loadingOverlay}>
          <ActivityIndicator
            size='large'
            color='#00a0eb'/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF',
    paddingBottom: 50,
  },
  image_logo: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  info: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 15,
    marginLeft: 4,
  },
  text_input: {
    height: 40,
    fontSize: 13,
    width: Dimensions.get('window').width * (75/100),
    alignSelf: 'center',
    paddingBottom: 10,
  },
  button_login: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 1,
    width: Dimensions.get('window').width * (75/100),
    height: 40,
    borderColor: '#3a3a3a',
    alignSelf: 'center',
  },
  info_setting: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * (75/100),
    height: 35
  },
  text_setting: {
    fontSize: 15,
    marginLeft: 10,
    alignSelf: 'center',
  },
  button_signup: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 1,
    width: 50,
    height: 20,
    borderColor: '#FFFFFF',
    alignSelf: 'center',
    borderBottomColor: '#3a3a3a',
    marginBottom: 20
  },
  loadingOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33333399'
  }
});


function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLogin: (userInfo) => dispatch(fetchLogin(userInfo)),
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
