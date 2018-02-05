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

import {Colors} from "../../DefaultStyles";
import EStyleSheet from 'react-native-extended-stylesheet'
import {connect} from 'react-redux'
import BottomBar from '../BottomBar'
import * as Utills from '../../Utills'
import * as DefaultStyles from '../../DefaultStyles'

const IMAGE_SIDE_MARGIN = 30;

class ScanPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mission: this.props.missionData.todayMission.mission,
      public: true,
    }

  }

  renderImage() {
    Image.getSize()
    return (
      <View style={styles.imageContainer}>
        <Image resizeMode='contain' source={(Platform.OS === 'android') && {
          uri: this.props.userData.mission.imageURI
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

  //// Implement ////
  // renderPopUpDialog() {
  //   return (
  //     <PopupDialog
  //       ref={(popupDialog) => this.popupDialog = popupDialog}
  //       dialogAnimation={new FadeAnimation({toValue: 0})}
  //       height={'30%'}>
  //       <PopupMsgBox
  //         onLeftButtonClicked={() => {
  //           const resetAction = NavigationActions.reset({
  //             index: 0,
  //             actions: [
  //               NavigationActions.navigate({routeName: 'MainScreen', params: {...this.props.navigation.state.params}})
  //             ]
  //           });
  //           this.props.navigation.dispatch(resetAction)
  //         }}
  //         onRightButtonClicked={() => {
  //           const resetAction = NavigationActions.reset({
  //             index: 0,
  //             actions: [
  //               NavigationActions.navigate({routeName: 'MainScreen', params: {...this.props.navigation.state.params}})
  //             ]
  //           });
  //           this.props.navigation.dispatch(resetAction)
  //
  //         }}
  //         dialogText={"혼자 보기 아깝잖아요\n마음껏 자랑해주세요"}
  //         leftButtonText={"비공개로 저장하기"}
  //         rightButtonText={"공유하기"}/>
  //     </PopupDialog>)
  // }

  render() {
    return (
      <View style={styles.container}>
        {this.renderImage()}
        <BottomBar style={styles.bottomBar}>
          {this.renderRetakePickBtn()}
          {this.renderCompleteBtn()}
        </BottomBar>
      </View>
    );
  }

  retakePicture() {
    //// Implement ////
    // go back to retake picture
  }

  _onCompletePress() {
    // this.popupDialog.show()
  }


}

const size = Utills.getWindowSize()

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
    justifyContent: 'center',
    width: size.width,
    height: size.height
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
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#938301',
    height: DefaultStyles.Sizes.bottomBarHeight
    // backgroundColor: '#999999',
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

function mapStateToProps(state) {
  return {
    missionData: state.missionData,
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScanPage)
