/* @flow */


import React, {Component,} from 'react';

import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

import SharePageListViewItem from './SharePageListViewItem';
import {Sizes} from "../../DefaultStyles";

const ENDPOINT = `http://52.78.33.177:10424/arts/`;

class SharePageListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  propTypes: {
    onShareImagePressed: React.PropTypes.func.isRequired,
    showModal: React.PropTypes.func
  };


  componentDidMount() {
    this._refreshData();
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

  _refreshData() {
    fetch(ENDPOINT + '/mission/1')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          data: responseJSON,
        })
      });
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.state.data}
        renderItem={({item: rowData}) => this._renderRow(rowData)}
      />
    );
  }

}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default SharePageListView;
