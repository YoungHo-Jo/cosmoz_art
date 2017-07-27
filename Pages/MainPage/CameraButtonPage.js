import React, {Component} from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import {Colors} from "../../DefaultStyles";

export default class CameraButtonPage extends Component {

  render() {
    return (
        <View style={styles.container}>
          <UpperLinearGradient/>
          <View style={styles.blockContainer}>
            <View style={styles.cameraIconContainer}>

            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text}
                    onPress={() => this.props.navigation.navigate('CameraPage', {...this.props.navigation.state.params})}>
                카메라 아이콘을 누르면{'\n'}
                사진찍기로 넘어갑니다.
              </Text>
            </View>

          </View>
          <LowerLinearGradient/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.defaultPageBgColor
  },
  blockContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: '#889482'
  },
  cameraIconContainer: {
    height: 200,
    width: 200,
    backgroundColor: '#881920'
  },
  text: {
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center'
  }
});
