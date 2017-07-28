import React, {
  Component,
}from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import {Colors, Sizes} from '../../DefaultStyles';


const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    shareItem:{
        flex:1,
        flexDirection:'column',
        borderBottomColor:'#FFFFFF',
        borderBottomWidth:2,
        paddingTop:50,
    },
    shareImage:{
        flex:4,
        height:1500,
        width:300,
        resizeMode : 'contain',
        paddingBottom:10,
        alignSelf:'center',
    },
    info:{
        flex : 1,
        flexDirection : 'column',
        alignSelf : 'center',
        paddingTop:10,
        height:20
    },
    profile:{
        height:50,
        width:50,
        resizeMode:'contain',
        alignSelf:'center'
    },
    button_showother:{
        height:100,
        width:200,
        resizeMode:'contain',
        alignSelf:'center',
    }
});

const CONAINTER_SIDE_MARGIN = 20;

class SharePageListViewItem extends Component {
  propTypes: {
    shareImageURL: React.PropTypes.string.isRequired,
    subject: React.PropTypes.string.isRequired,
    nickname:React.PropTypes.string.isRequired,
  };

    render(){
        console.log(this.props.subject);
        console.log(this.props.shareImageURL);
        console.log(this.props.nickname);
        return(
            <View style={styles.container}>
              <View style={styles.shareItem}>
                <Image
                    style={styles.shareImage}
                    source={{uri: this.props.shareImageURL}}/>
                <View style={styles.info}>
                  <Image style={styles.profile} source={require('../../icons/logo.png')}/>
                </View>
                <TouchableHighlight //onPress={}>
                    >
                     <Image
                         style={styles.button_showother}
                         source={require('../../icons/share_anotheritem.png')}/>
                 </TouchableHighlight>


              </View>
            </View>
        );
    }
}

export default SharePageListViewItem;