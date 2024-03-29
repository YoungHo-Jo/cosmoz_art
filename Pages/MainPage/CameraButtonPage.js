/* @flow */


import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Colors, Sizes} from "../../DefaultStyles";
import Icon from 'react-native-vector-icons/Entypo'
import * as ControlFlowActions from '../../actions/controlFlowActions'
import * as missionDataReducer from '../../reducers/missionDataReducer'
import {PAGES} from '../../reducers/constants'
import {connect} from 'react-redux'
import CameraPage from './CameraPage'
import * as Utills from '../../Utills'
import APIConfig from '../../APIConfig'

class CameraButtonPage extends Component {




  render() {
    return (
        <View style={styles.container}>
          <View style={styles.blockContainer}>
            <View style={styles.cameraIconContainer}>
              <Icon.Button
                  name='camera'
                  size={180}
                  color={Colors.defaultTextColor}
                  backgroundColor={Colors.defaultPageBgColor}
                  onPress={() => {
                      this.props.fetchModal(true, <CameraPage/>)
                  }}/>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text}>
                카메라 아이콘을 누르면{'\n'}
                사진찍기로 넘어갑니다.
              </Text>
            </View>
          </View>
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


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentPage: page => dispatch(ControlFlowActions.fetchCurrentPage(page)),
    fetchModal: (show, content) => dispatch(ControlFlowActions.fetchModal(show, content))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CameraButtonPage)
