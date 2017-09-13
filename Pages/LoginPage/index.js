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
  Image,
  Dimensions
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
            <KeyboardAwareScrollView style={{backgroundColor: Colors.defaultBgColor}}>
              <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Image style={styles.image_logo} source={require('../../icons/logo.png')}/>
                </View>
                <View style={styles.info}>
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
                        onChangeText={(text) => this.setState({id: text})}/>
                  </View>
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
                  <View>
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
                        style={{alignSelf: 'center'}}
                        onColor='rgba(0, 160, 235, 0.3)'
                        thumbOnColor='rgba(0, 160, 235, 1)'
                        trackSize={15}
                        trackLength={35}
                        thumbRadius={10}
                        rippleColor='rgba(0, 160, 235, 0.2)'
                        onPress={() => console.log('auto login switch pressed')}
                        onCheckedChange={(e) => console.log('auto login switch checked', e)}/>
                    </View>
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
                        onPress={() => console.log('id save switch pressed')}
                        onCheckedChange={(e) => console.log('id save switch checked', e)}/>
                    </View>
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
    height: Dimensions.get('window').height -90,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#FFFFFF',
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