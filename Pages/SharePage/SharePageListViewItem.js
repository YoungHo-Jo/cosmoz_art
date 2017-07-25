import React, {
  Component,
}from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import {Colors, Sizes} from '../../DefaultStyles';

const CONAINTER_SIDE_MARGIN = 20;

class SharePageListViewItem extends Component {
  propTypes: {
    shareImageURL: React.PropTypes.string.isRequired,
    subject: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textBarContainer}>
          <View style={styles.quotationMarkImageContainer}>
            <Image
                style={styles.quotationMarkImage}
                sourece={require('../../icons/logo.png')}/>
          </View>
          <View style={styles.textContainer}>
            <Text
                style={styles.subject}
              onPress={() => this.props.navigation.navigate('DetailSharePage')}>
              {/*testClick*/}
              {this.props.subject}
            </Text>
          </View>
          <View style={styles.quotationMarkImageContainer}>
            <Image
                style={styles.quotationMarkImage}
                sourece={require('../../icons/logo.png')}/>
          </View>
        </View>
        <View style={styles.imageContainer}>

          {/*<Image*/}
            {/*style={styles.shareImage}*/}
            {/*source={{uri: this.props.shareImageURL}}/>*/}
            <Image
              style={styles.shareImage}
              source={require('../../icons/logo.png')}/>
        </View>
      </View>
    );
  }
}

var viewWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.defaultBgColor,
    marginTop: Sizes.linearGradientHeight,
  },
  shareImage: {
    resizeMode: 'contain',
    width: viewWidth * 0.8
  },
  quotationMarkImage: {
    resizeMode: 'contain',

  },
  quotationMarkImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBarContainer: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginBottom: CONAINTER_SIDE_MARGIN,
  },
  textContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 90,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#728392',
  },
  subject: {
    fontSize: 25,
    alignSelf: 'center',
    color: Colors.defaultTextColor,
  }
});


export default SharePageListViewItem;