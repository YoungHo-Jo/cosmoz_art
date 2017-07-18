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
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text
            style={styles.subject}
            >
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
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.defaultBgColor,
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