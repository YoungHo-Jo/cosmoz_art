/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, } from 'react-native';

import PopupDialog, {FadeAnimation} from 'react-native-popup-dialog';

import SharePageListView from './SharePageListView';
import {Colors, Sizes} from "../../DefaultStyles";
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import DoneMissionPage from "./DoneMissionPage";
import PopupTextCard from './PopupTextCard';
import {connect} from 'react-redux'
import * as ControlFlowActions from '../../actions/controlFlowActions'

class SharePage extends Component {

  renderListView() {
    return (
      <SharePageListView
        showModal={(show, content) => this.props.fetchModal(show, content)}
        onShareImagePressed={(visibility, content, leftBtnFunc, rightBtnFunc) =>{
            this.props.fetchPopupVisibility(visibility)
            this.props.fetchPopupContent(content, leftBtnFunc, rightBtnFunc)
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
    fetchPopupVisibility: show => dispatch(ControlFlowActions.fetchPopupVisibility(show)),
    fetchPopupContent: (dialogText, leftBtnFunc, rightBtnFunc) =>
      dispatch(ControlFlowActions.fetchPopupContent(dialogText, leftBtnFunc, rightBtnFunc))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePage)
