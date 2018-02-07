/* @flow */

import React from 'react';
import {StyleSheet, View,} from 'react-native';
import SharePageHoriListView from "./SharePageHoriListView";
import {Colors, Sizes} from "../../DefaultStyles";

export default class DetailSharePage extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.listViewContainer}>
            <SharePageHoriListView
              />
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.defaultPageBgColor,
  },
  listViewContainer: {
    flex: 1,
  },
});
