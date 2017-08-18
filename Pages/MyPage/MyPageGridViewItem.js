import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

class MyPageGridViewItem extends Component {
  /*propTypes: {
    imageURL: React.PropTypes.string.isRequired,
    keyword: React.PropTypes.string.isRequired,
    missionPK:React.PropTypes.string.isRequired,
  }*/

  render(){
    return(
      <Image
        style={styles.myImage}
        source={{uri: this.props.imageURL}}/>
    );
  }
}

const styles= StyleSheet.create({
  myImage: {
    flex: 1,
    width: Dimensions.get('window').width * (42/100),
    height: Dimensions.get('window').width * (42/100),
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  }
});

export default MyPageGridViewItem;