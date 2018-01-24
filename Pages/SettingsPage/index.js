/* @flow */

import React, { Component, } from 'react';

import {
    AppRegistry,
    ListView,
    Text,
    StyleSheet,
    View,
    Image,
} from 'react-native';

import SettingsList from 'react-native-settings-list';
import * as UserActions from "../../actions/userActions";
import {connect} from "react-redux";
import APIConfig from "../../APIConfig";
import * as ControlFlowActions from '../../actions/controlFlowActions'
import LoginPage from '../LoginPage'
import IntroPage from '../IntroPage'

const styles = StyleSheet.create({
    header : {
       color: '#000000',
       backgroundColor:'#f1f1f1',
       height:30,
       fontSize:15,
       alignSelf:'center',
       textAlignVertical:'center'
   },
    item:{
        fontSize:14,
        paddingLeft:8,
    },

});

class SettingsPage extends Component {
    constructor() {
        super();
        this.onValueChange = this.onValueChange.bind(this);
        this.state = {switchValue: false};
    }

    // renderPopUpDialog() {
    //   return (
    //     <PopupDialog
    //         ref={(popupDialog) => this.popupDialog = popupDialog}
    //         dialogAnimation={new ScaleAnimation()}
    //         height={'30%'}>
    //       <PopupMsgBox
    //           onLeftButtonClicked={() => {
    //             this.props.fetchLogout()
    //             this.popupDialog.dismiss()
    //           }}
    //           onRightButtonClicked={() => this.popupDialog.dismiss()}
    //           dialogText="로그아웃 하시겠어요?"/>
    //     </PopupDialog>
    //   )
    // }

    render() {
        return (
            <View style={{backgroundColor: '#f1f1f1', flex: 1}}>
                <View style={{flex: 1}}>
                    <SettingsList borderColor={'#eaeaea'}>
                        <SettingsList.Header headerText='계정'
                                             headerStyle={styles.header}/>
                        <SettingsList.Item
                            title={this.props.userData.isLogin ? this.props.userData.userInfo.nickName : '별명'}
                            titleInfo={this.props.userData.isLogin ? '로그인 했어요' : '로그인 해주세요'}
                            itemWidth={40}
                            titleStyle={styles.item}
                            onPress={() => {
                              // if(!this.props.userData.isLogin) {
                              //   this.props.navigation.navigate('LoginPage', {...this.props.navigation.state.params})
                              // } else {
                              //   this.popupDialog.show()
                              // }

                              this.props.fetchModal(true, <LoginPage/>)
                            }}/>
                        <SettingsList.Header headerText='우편함'
                                             headerStyle={styles.header}/>
                        <SettingsList.Item title='받은편지'
                                           hasNavArrow={false}
                                           underlayColor={'#FFFFFF'}
                                           itemWidth={40}
                                           titleStyle={styles.item}
                        onPress={() => {
                          if (this.props.userData.isLogin) {
                            fetch(APIConfig.requestNotification, {
                              method: 'GET',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + this.props.userData.token
                              }
                            }).then(response => {
                              if (response.status === 201) {
                                console.log('request notification succeed');
                              } else {
                                console.log('request notification failed');
                              }
                            })
                          }
                        }}/>
                        <SettingsList.Item title='보낸편지'
                                           hasNavArrow={false}
                                           itemWidth={40}
                                           titleStyle={styles.item}/>
                        <SettingsList.Item title='예술제안서'
                                           hasNavArrow={false}
                                           itemWidth={40}
                                           titleStyle={styles.item}/>

                        <SettingsList.Header headerText='잡동사니'
                                             headerStyle={styles.header}/>
                        <SettingsList.Item title='공지사항'
                                           itemWidth={40}
                                           titleStyle={styles.item}
                                           onPress={() => console.log('공지사항 clicked')}/>
                        <SettingsList.Item title='버전'
                                           itemWidth={40}
                                           titleStyle={styles.item}
                                           onPress={() => this.props.fetchModal(true, <IntroPage/>)}/>
                        <SettingsList.Item title='약관'
                                           itemWidth={40}
                                           titleStyle={styles.item}
                                          onPress={() => console.log('약관 clicked')}/>
                    </SettingsList>
                </View>

            </View>
        );
    }

    onValueChange(value) {
        this.setState({switchValue: value});
    }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLogin: (userInfo) => dispatch(UserActions.fetchLogin(userInfo)),
    fetchLogout: () => dispatch(UserActions.fetchLogout()),
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
