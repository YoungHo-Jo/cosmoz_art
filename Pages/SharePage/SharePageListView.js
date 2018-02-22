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
import DetailSharePage from './DetailSharePage'
import ModalContainer from '../ModalContainer'

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
        keyExtractor = {(item, index) => index}
      />
    )
  }

  _renderRow(rowData) {
    if(rowData.arts.length !== 0) {
      return (
        <SharePageListViewItem
          representativeArt={rowData.arts[0]}
          keyword={this.getRealKeyword(rowData.keywords)}
          missionPK={rowData.missionPK}
          missionText={rowData.missionText}
          onOtherArtsPress={() => this.props.showModal(true, (
            <ModalContainer
                titleText={this.getRealKeyword(rowData.keywords)}
                onLeftBtnPress={() => this.props.showModal(false)} >
              <DetailSharePage
                missionPK={rowData.missionPK}
                keyword={this.getRealKeyword(rowData.keywords)}
                firstArt={rowData.arts[0]}/>
            </ModalContainer>
          ))}
          onShareImagePressed={(show, content) => this.props.onShareImagePressed(show, content)}/>
      )
    } else {
      return
    }
  }

  getRealKeyword(keywords) {
    var keyword = ''
    keywords.forEach(item => {
      if(keyword === '') {
        keyword += item.keyword
      } else {
        keyword += ` • ${item.keyword}`
      }
    })
    return keyword
  }

}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default SharePageListView;
