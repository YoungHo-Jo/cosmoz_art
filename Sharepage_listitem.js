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
        flexDirection : 'row',
        backgroundColor : '#FFFFFF',
        borderBottomColor : '#FFFFFF',
        borderBottomWidth : 2,
        padding : 5
    },
    shareImage:{
        flex:1,
        height : 500,
        resizeMode : 'contain',
        paddingTop : 10
    },
    info:{
        flex : 3,
        flexDirection : 'column',
        alignSelf : 'center',
        padding : 20
    },

    subject:{
        fontSize : 18,
        alignSelf: 'center'
    }
});

class Sharepage_listitem extends Component{
    propTypes:{
        shareImageURL : React.PropTypes.string.isRequired,
        subject : React.PropTypes.string.isRequired,
     }

    render(){
        return(
            <View style = {styles.shareItem}>
                <View style={styles.info}>
                    <Text style={styles.subject}>{this.props.subject}</Text>
                    <Image style={styles.shareImage} source={{uri:this.props.shareImageURL}}/>
                </View>
            </View>
        );
    }
}
export default Sharepage_listitem;