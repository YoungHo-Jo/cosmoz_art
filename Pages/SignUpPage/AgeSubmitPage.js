/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight, Dimensions} from 'react-native';

import LowerLinearGradient from '../LowerLinearGradient';
import { Sizes, Colors, } from "../../DefaultStyles";

class AgeSubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      ageTyped: false,
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
        <View style={styles.textInputContainer}>
          <View>
            <Text style={styles.text}>{"실례지만, 나이가 어떻게 되세요?"}</Text>
            <TextInput
              style={styles.text_input}
              underlineColorAndroid={'#3a3a3a'}
              selectionColor={'#00a0eb'}
              returnKeyType='done'
              keyboardType={'numeric'}
              onChange={() => this.checkAgeTypingFinish()}/>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.leftButton}
            underlayColor={'#ffffff'}
            onPress={() => this.props.onClickPrev()}>
            <View style={styles.button}>
              <Text style={[styles.buttonText, {color: Colors.defaultTextColor}]}>
                {"이전"}
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.nextButton}
            underlayColor={'#ffffff'}
            onPress={() => this.props.onClickNext()}>
            <View style={[styles.button, {borderColor: this.state.buttonDisabled ? '#aaaaaa' : '#333333',}]}>
              <Text style={[styles.buttonText, {color: this.state.buttonDisabled ? '#aaaaaa' : '#333333',}]}>
                {"다음"}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <LowerLinearGradient/>
      </View>
    )
  }

  checkAgeTypingFinish() {
    this.setState({ageTyped: true}, () => this.activateButton());
  }

  activateButton() {
    if (this.state.ageTyped) {
      this.setState({buttonDisabled: false})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#aaaaaa',
    flex: 1,
    marginBottom: 45,
    justifyContent: 'flex-end',
  },
  textInputContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 240,
    marginTop: 170,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color:'#333333',
    alignSelf: 'center',
  },
  text_input: {
    fontSize: 20,
    textAlign: 'center',
    width: Dimensions.get('window').width * (30/100),
    height: 50,
    alignSelf: 'center',
    marginTop: 30,

  },
  buttonContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: (Dimensions.get('window').height - 360) / 2,
    width: Dimensions.get('window').width,
    marginBottom: 20,
  },
  leftButton: {
    height: 35,
    alignSelf: 'center',

  },
  nextButton: {
    height: 35,
    marginLeft: -150,
    alignSelf: 'center',
  },
  button: {
    width: 80,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: Sizes.fontSize - 4,
    fontWeight: Sizes.fontWeight,
  }
});

export default AgeSubmitPage;
