import React from 'react'
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import {Colors, Sizes} from "../../DefaultStyles";


const IMAGE_SIDE_MARGIN = 30;

export default class PopupMsgBox extends React.Component {

  static propTypes = {
    onLeftButtonClicked: React.PropTypes.func.isRequired,
    onRightButtonClicked: React.PropTypes.func.isRequired,
    leftButtonText: React.PropTypes.string,
    rightButtonText: React.PropTypes.string,
    dialogText: React.PropTypes.string,
    dialogTextStyle: React.PropTypes.object,
  }

  static defaultProps = {
    dialogText: '안녕하세요',
    leftButtonText: '네',
    rightButtonText: '아니요'
  }


  render() {
    return (
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, this.props.dialogTextStyle]}>
              {this.props.dialogText}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight
                onPress={() => this.props.onLeftButtonClicked()}
                style={styles.leftButton}
                underlayColor={'#ffffff'}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  {this.props.leftButtonText}
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => this.props.onRightButtonClicked()}
                style={styles.rightButton}
                underlayColor={'#ffffff'}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  {this.props.rightButtonText}
                </Text>
              </View>
            </TouchableHighlight>
          </View>

        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.defaultPageBgColor,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: Sizes.fontSize,
    color: Colors.defaultTextColor,
    fontWeight: Sizes.fontWeight,
    lineHeight: 30,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 30,
  },
  leftButton: {
    position: 'absolute',
    left: 1.3 * IMAGE_SIDE_MARGIN
  },
  rightButton: {
    position: 'absolute',
    right: 1.3 * IMAGE_SIDE_MARGIN
  },
  button: {
    width: 130,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#3d3d3d',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: Sizes.fontSize - 4,
    color: Colors.defaultTextColor,
    fontWeight: Sizes.fontWeight,
  }
})