import React, {Component,} from 'react';

import {
  ListView,
  StyleSheet, View,
} from 'react-native';

import SharePageListViewItem from './SharePageListViewItem';
import {Sizes} from "../../DefaultStyles";

const ENDPOINT = `http://52.78.33.177:10424/arts/`;

class SharePageListView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([]),
    }
  }


  componentDidMount() {
    this._refreshData();
  }

  _renderRow(rowData) {
    return (
      <SharePageListViewItem
        imageURL={rowData.image_url}
        keyword={rowData.keyword}
        missionPK={rowData.mission_pk}
        navigation={this.props.navigation}/>
    )
  }

  _refreshData() {
    fetch(ENDPOINT + '/mission/1')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJSON),
        })
      });
  }

  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        enableEmptySections={true}
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