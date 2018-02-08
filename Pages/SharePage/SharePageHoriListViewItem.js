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
import PropTypes from 'prop-types'

class SharePageHoriListViewItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      source: {uri: props.shareImageURI},
      isLiked: props.isUserLike,
    };
  }

  static propTypes = {
    onClickImage: PropTypes.func,
    shareImageURI: PropTypes.string
  }

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



  _onLikeBtnClicked(isLiked) {
    this.setState({isLiked: !this.state.isLiked});
    this.props.onLikeBtnClicked(!isLiked)
  }

  render(){
    return(
        <View style={styles.container}>
          <View>
            <TouchableHighlight
              underlayColor={'#ffffff'}
              onPress={() => this.props.onClickImage()}>
              <Image
                  style={[styles.shareImage, {
                      width: (Dimensions.get('window').width) * (90/100),
                      height: (Dimensions.get('window').height - Sizes.titleBarHeight) * (70/100)}]}
                  source={this.state.source}
                  resizeMode = "contain"/>
            </TouchableHighlight>
          </View>
          <View
            style={[
              styles.likeButtonContainer,
              {height: (Dimensions.get('window').height - Sizes.titleBarHeight) * (30/100)}
            ]}>
            <TouchableHighlight
              style={styles.likebuttonWrapper}
              underlayColor={'#ffffff'}
              onPress={() => this._onLikeBtnClicked(this.state.isLiked)}>
              <Image style={styles.likeButton} source={this.state.isLiked ? require('../../icons/logo.png') : require('../../icons/logo_uncolor.png')}/>
            </TouchableHighlight>
          </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    marginTop: 15,
  },
  shareImage:{
    alignSelf:'center',
    borderRadius: 10,
  },
  likeButtonContainer:{
    flex: 3,
    flexDirection : 'column',
    alignSelf : 'center',
    justifyContent:'center',
  },
  likebuttonWrapper: {
    justifyContent: 'center',
  },
  likeButton:{
    height: 50,
    width: 50,
    resizeMode:'contain',
  }
});


export default SharePageHoriListViewItem;
