import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import BottomBar from "../BottomBar";
import {NavigationActions} from "react-navigation";
import {Colors} from "../../DefaultStyles";
import EStyleSheet from 'react-native-extended-stylesheet'

const IMAGE_SIDE_MARGIN = 30;


export default class ScanPage extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <UpperLinearGradient/>
          {/*Image Container*/}
          <View style={styles.imageContainer}>
            <Image
                resizeMode='contain'
                source={{uri: this.props.navigation.state.params.data.mediaUri}}
                style={[eStyles.image]}/>
          </View>
          <LowerLinearGradient/>
          <BottomBar
              style={styles.bottomBar}>
            {/*button container*/}
            <TouchableHighlight
                onPress={() => this.retakePicture()}
                style={styles.leftButton}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  재촬영
                </Text>
              </View>

            </TouchableHighlight>
            <TouchableHighlight
                onPress={this.done().bind(this)}
                style={styles.rightButton}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  완료
                </Text>
              </View>
            </TouchableHighlight>
          </BottomBar>
        </View>
    );
  }

  retakePicture() {
    this.props.navigation.goBack();
  }

  done() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'MainScreen', params: this.props.navigation.state.params.currentViewPager})
      ]
    });
    return () => {
      this.props.navigation.dispatch(resetAction);
    }
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: Colors.defaultPageBgColor,
  },
  imageContainer: {
    backgroundColor: '#858585',
    marginTop: IMAGE_SIDE_MARGIN,
    marginLeft: IMAGE_SIDE_MARGIN,
    marginRight: IMAGE_SIDE_MARGIN,
    marginBottom: 3 * IMAGE_SIDE_MARGIN,
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {

  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: IMAGE_SIDE_MARGIN,
    marginRight: IMAGE_SIDE_MARGIN,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {},
  button: {
    width: 80,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#3d3d3d',
    borderWidth: 1,
  },
  leftButton: {
    position: 'absolute',
    left: 2.5 * IMAGE_SIDE_MARGIN
  },
  rightButton: {
    position: 'absolute',
    right: 2.5 * IMAGE_SIDE_MARGIN
  }
});

EStyleSheet.build()
const eStyles = EStyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
})
