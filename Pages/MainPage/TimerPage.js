import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

import Timer from './Timer';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import {Colors, Sizes} from "../../DefaultStyles";
import BottomBar from "../BottomBar";
import {MKSwitch, MKColor} from "react-native-material-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class TimerPage extends Component {


  render() {
    return (
      <View style={styles.container}>
        <UpperLinearGradient/>
        {/*Timer*/}
        <View style={styles.timerContainer}>
          <Timer
            onTimerFinished={() => this.props.navigation.navigate('CameraButtonPage', {...this.props.navigation.state.params})}/>
        </View>

        {/*Mission*/}
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionText}
                onPress={() => this.props.navigation.navigate('CameraButtonPage', {...this.props.navigation.state.params})}>
            {this.props.navigation.state.params.mission.missionText}
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
              onColor="rgba(255,152,0,.3)"
              thumbOnColor={MKColor.Orange}
              rippleColor="rgba(255,152,0,.2)"
              onPress={() => console.log('orange switch pressed')}
              onCheckedChange={(e) => console.log('orange switch checked', e)}/>
          <Icon
              name='bell-off'
              size={28}
              color={'#777777'}/>
        </View>
        <LowerLinearGradient
          marginBottom={Sizes.bottomBarHeight}/>
        <BottomBar/>
      </View>
    );
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
