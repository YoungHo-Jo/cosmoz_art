
/**
 * Created by LG on 2017-07-26.
 */
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
    resizeMode : 'contain',
    alignSelf:'center',
  },
  info:{
    flexDirection : 'row',
    alignSelf : 'center',
    height: (Dimensions.get('window').height-95) * (20/100),
    paddingBottom: 30,
  },
  profile:{
    height: 50,
    width: 50,
    resizeMode:'contain',
    alignSelf:'center',
  },
  likeButtonContainer: {
    justifyContent: 'center',
  }
});

class SharePageHoriListViewItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      source: {uri: this.props.shareImageURL},
      isLiked: false};
  }

  propTypes:{
    onClickImage: React.PropTypes.func.isRequired,
    shareImageURL: React.PropTypes.string.isRequired,
    subject:React.PropTypes.string.isRequired,
    nickname:React.PropTypes.string.isRequired,
  };

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
                    width: (Dimensions.get('window').height-95) * (66/100) * (this.state.width/this.state.height),
                    height: (Dimensions.get('window').height - 95) * (66/100)}]}
                  source={this.state.source}/>
            </TouchableHighlight>
            <View style={styles.info}>
              <TouchableHighlight
                style={styles.likeButtonContainer}
                underlayColor={'#ffffff'}
                onPress={() => this.setState({isLiked: !this.state.isLiked})}>
                <Image style={styles.profile} source={this.state.isLiked ? require('../../icons/logo.png') : require('../../icons/logo_uncolor.png')}/>
              </TouchableHighlight>
            </View>
          </View>
        </View>
    );
  }
}

export default SharePageHoriListViewItem;