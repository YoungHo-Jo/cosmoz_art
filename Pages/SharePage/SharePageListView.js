/* @flow */


import React, {Component,} from 'react';

import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

import SharePageListViewItem from './SharePageListViewItem';
import {Sizes} from "../../DefaultStyles";

class SharePageListView extends Component {
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.data}
        renderItem={({item: rowData}) => this._renderRow(rowData)}
      />
    )
  }

  _renderRow(rowData) {
    return (
      <SharePageListViewItem
        imageURL={rowData.image_url}
        keyword={rowData.keyword}
        missionPK={rowData.mission_pk}
        showModal={(show, content) => this.props.showModal(show, content)}
        onShareImagePressed={(show, content) => this.props.onShareImagePressed(show, content)}/>
    )
  }


}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default SharePageListView;
