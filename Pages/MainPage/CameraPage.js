/* @flow */

'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import {PAGES} from '../../reducers/constants'
import * as ControlFlowActions from '../../actions/controlFlowActions'
import * as UserActions from '../../actions/userActions'
import {connect} from 'react-redux'
import ScanPage from './ScanPage'
import UploadConfirmPage from './UploadConfirmPage'

class CameraPage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Camera
              ref={'camera'}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}>
            <Text
              style={styles.capture}
              onPress={() => this.takePicture()}>
              [CAPTURE]
            </Text>
          </Camera>
        </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.refs.camera.capture({metadata: options})
        .then((data) => {
          // data: {mediaUri, path}
          this.props.fetchMissionImageURI(data.mediaUri)
          this.props.fetchModal(true, <UploadConfirmPage uri={data.mediaUri}/>)
        })
        .catch(err => console.error(err))

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentPage: page => dispatch(ControlFlowActions.fetchCurrentPage(page)),
    fetchMissionImageURI: imageURI => dispatch(UserActions.fetchMissionImageURI(imageURI)),
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraPage)
