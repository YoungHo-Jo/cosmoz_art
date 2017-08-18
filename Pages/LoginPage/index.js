/**
 * Created by LG on 2017-07-25.
 */
import React, {Component,} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Image
} from 'react-native';

import Button from 'apsl-react-native-button';
import {connect} from "react-redux";
import {fetchLogin} from "../../actions/userActions";
import {Colors} from "../../DefaultStyles";
import {MKSwitch, MKColor} from "react-native-material-kit";

class Login extends Component {
  state = {
    switchValue: false,
    id: null,
    pw: null
  }
  toggleSwitch1 = (value) => this.setState({switchValue1: value})
  toggleSwitch2 = (value) => this.setState({switchValue2: value})

  render() {
    return (
        <KeyboardAwareScrollView style={{backgroundColor: Colors.defaultPageBgColor}}>
          <View style={styles.container}>
            <Image style={styles.image_logo} source={require('../../icons/logo.png')}/>
            <View style={styles.info}>
              <Text style={styles.text}>아이디</Text>
              <TextInput
                  style={styles.text_input}
                  placeholder="아이디를 입력하세요"
                  underlineColorAndroid={'#3a3a3a'}
                  onChangeText={(text) => this.setState({id: text})}
                  keyboardType='default'
                  returnKeyType='next'/>

              <Text style={styles.text}>비밀번호</Text>
              <TextInput
                  style={styles.text_input}
                  placeholder="비밀번호를 입력하세요"
                  underlineColorAndroid={'#3a3a3a'}
                  secureTextEntry={true}
                  returnKeyType='done'
                  onChangeText={(text) => this.setState({pw: text})}/>
              <Button style={styles.button_login}
                      textStyle={{fontSize: 18}}
                      onPress={() => {
                        this.props.fetchLogin({
                          id: this.state.id,
                          pw: this.state.pw
                        })
                        setTimeout(() => {
                          console.log(this.props.userData)
                          if(this.props.userData.isLogin) {
                            this.props.navigation.goBack()
                          }
                        }, 1000)
                      }}>
                로그인
              </Button>
              <View style={styles.info_setting}>
                <Text style={styles.text_setting}>자동로그인</Text>
                <MKSwitch

                  onColor="rgba(255,152,0,.3)"
                  thumbOnColor={MKColor.Orange}
                  trackSize={15}
                  trackLength={35}
                  thumbRadius={10}
                  rippleColor="rgba(255,152,0,.2)"
                  onPress={() => console.log('orange switch pressed')}
                  onCheckedChange={(e) => console.log('orange switch checked', e)}/>
              </View>
              <View style={styles.info_setting}>
                <Text style={styles.text_setting}>아이디저장</Text>
                <MKSwitch

                  onColor="rgba(255,152,0,.3)"
                  thumbOnColor={MKColor.Orange}
                  trackSize={15}
                  trackLength={35}
                  thumbRadius={10}
                  rippleColor="rgba(255,152,0,.2)"
                  onPress={() => console.log('orange switch pressed')}
                  onCheckedChange={(e) => console.log('orange switch checked', e)}/>
              </View>
              <Button style={styles.button_signup} textStyle={{fontSize: 12}}>
                회원가입
              </Button>
            </View>
          </View>
        </KeyboardAwareScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  image_logo: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    paddingTop: 30,
    paddingBottom: 15,
    resizeMode: 'contain'
  },
  info: {
    flexDirection: 'column',
    paddingTop: 30,
  },
  text: {
    fontSize: 15,
    paddingLeft: 45,
    paddingBottom: 10,
    paddingTop: 20,
  },
  text_input: {
    height: 40,
    fontSize: 13,
    width: 280,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  button_login: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 1,
    width: 280,
    height: 40,
    borderColor: '#3a3a3a',
    alignSelf: 'center'
  },
  info_setting: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 280,
  },
  text_setting: {
    fontSize: 15,
    marginLeft: 10,
    alignSelf: 'center',
  },
  button_signup: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 1,
    width: 50,
    height: 20,
    borderColor: '#FFFFFF',
    alignSelf: 'center',
    borderBottomColor: '#3a3a3a',
  },
});


function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLogin: (userInfo) => dispatch(fetchLogin(userInfo))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);