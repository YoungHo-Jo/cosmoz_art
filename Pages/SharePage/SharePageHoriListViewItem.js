/**
 * Created by LG on 2017-07-15.
 */
import React,{
    Component,
}from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
} from 'react-native';

const styles = StyleSheet.create({
    shareItem:{
        flex:1,
        flexDirection : 'column',
        backgroundColor : '#FFFFFF',
        borderBottomColor : '#FFFFFF',
        borderBottomWidth : 2,
        padding : 10,
        paddingTop:180
    },
    shareImage:{
        flex:1,
        height:500,
        width:150,
        resizeMode : 'stretch',
        paddingTop : 100,
        paddingBottom:10,
        alignSelf:'center'
    },
    info:{
        flex : 3,
        flexDirection : 'column',
        alignSelf : 'center',
        paddingTop:10
    },
    person:{
        flex :1,
        flexDirection: 'row',

    },
    subject:{
        fontSize : 18,
        alignSelf: 'center'
    },
    nickname:{
        fontSize: 13,
        paddingLeft:10

    },
    profile:{
        height:20,
        width:20,
        paddingRight:10
    }
});

class SharePageHoriListViewItem extends Component{
    propTypes: {
        shareImageURL: React.PropTypes.string.isRequired,
        subject: React.PropTypes.string.isRequired,
        nickname: React.PropTypes.string.isRequired,
    };

    render() {

        console.log(this.props.subject);
        console.log(this.props.shareImageURL);
        console.log(this.props.nickname);
        return (
            <View style={styles.shareItem}>
                <Image
                    style={styles.shareImage}
                    source={{uri: this.props.shareImageURL}}/>
                <View style={styles.info}>
                    <Text style={styles.subject}>
                        {this.props.subject}
                    </Text>
                    <View style={styles.person}>
                        <Image style={styles.profile} source={require('../../icons/user.png')}/>
                        <Text style={styles.nickname}>
                            {this.props.nickname}
                        </Text>
                    </View>
                </View>

            </View>


        );
    }
}

export default SharePageHoriListViewItem;