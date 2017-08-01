import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import {Sizes, Colors} from '../DefaultStyles';

class Title extends Component {

  constructor(props) {
    super(props)

    var isiOS = (Platform.OS === 'ios')
    var width = Dimensions.get('window').width
    this.state = {
      isiOS: isiOS,
      width: width
    }
  }

  render() {
    return (
      <View style={[!this.state.isiOS && eStyles.container, this.state.isiOS && styles.container]}>
        <Image 
          style={styles.logo}
          source={require('../icons/logo_mini.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  logo: {
    width: Sizes.logoMinSize,
    height: Sizes.titleBarHeight,
    resizeMode: 'contain',
  },
  titleText: {
    flex: 1,
    color: '#333333',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});



EStyleSheet.build()
const eStyles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: '50%',
  }
})

export default Title;