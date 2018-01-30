/* @flow */

import React, {Component,} from 'react';
import {AppRegistry, ListView, Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import SharePageHoriListViewItem from './SharePageHoriListViewItem'
import {Colors, Sizes} from "../../DefaultStyles";

import {Header} from 'react-navigation';

const ENDPOINT = `http://52.78.33.177:10424/arts/`;

class SharePageHoriListView extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,});
    this.state = {dataSource: ds.cloneWithRows([]),
    }
  }

  componentDidMount() {
    this._refreshData();
  }

  _renderRow(rowData) {
    return <SharePageHoriListViewItem
              onClickImage = {() => this.props.navigation.navigate('ImageViewerPage', {...this.props.navigation.state.params, imageURL: rowData.image_url})}
              shareImageURL={rowData.image_url}
              subject={rowData.keyword}
              nickname={rowData.mission_pk/*For test; Change it when attaching server code*/}/>;
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
        <View style={styles.container}>
          <View style={styles.shareKeywordContainer}>
            <Image
              style={styles.quotemarkImage}
              source={require('../../icons/double_quotation_marks_left.png')}/>
            <Text style={styles.headingText}>나의 우주외계인</Text>
            <Image
              style={styles.quotemarkImage}
              source={require('../../icons/double_quotation_marks_right.png')}/>
          </View>
          <View style={styles.listViewContainer}>
            <ListView horizontal={true}
                      styles={styles.list}
                      dataSource={this.state.dataSource}
                      renderRow={this._renderRow.bind(this)}
                      enableEmptySections={true}/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.defaultPageBgColor,
  },
  shareKeywordContainer: {
    flex: 2,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  quotemarkImage: {
    flex: 1,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  listViewContainer: {
    flex: 8
  },
  list: {
    flexDirection: 'row',
  },
});
export default SharePageHoriListView;
