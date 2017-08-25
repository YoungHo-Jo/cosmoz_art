
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
import {fetchLogin} from "../../actions/userActions";
import {connect} from "react-redux";


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

    render() {
        return (
            <View style={{backgroundColor: '#f1f1f1', flex: 1}}>
                <View style={{flex: 1}}>
                    <SettingsList borderColor={'#eaeaea'}>
                        <SettingsList.Header headerText='계정'
                                             headerStyle={styles.header}/>
                        <SettingsList.Item
                            title='별명'
                            titleInfo={this.props.userData.isLogin ? '로그인 했어요' : '로그인 해주세요'}
                            itemWidth={40}
                            titleStyle={styles.item}
                            onPress={() => this.props.navigation.navigate('LoginPage', {...this.props.navigation.state.params})}/>
                        {/*<SettingsList.Item*/}
                            {/*title='연결된 계정'*/}
                            {/*titleInfo='abc1234@gmail.com'*/}
                            {/*itemWidth={40}*/}
                            {/*titleStyle={styles.item}*/}
                        {/*/>*/}
                        <SettingsList.Header headerText='우편함'
                                             headerStyle={styles.header}/>
                        <SettingsList.Item title='받을편지'
                                           hasNavArrow={false}
                                           underlayColor={'#FFFFFF'}
                                           itemWidth={40}
                                           titleStyle={styles.item}
                        />
                        <SettingsList.Item title='보낼편지'
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
                                           onPress={() => this.props.navigation.navigate('SignUpPage', {...this.props.navigation.state.params})}/>
                        <SettingsList.Item title='버전'
                                           itemWidth={40}
                                           titleStyle={styles.item}
                                           onPress={() => this.props.navigation.navigate('IntroPage', {...this.props.navigation.state.params})}/>
                        <SettingsList.Item title='약관'
                                           itemWidth={40}
                                           titleStyle={styles.item}/>
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
    fetchLogin: (userInfo) => dispatch(fetchLogin(userInfo))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);