import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

import Timer from './Timer';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import {Colors} from "../../DefaultStyles";

class TimerPage extends Component {


  render() {
    return (
      <View style={styles.container}>
        <UpperLinearGradient/>
        {/*Mission*/}
        <View style={styles.missionTextContainer}>
          <Text style={styles.missionText}
            onPress={() => this.props.navigation.navigate('CameraButtonPage', {...this.props.navigation.state.params})}>
            {this.props.navigation.state.params.missionText}
          </Text>
        </View>
        {/*Timer*/}
        <View style={styles.timerContainer}>
          <Timer/>
        </View>
        <LowerLinearGradient/>
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
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#884400'
  },
  timerContainer: {
    backgroundColor: '#884499',
    alignItems: 'center',
    justifyContent: 'center'
  },
  missionText: {
    fontWeight: '300',
    fontSize: 18,
    textAlign: 'center'
  }

});


export default TimerPage;
