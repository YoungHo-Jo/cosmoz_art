/* @flow */


import React, {Component,} from 'react';

import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

import SharePageListViewItem from './SharePageListViewItem';
import {Sizes} from "../../DefaultStyles";
import PropTypes from 'prop-types'

class SharePageListView extends Component {
  static propTypes = {
    arts: PropTypes.array
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.arts}
        renderItem={({item: rowData}) => this._renderRow(rowData)}
      />
    )
  }

  _renderRow(rowData) {
    if(rowData.arts.length !== 0) {
      return (
        <SharePageListViewItem
          arts={rowData.arts}
          keywords={rowData.keywords}
          missionPK={rowData.missionPK}
          missionText={rowData.missionText}
          showModal={(show, content) => this.props.showModal(show, content)}
          onShareImagePressed={(show, content) => this.props.onShareImagePressed(show, content)}/>
      )
    } else {
      return
    }

  }


}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default SharePageListView;
