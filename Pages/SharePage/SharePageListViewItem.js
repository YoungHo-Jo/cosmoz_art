/* @flow */


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
import DetailSharePage from './DetailSharePage'
import PopupTextCard from './PopupTextCard'

const CONAINTER_SIDE_MARGIN = 20;

class SharePageListViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {source: {uri: props.representativeArt.uri}};
  }
  propTypes: {
    representativeArt: React.PropTypes.array.isRequired,
    keyword: React.PropTypes.string.isRequired,
    missionPK:React.PropTypes.string.isRequired,
    missionText: React.PropTypes.string.isRequired,
    onShareImagePressed: React.PropTypes.func,
    showModal: React.PropTypes.func
  };

  componentWillMount() {
    Image.getSize(this.state.source.uri, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({width: this.props.width, height: height * (this.props.width / width)});
      } else if (!this.props.width && this.props.height) {
        this.setState({width: width * (this.props.height / height), height: this.props.height});
      } else {
        this.setState({width: width, height: height});
      }
    });
  }

  renderTitleOfItem() {
    return (
      <View style={styles.shareKeywordContainer}>
        <Image
          style={styles.quotemark}
          source={require('../../icons/double_quotation_marks_left.png')}/>
        <Text style={styles.shareKeyword}>
          {this.props.keyword}
        </Text>
        <Image
          style={styles.quotemark}
          source={require('../../icons/double_quotation_marks_right.png')}/>
      </View>
    )
  }

  renderClickableImage() {
    return (
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={() => {
          this.props.onShareImagePressed(true,
            <PopupTextCard
              dialogText={this.props.missionText}
              onTextPressed={() => this.props.onShareImagePressed(false)}/>)
        }}>
        <Image
          style={[styles.shareImage, {
            width: Dimensions.get('window').width * (85/100),
            height: Dimensions.get('window').width * (85/100) * (this.state.height/this.state.width)}]}
          source={this.state.source}/>
      </TouchableHighlight>
    )
  }

  renderShowDetailBtn() {
    return (
      <TouchableHighlight
        underlayColor={'#ffffff'}
        onPress={() => this.props.onOtherArtsPress()}>
           <Image
               style={styles.button_showother}
               source={require('../../icons/share_anotheritem.png')}/>
      </TouchableHighlight>
    )
  }

  render(){
      return(
          <View style={styles.container}>
            <View style={styles.shareItem}>
              {this.renderTitleOfItem()}
              {this.renderClickableImage()}
              {this.renderShowDetailBtn()}
            </View>
          </View>
      );
  }
}


const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    shareItem:{
      flex:1,
      flexDirection:'column',
      borderBottomColor:'#FFFFFF',
      borderBottomWidth:2,
      paddingTop:10,
    },
    shareImage:{
        flex:1,
        paddingBottom:10,
        alignSelf:'center',
        resizeMode: 'cover',
        borderRadius: 15,
    },
    quotemark: {
        flex: 1,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    shareKeyword: {
        flex: 6,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.defaultTextColor,
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: 20,
    },
    shareKeywordContainer: {
        width: Dimensions.get('window').width * (85/100) - 20,
        height: 80,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    profile:{
        height:50,
        width:50,
        resizeMode:'contain',
        alignSelf:'center'
    },
    button_showother:{
        flex: 1,
        height:50,
        width:200,
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:25,
        marginBottom:20,
    }
});


export default SharePageListViewItem;
