import React, {Component} from 'react';
import {StyleSheet, View, } from 'react-native';

import SharePageListView from './SharePageListView';

class SharePage extends Component {

  render() {
    return(
      <View style={styles.container}>
        <SharePageListView/>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003882'
  },

});

export default SharePage;