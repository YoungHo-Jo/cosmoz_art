import React, { Component } from 'react';
import {View, StyleSheet, Dimensions, Animated, Easing} from 'react-native';

const WINDOW_W  = Dimensions.get('window').width;
const WINDOW_H  = Dimensions.get('window').height;

class PopUpView extends Component {
  componentWillMount() {
    this._boxFadeAnim = new Animated.Value(0);
    this._overlayFadeAnim = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this._overlayFadeAnim,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.out(Easing.quad)
        }),
      Animated.timing(this._boxFadeAnim,
        {
          toValue: 1,
          delay: 500,
          duration: 300,
          easing: Easing.quad
        }),
    ])
    .start();
  }

  render() {
    return(
      <Animated.View style={[styles.overlay, {opacity: this._overlayFadeAnim}]}>
        <Animated.View style={[styles.popUpView, {opacity: this._boxFadeAnim}]}>
          {this.props.children}
        </Animated.View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33333399'
  },
  popUpView: {
    width: WINDOW_W * (100/100),
    height: WINDOW_H * (35/100),
    borderRadius: 15,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PopUpView;
