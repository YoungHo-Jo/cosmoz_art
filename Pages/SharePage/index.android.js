import React, {Component} from 'react';
import {StyleSheet, View, } from 'react-native';

import SharePageListView from './SharePageListView';

class SharePage extends Component {

  render() {
    return(
      <View style={styles.blockContainer}>
        <SharePageListView/>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    backgroundColor: '#003882'
  },

});

export default SharePage;