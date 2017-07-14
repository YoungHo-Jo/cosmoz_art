import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors, Sizes} from '../../DefaultStyles';

const LEAD_TEXT_SIZE = Sizes.leadTextSize;
const LEAD_TEXT_COLOR = Colors.defaultTextColor;
const SIDE_MARGIN = 50;
const BOTTOM_BAR_HEIGHT = 3;
const BOTTOM_BAR_COLOR = Colors.defaultTextColor;
const BOTTOM_BAR_WIDTH_MARGIN = 80;

class LeadText extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          오늘 하루 어떻게 지냈나요?
        </Text>
        <View style={styles.lineView}>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: SIDE_MARGIN,
    marginRight: SIDE_MARGIN,
  },
  lineView: {
    height: BOTTOM_BAR_HEIGHT,
    alignSelf: 'stretch',
    borderBottomColor: BOTTOM_BAR_COLOR,
    borderBottomWidth: BOTTOM_BAR_HEIGHT,
    marginLeft: BOTTOM_BAR_WIDTH_MARGIN,
    marginRight: BOTTOM_BAR_WIDTH_MARGIN,
  },
  text: {
    color: LEAD_TEXT_COLOR,
    fontSize: LEAD_TEXT_SIZE,
    fontWeight: '300',
    marginBottom: 20,
  }

});

export default LeadText;