import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

import Timer from './Timer';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import {Colors, Sizes} from "../../DefaultStyles";
import BottomBar from "../BottomBar";
import {MKSwitch, MKColor} from "react-native-material-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PopupDialog, {ScaleAnimation} from "react-native-popup-dialog";
import PopupMsgBox from "./PopupMsgBox";
import {NavigationActions} from 'react-navigation'

class TimerPage extends Component {

  state = {
    timerStart: true
  }

  render() {
    return (
      <View style={styles.container}>
        <UpperLinearGradient/>
        {/*Timer*/}
        <View style={styles.timerContainer}>
          <Timer
              start={this.state.timerStart}
            onTimerFinished={() => this._moveToNextPage()}
            onPressCountDown={() => this.popupDialog.show()}/>
        </View>

        {/*Mission*/}
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionText}>
            {this.props.navigation.state.params.mission.text}
          </Text>
        </View>

        {/*alarm toggle switch*/}
        <View style={styles.toggleContainer}>
          <Icon
              name='bell'
              size={28}
              color={'#777777'}/>
          <MKSwitch
              style={styles.appleSwitch}
              onColor='rgba(0, 160, 235, 0.3)'
              thumbOnColor='rgba(0, 160, 235, 1)'
              rippleColor='rgba(0, 160, 235, 0.2)'
              onPress={() => console.log('vibration switch pressed')}
              onCheckedChange={(e) => console.log('vibration switch checked', e)}/>
          <Icon
              name='bell-off'
              size={28}
              color={'#777777'}/>
        </View>
        <LowerLinearGradient
          marginBottom={Sizes.bottomBarHeight}/>
        <BottomBar/>


        <PopupDialog
            ref={(popupDialog) => this.popupDialog = popupDialog}
            dialogAnimation={new ScaleAnimation()}
            height={'30%'}>
          <PopupMsgBox
              onLeftButtonClicked={() => {
                this.popupDialog.dismiss()

                this._moveToNextPage()

              }}
              onRightButtonClicked={() => this.popupDialog.dismiss()}
              dialogText="벌써 다 했나요?"/>
        </PopupDialog>
      </View>
    );
  }


  _moveToNextPage() {
    this.setState({
      timerStart: false
    })
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'CameraButtonPage', params: {...this.props.navigation.state.params}})
      ]
    });

    this.props.navigation.dispatch(resetAction)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.defaultPageBgColor
  },
  missionTextContainer: {
    marginTop: 60,

    alignSelf: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  missionText: {
    fontWeight: Sizes.middleFontWeight,
    fontSize: Sizes.missionFontSize,
    textAlign: 'center',
    color: Colors.defaultTextColor,
  },
  toggleContainer: {
    position: 'absolute',
    bottom: Sizes.bottomBarHeight + 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  switch: {
    marginTop: 2,
    // marginBottom: 5,
  },
  appleSwitch: {
    marginTop: 7,
    marginBottom: 7,
  },

});


export default TimerPage;
