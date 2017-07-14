import React, {
  Component,
}from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {Colors} from '../../DefaultStyles';

class SharePageListViewItem extends Component {
  propTypes: {
    shareImageURL: React.PropTypes.string.isRequired,
    subject: React.PropTypes.string.isRequired,
  };

  render() {

    console.log(this.props.subject);
    console.log(this.props.shareImageURL);
    return (
      <View style={styles.shareItem}>
        <View style={styles.info}>
          <Text style={styles.subject}>
            {this.props.subject}
          </Text>
          <Image
            style={styles.shareImage}
            source={{uri: this.props.shareImageURL}}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  shareItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.defaultBgColor,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    padding: 5,
  },
  shareImage: {
    flex: 1,
    height: 500,
    resizeMode: 'contain',
    paddingTop: 10
  },
  info: {
    flex: 3,
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 20
  },
  subject: {
    fontSize: 18,
    alignSelf: 'center',
    color: Colors.defaultTextColor,
  }
});


export default SharePageListViewItem;