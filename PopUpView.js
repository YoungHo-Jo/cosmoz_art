import React, { Component } from 'react';
import {View, TouchableHighlight, StyleSheet, Dimensions, Animated, Easing} from 'react-native';
const WINDOW_W  = Dimensions.get('window').width;
const WINDOW_H  = Dimensions.get('window').height;

var AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight);

class PopUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  componentWillMount() {
    this._overlayFadeAnim = new Animated.Value(0);
    this._boxFadeAnim = new Animated.Value(0);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.show) {this.setState({visible: true})}
    nextProps.show ? this.animateOpen() : this.animateClose();
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    return(nextProps.show != this.props.show)
  }*/

  animateOpen() {
    this.setState({visible: true})
    Animated.parallel([
      Animated.timing(this._overlayFadeAnim,
        {
          toValue: 1,
          duration: 200,
          easing: Easing.out(Easing.quad)
        }),
      Animated.timing(this._boxFadeAnim,
        {
          toValue: 1,
          delay: 200,
          duration: 200,
          easing: Easing.quad
        }),
    ])
    .start(() => {
      this._overlayFadeAnim.setValue(1);
      this._boxFadeAnim.setValue(1);
    });
  }

  animateClose() {
    Animated.parallel([
      Animated.timing(this._overlayFadeAnim,
        {
          toValue: 0,
          duration: 200,
          easing: Easing.out(Easing.quad)
        }),
      Animated.timing(this._boxFadeAnim,
        {
          toValue: 0,
          delay: 200,
          duration: 200,
          easing: Easing.quad
        }),
    ])
    .start(() => {
      this._overlayFadeAnim.setValue(0);
      this._boxFadeAnim.setValue(0);
      this.setState({visible: false})
    });
  }

  render() {
    if (this.state.visible) {
      return (
        <AnimatedTouchableHighlight
          style={[styles.overlay, {opacity: this._overlayFadeAnim}]}
          underlayColor = {'#33333333'}
          onPress={() => this.props.onPressOverlay()}>
          <Animated.View
            style={[styles.popUpView, {opacity: this._boxFadeAnim}]}>
            {this.props.children}
          </Animated.View>
        </AnimatedTouchableHighlight>
      )
    } else {
      return <View/>;
    }
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    zIndex: 3,
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
