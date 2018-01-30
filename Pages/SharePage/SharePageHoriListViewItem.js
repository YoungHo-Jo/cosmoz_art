/* @flow */

import React,{
  Component,
} from 'react';

import{
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {Sizes} from "../../DefaultStyles";

import {Header} from 'react-navigation';

class SharePageHoriListViewItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      source: {uri: this.props.shareImageURL},
      isLiked: false,
      likeButtonLocationX: null,
      likeButtonLocationY: null};
  }

  propTypes:{
    onClickImage: React.PropTypes.func.isRequired,
    shareImageURL: React.PropTypes.string.isRequired,
    subject:React.PropTypes.string.isRequired,
    nickname:React.PropTypes.string.isRequired,
  }

  onLayout(e) {
    this.setState({
      likeButtonLocationX: e.nativeEvent.layout.x,
      likeButtonLocationY: e.nativeEvent.layout.y
    })
  }

  componentWillMount() {
    Image.getSize(this.props.shareImageURL, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({width: this.props.width, height: height * (this.props.width / width)});
      } else if (!this.props.width && this.props.height) {
        this.setState({width: width * (this.props.height / height), height: this.props.height});
      } else {
        this.setState({width: width, height: height});
      }
    });
  }



  likeButtonPosition() {
    if (this.state.likeButtonLocationX=0) {
      return {
        position: 'absolute',
        top: this.state.likeButtonLocationY,
        right:0}
    }
  }

  render(){
    console.log(this.props.subject);
    console.log(this.props.shareImageURL);
    console.log(this.props.nickname);
    return(
        <View style={styles.container}>
          <View style={styles.shareItem}>
            <TouchableHighlight
              underlayColor={'#ffffff'}
              onPress={() => this.props.onClickImage()}>
              <Image
                  style={[styles.shareImage, {
                    width: (Dimensions.get('window').height-(Header.HEIGHT+45)) * (55/100) * (this.state.width/this.state.height),
                    height: (Dimensions.get('window').height-(Header.HEIGHT+45)) * (55/100)}]}
                  source={this.state.source}/>
            </TouchableHighlight>
            <View
              style={[styles.likeButtonContainer,
                {height: (Dimensions.get('window').height-(Header.HEIGHT+45)) * (25/100)},
                this.likeButtonPosition()]}
              onLayout={this.onLayout.bind(this)}>
              <TouchableHighlight
                style={styles.likeButton}
                underlayColor={'#ffffff'}
                onPress={() => this.setState({isLiked: !this.state.isLiked})}>
                <Image style={styles.likeButtonImage} source={this.state.isLiked ? require('../../icons/logo.png') : require('../../icons/logo_uncolor.png')}/>
              </TouchableHighlight>
            </View>
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
    marginHorizontal: 15,
  },
  shareImage:{
    resizeMode : 'cover',
    alignSelf:'center',
    borderRadius: 15,
  },
  likeButtonContainer:{
    flexDirection : 'column',
    alignSelf : 'center',
    justifyContent:'center',
    paddingBottom: 20,
  },
  likeButton: {
    justifyContent: 'center',
  },
  likeButtonImage:{
    height: 50,
    width: 50,
    resizeMode:'contain',
  }
});


export default SharePageHoriListViewItem;
