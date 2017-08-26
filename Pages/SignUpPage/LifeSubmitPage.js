import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight, Dimensions} from 'react-native';

import LowerLinearGradient from '../LowerLinearGradient';
import { Sizes, Colors, } from "../../DefaultStyles";

import {NavigationActions} from "react-navigation";

class LifeSubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeIndex: null,
      healingIndex: null,
      unselectedButtonColor: '#d0d0d0',
      selectedButtonColor: '#00a0eb',
      unselectedButtonTextColor: Colors.defaultTextColor,
      selectedButtonTextColor: '#ffffff',
      buttonDisabled: true,
    }
  }

  propTypes: {
    onClickNext: React.PropTypes.func.isRequired,
    onClickPrev: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selectInputContainer1}>
          <Text style={styles.text}>{"무엇을 위해서 살아가나요?"}</Text>
          <View style={styles.selectContainer1}>
            <TouchableHighlight
              style={styles.button1}
              underlayColor={'#ffffff'}
              onPress={() => this.checkTimeButtons1Clicked()}>
              <View style={[styles.timeButton, {backgroundColor: this.state.timeIndex === 1 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}>
                <Text style={[styles.buttonText, {color: this.state.timeIndex === 1 ? this.state.selectedButtonTextColor : this.state.unselectedButtonTextColor}]}>
                  {"과거"}
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button1}
              underlayColor={'#ffffff'}
              onPress={() => this.checkTimeButtons2Clicked()}>
              <View style={[styles.timeButton, {backgroundColor: this.state.timeIndex === 2 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}>
                <Text style={[styles.buttonText, {color: this.state.timeIndex === 2 ? this.state.selectedButtonTextColor : this.state.unselectedButtonTextColor}]}>
                  {"현재"}
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button1}
              underlayColor={'#ffffff'}
              onPress={() => this.checkTimeButtons3Clicked()}>
              <View style={[styles.timeButton, {backgroundColor: this.state.timeIndex === 3 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}>
                <Text style={[styles.buttonText, {color: this.state.timeIndex === 3 ? this.state.selectedButtonTextColor : this.state.unselectedButtonTextColor}]}>
                  {"미래"}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.selectInputContainer2}>
          <Text style={styles.text}>{"평소에 힐링을 하세요?"}</Text>
          <View style={styles.standardTextContainer}>
            <Text style={styles.standardText}>
              {"아니다"}
            </Text>
            <Text style={styles.standardText}>
              {"그렇다"}
            </Text>
          </View>
          <View style={styles.selectContainer2}>
            <TouchableHighlight
              style={styles.button2}
              underlayColor={'#ffffff'}
              onPress={() => this.checkHealingButtons1Clicked()}>
              <View style={[styles.healingButton, {backgroundColor: this.state.healingIndex === 1 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button2}
              underlayColor={'#ffffff'}
              onPress={() => this.checkHealingButtons2Clicked()}>
              <View style={[styles.healingButton, {backgroundColor: this.state.healingIndex === 2 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button2}
              underlayColor={'#ffffff'}
              onPress={() => this.checkHealingButtons3Clicked()}>
              <View style={[styles.healingButton, {backgroundColor: this.state.healingIndex === 3 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button2}
              underlayColor={'#ffffff'}
              onPress={() => this.checkHealingButtons4Clicked()}>
              <View style={[styles.healingButton, {backgroundColor: this.state.healingIndex === 4 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button2}
              underlayColor={'#ffffff'}
              onPress={() => this.checkHealingButtons5Clicked()}>
              <View style={[styles.healingButton, {backgroundColor: this.state.healingIndex === 5 ? this.state.selectedButtonColor : this.state.unselectedButtonColor}]}/>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.leftDirectionButton}
            underlayColor={'#ffffff'}
            onPress={() => this.props.onClickPrev()}>
            <View style={styles.button}>
              <Text style={[styles.directButtonText, {color: Colors.defaultTextColor}]}>
                {"이전"}
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.rightDirectionButton}
            underlayColor={'#ffffff'}
            onPress={() => {
              const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({routeName: 'MainScreen', params: {...this.props.navigation.state.params}})
                ]
              });
              this.props.navigation.dispatch(resetAction)}}>
            <View style={[styles.button, {borderColor: this.state.buttonDisabled ? '#aaaaaa' : '#3d3d3d',}]}>
              <Text style={[styles.directButtonText, {color: this.state.buttonDisabled ? '#aaaaaa' : '#333333',}]}>
                {"완료"}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <LowerLinearGradient/>
      </View>
    )
  }

  checkTimeButtons1Clicked() {
    this.setState({timeIndex: 1}, () => this.activateButton())
  }

  checkTimeButtons2Clicked() {
    this.setState({timeIndex: 2}, () => this.activateButton())
  }

  checkTimeButtons3Clicked() {
    this.setState({timeIndex: 3}, () => this.activateButton())
  }

  checkHealingButtons1Clicked() {
    this.setState({healingIndex: 1}, () => this.activateButton())
  }

  checkHealingButtons2Clicked() {
    this.setState({healingIndex: 2}, () => this.activateButton())
  }

  checkHealingButtons3Clicked() {
    this.setState({healingIndex: 3}, () => this.activateButton())
  }

  checkHealingButtons4Clicked() {
    this.setState({healingIndex: 4}, () => this.activateButton())
  }

  checkHealingButtons5Clicked() {
    this.setState({healingIndex: 5}, () => this.activateButton())
  }

  activateButton() {
    if (this.state.timeIndex && this.state.healingIndex) {
      this.setState({buttonDisabled: false})
    }
  }

}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#aaaaaa',
    flex: 1,
    marginBottom: 45,
    justifyContent: 'space-between',
  },
  selectInputContainer1: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginTop: 60,
  },
  selectInputContainer2: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color:'#333333',
    alignSelf: 'center',
  },
  selectContainer1: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 20,
    marginTop: 30,
  },
  standardTextContainer: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 50,
    marginTop: 30,
  },
  selectContainer2: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 20,
    marginTop: 15,
  },
  buttonContainer: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width -0,
    marginBottom: 90,
  },
  button1: {
    height: 35,
  },
  button2: {
    height: 25,
  },
  leftDirectionButton: {
    height: 35,
  },
  rightDirectionButton: {
    height: 35,
    marginLeft: -150
  },
  timeButton: {
    width: 70,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  healingButton: {
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#d0d0d0'
  },
  button: {
    width: 80,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#3d3d3d',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: Sizes.fontSize - 4,
    fontWeight: Sizes.fontWeight,
  },
  standardText: {
    fontSize: Sizes.fontSize - 4,
    color: Colors.defaultTextColor,
    fontWeight: Sizes.fontWeight,
  },
  directButtonText: {
    fontSize: Sizes.fontSize - 4,
    fontWeight: Sizes.fontWeight,
  }
});

export default LifeSubmitPage;