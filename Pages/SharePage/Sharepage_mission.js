/**
 * Created by LG on 2017-07-16.
 */

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

class Sharepage_mission extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={{backgroundColor: '#f1f1f1', flex: 1}}>
                <View style={{flex: 1,marginTop:0}}>
                    <SettingsList borderColor={'#eaeaea'}>
                        <SettingsList.Item
                            title='우주외계인 그려보기'
                            itemWidth={40}
                            titleStyle={styles.item}
                        />
                        <SettingsList.Item
                            title='부모님 안보고 그리기'
                            itemWidth={40}
                            titleStyle={styles.item}
                        />
                        <SettingsList.Item
                            title='우주쓰레기 그리기'
                            itemWidth={40}
                            titleStyle={styles.item}
                        />

                    </SettingsList>
                </View>
            </View>
        );
    }


}
export default Sharepage_mission;