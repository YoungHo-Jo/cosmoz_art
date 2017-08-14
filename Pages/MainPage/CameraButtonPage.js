import React, {Component} from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import {Colors, Sizes} from "../../DefaultStyles";
import Icon from 'react-native-vector-icons/Entypo'
import BottomBar from "../BottomBar";
import {NavigationActions} from 'react-navigation'


export default class CameraButtonPage extends Component {

  render() {
    return (
        <View style={styles.container}>
          <UpperLinearGradient/>
          <View style={styles.blockContainer}>
            <View style={styles.cameraIconContainer}>
              <Icon.Button
                  name='camera'
                  size={180}
                  color={Colors.defaultTextColor}
                  backgroundColor={Colors.defaultPageBgColor}
                  onPress={() => {
                    const resetAction = NavigationActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({routeName: 'CameraPage', params: {...this.props.navigation.state.params}})
                      ]
                    });

                    this.props.navigation.dispatch(resetAction)
                  }}/>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text}>
                카메라 아이콘을 누르면{'\n'}
                사진찍기로 넘어갑니다.
              </Text>
            </View>

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
    justifyContent: 'center',
    backgroundColor: Colors.defaultPageBgColor,
  },
  blockContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {

  },
  cameraIconContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: Sizes.missionFontSize,
    fontWeight: Sizes.middleFontWeight,
    color: Colors.defaultTextColor,
    textAlign: 'center'
  }
});
