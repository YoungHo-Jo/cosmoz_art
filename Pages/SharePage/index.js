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
        onShareImagePressed={() => this._onShareImagePress()}/>
    )
  }

  renderPopUpDialog() {
    return(
      <PopupDialog
        ref={(popupDialog) => this.popupDialog = popupDialog}
        dialogAnimation={new FadeAnimation({toValue: 0})}
        animationDuration={400}
        height={'30%'}
        width={'85%'}
        dialogStyle={{marginTop: -120}}>
        <PopupTextCard
          onTextPressed={() => this.popupDialog.dismiss()}
          dialogText={"오늘 하루 어떻게 지냈나요?\n\n내가 생각하는\n우주 외계인을 그려봐요"}/>
      </PopupDialog>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.listViewContainer}>
          {this.renderListView()}
        </View>
        {this.renderPopUpDialog()}
      </View>
    );
  }

  _onShareImagePress() {
    this.popupDialog.show()
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
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePage)
