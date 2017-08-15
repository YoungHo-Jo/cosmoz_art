
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
    height: (Dimensions.get('window').height-95) * (18/100),
    paddingBottom: 30,
  },
  profile:{
    height: 48,
    width: 48,
    resizeMode:'contain',
    alignSelf:'center',
  }
});

class SharePageHoriListViewItem extends Component{
  constructor(props) {
    super(props);
    this.state = {source: {uri: this.props.shareImageURL}};
  }

  propTypes:{
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
            <Image
                style={[styles.shareImage, {
                  width: (Dimensions.get('window').height-95) * (64/100) * (this.state.width/this.state.height),
                  height: (Dimensions.get('window').height - 95) * (64/100)}]}
                source={this.state.source}/>
            <View style={styles.info}>
              <Image style={styles.profile} source={require('../../icons/logo.png')}/>
            </View>
          </View>
        </View>
    );
  }
}

export default SharePageHoriListViewItem;