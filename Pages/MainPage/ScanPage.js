/* @flow */

import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Platform,
  Modal
} from 'react-native';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import BottomBar from "../BottomBar";
import {NavigationActions} from "react-navigation";
import {Colors} from "../../DefaultStyles";
import EStyleSheet from 'react-native-extended-stylesheet'
import PopupDialog, {ScaleAnimation} from "react-native-popup-dialog";
import PopupMsgBox from "./PopupMsgBox";

const IMAGE_SIDE_MARGIN = 30;

export default class ScanPage extends React.Component {
  state = {
    modalVisible: false
  }
  renderImage() {
    return (
      <View style={styles.imageContainer}>
        <Image resizeMode='contain' source={(Platform.OS === 'android') && {
          uri: this.props.navigation.state.params.data.mediaUri
        }} style={[eStyles.image]}/>
      </View>
    )
  }

  renderRetakePickBtn() {
    return (
      <TouchableHighlight onPress={() => this.retakePicture()} style={styles.leftButton} underlayColor={'#ffffff'}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            재촬영
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  renderCompleteBtn() {
    return (
      <TouchableHighlight
        onPress = {this._onCompletePress.bind(this)}
        style = {styles.rightButton}
        underlayColor = {'#ffffff'}>
         <View style={styles.button}>
          <Text style={styles.buttonText}>
            완료
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  renderPopUpDialog() {
    return (
      <PopupDialog
        ref={(popupDialog) => this.popupDialog = popupDialog}
        dialogAnimation={new FadeAnimation({toValue: 0})}
        height={'30%'}>
        <PopupMsgBox
          onLeftButtonClicked={() => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({routeName: 'MainScreen', params: {...this.props.navigation.state.params}})
              ]
            });
            this.props.navigation.dispatch(resetAction)
          }}
          onRightButtonClicked={() => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({routeName: 'MainScreen', params: {...this.props.navigation.state.params}})
              ]
            });
            this.props.navigation.dispatch(resetAction)

          }}
          dialogText={"혼자 보기 아깝잖아요\n마음껏 자랑해주세요"}
          leftButtonText={"비공개로 저장하기"}
          rightButtonText={"공유하기"}/>
      </PopupDialog>)
  }

  render() {
    return (
      <View style={styles.container}>
        <UpperLinearGradient/>
        {this.renderImage()}
        <LowerLinearGradient/>
        <BottomBar style={styles.bottomBar}>
          {this.renderRetakePickBtn()}
          {this.renderCompleteBtn()}
        </BottomBar>

        {this.renderPopUpDialog()}
      </View>
    );
  }

  retakePicture() {
    this.props.navigation.goBack();
  }

  _onCompletePress() {
    this.popupDialog.show()
  }

  done() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
          routeName: 'MainScreen',
          params: {
            ...this.props.navigation.state.params
          }
        })]
    });

    const {params} = this.props.navigation.state

    console.log('in ScanPage done: ');
    console.log(params)
    // if (params.userInfo) {
    if (true) {
      //      const imageName = params.userInfo.user_pk + '-' + params.mission.mission_pk
      const imageName = 6 + '-' + params.mission.missionPK

      var formData = new FormData()
      formData.append('file', params.data.mediaUri)

      fetch('http://52.78.33.177:10424/arts/image/' + imageName, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      }).then((response) => {
        fetch('http://52.78.33.177:10424/arts/newart', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + params.userInfo.token
          },
          body: JSON.stringify({
            user_pk: params.userInfo.user_pk,
            mission_pk: params.mission_pk,
            image_url: 'http://52.78.33.177:10424/arts/image/' + imageName,
            is_public: 1
          })
        }).then((response) => console.log(response)).catch((err) => console.log(err))
      })
    }

    return () => {
      this.props.navigation.dispatch(resetAction);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: Colors.defaultPageBgColor
  },
  imageContainer: {
    backgroundColor: '#858585',
    marginTop: IMAGE_SIDE_MARGIN,
    marginLeft: IMAGE_SIDE_MARGIN,
    marginRight: IMAGE_SIDE_MARGIN,
    marginBottom: 3 * IMAGE_SIDE_MARGIN,
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {},
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: IMAGE_SIDE_MARGIN,
    marginRight: IMAGE_SIDE_MARGIN
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {},
  button: {
    width: 80,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#3d3d3d',
    borderWidth: 1
  },
  leftButton: {
    position: 'absolute',
    left: 2.5 * IMAGE_SIDE_MARGIN
  },
  rightButton: {
    position: 'absolute',
    right: 2.5 * IMAGE_SIDE_MARGIN
  }
});

EStyleSheet.build()
const eStyles = EStyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})
