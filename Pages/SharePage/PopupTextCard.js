import React from 'react'
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import {Colors, Sizes} from "../../DefaultStyles";


const IMAGE_SIDE_MARGIN = 30;

export default class PopupTextCard extends React.Component {

  static propTypes = {
    dialogText: React.PropTypes.string,
    onTextPressed: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    dialogText: '오늘 당신이 해낸 미션이에요!',
  };


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.textContainer}
          underlayColor={'transparent'}
          onPress={() => this.props.onTextPressed()}>
          <Text style={styles.text}>
            {this.props.dialogText}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.defaultBgColor,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    color: '#333333',
    textAlign: 'center',
  },
});