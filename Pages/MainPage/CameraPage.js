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
import * as MissionDataReducer from '../../reducers/missionDataReducer'
import {connect} from 'react-redux'
import ScanPage from './ScanPage'
import UploadConfirmPage from './UploadConfirmPage'
import * as Utills from '../../Utills'
import APIConfig from '../../APIConfig'
import PopupMsgBox from '../../PopupMsgBox'


class CameraPage extends Component {
  state = {
    mission: null,
    public: true,
  }

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

  componentWillMount() {

    const {missionData} = this.props
    console.log(missionData)
    this.setState({
      mission: missionData.missionToShow === MissionDataReducer.missionToShowType.todayMission ?
        missionData.todayMission.mission : missionData.pushMission.mission
    })
  }


  upload(isPublic) {
    const imageName = Utills.makeNameRadonmly()
    var formData = new FormData()
    formData.append('file', {
      uri: this.props.userData.mission.imageURI,
      name: imageName + '.jpg',
      type: 'image/jpeg'
    })

    fetch(`${APIConfig.postImage}/${imageName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then((response) => {
      fetch(APIConfig.postArt, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.userData.token
        },
        body: JSON.stringify({
          user_pk: this.props.userData.userPK,
          mission_pk: this.state.mission.missionPK,
          image_url: APIConfig.getImage + '/' + imageName,
          is_public: isPublic ? 1 : 0
        })
      }).then(response => {
        this.props.fetchPopup(false)
        this.props.fetchModal(false)
        this.props.fetchCurrentPage(PAGES.leadText)
        this.props.fetchIsMissionDoing(false)
        this.props.fetchArtsNeedUpdate(true)
      }).catch(err => console.log(err))

    })
  }


  takePicture() {
    const options = {};
    //options.location = ...
    this.refs.camera.capture({metadata: options})
        .then((data) => {
          // data: {mediaUri, path}
          this.props.fetchMissionImageURI(data.mediaUri)
          this.props.fetchModal(true,
            <UploadConfirmPage
              uri={data.mediaUri}
              onPressCloseBtn={() => this.props.fetchModal(false)}
              onPressRedoBtn={() => this.props.fetchModal(true, <ReduxCameraPage/>)}
              onPressCheckBtn={() => this.props.fetchPopup(true, (
                <PopupMsgBox
                  dialogText={"혼자 보기 아깝잖아요\n마음껏 자랑해주세요"}
                  leftButtonText='비공개 하기'
                  rightButtonText='공개 하기'
                  onLeftButtonClicked={() => {
                    this.upload(false)
                  }}
                  onRightButtonClicked={() => {
                    this.upload(true)
                  }}/>
              ))}/>)
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
    userData: state.userData,
    missionData: state.missionData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentPage: page => dispatch(ControlFlowActions.fetchCurrentPage(page)),
    fetchMissionImageURI: imageURI => dispatch(UserActions.fetchMissionImageURI(imageURI)),
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content)),
    fetchPopup: (show, content?) => dispatch(ControlFlowActions.fetchPopup(show, content)),
    fetchIsMissionDoing: (doing, missionPK?) => dispatch(UserActions.fetchIsMissionDoing(doing, missionPK)),
    fetchArtsNeedUpdate: (artsNeedUpdate) => dispatch(UserActions.fetchArtsNeedUpdate(artsNeedUpdate))
  }
}
const ReduxCameraPage = connect(mapStateToProps, mapDispatchToProps)(CameraPage)
export default ReduxCameraPage
