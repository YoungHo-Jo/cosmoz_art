/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, } from 'react-native';
import SharePageListView from './SharePageListView';
import {Colors, Sizes} from "../../DefaultStyles";
import DoneMissionPage from "./DoneMissionPage";
import {connect} from 'react-redux'
import * as ControlFlowActions from '../../actions/controlFlowActions'

class SharePage extends Component {

  renderListView() {
    return (
      <SharePageListView
        showModal={(show, content) => this.props.fetchModal(show, content)}
        onShareImagePressed={(show, content) => {
            this.props.fetchPopup(show, content)
          }}/>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.listViewContainer}>
          {this.renderListView()}
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
    marginBottom: Sizes.bottomBarHeight
  },
  listViewContainer: {
    flex: 1,
  }
});

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content)),
    fetchPopup: (show, content?) => dispatch(ControlFlowActions.fetchPopup(show, content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePage)
