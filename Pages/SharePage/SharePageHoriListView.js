/* @flow */

import React, {Component,} from 'react';
import {AppRegistry, ListView, Text, StyleSheet, View, Image, Dimensions, FlatList} from 'react-native';
import SharePageHoriListViewItem from './SharePageHoriListViewItem';
import UpperLinearGradient from '../UpperLinearGradient'
import {Colors, Sizes} from "../../DefaultStyles";
import ImageViewerPage from '../ImageViewerPage'


const ENDPOINT = `http://52.78.33.177:10424/arts/`;

class SharePageHoriListView extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    missionPK: 1,
    arts: [
      {pk: 1, uri: "http://52.78.33.177:10424/arts/image/helloworld1", isUserLike: true},
      {pk: 9, uri: "http://52.78.33.177:10424/arts/image/test2", isUserLike: false},
      {pk: 10, uri: "http://52.78.33.177:10424/arts/image/test3", isUserLike: false}
    ]
  }


  _renderRow(rowData) {
    return (
      <SharePageHoriListViewItem
        onClickImage = {() => this.props.onImagePress(rowData.uri)}
        shareImageURI={rowData.uri}
        isUserLike={rowData.isUserLike}
        onLikeBtnClicked={(isLiked) => this.props.onLikeBtnPress(rowData.pk, isLiked)}/>
    );
  }


  render() {
    return (
        <View style={styles.container}>
          <View style={styles.listViewWrapper}>
            <FlatList horizontal={true}
                      styles={styles.list}
                      data={this.props.arts}
                      renderItem={({item: rowData}) => this._renderRow(rowData)}
                      keyExtractor = {(item, index) => index}
            />
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
    height: Sizes.titleBarHeight,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  quotemarkImage: {
    flex: 1,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  listViewWrapper: {
    flex: 8,
  },
  list: {
    flexDirection: 'row',
  },
});
export default SharePageHoriListView;
