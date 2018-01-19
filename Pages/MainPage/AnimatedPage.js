import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated, Easing} from 'react-native';

const slideY = 700

class AnimatedPage extends Component {
  componentWillMount() {
    this._slideAnim = new Animated.Value(slideY)
  }

  componentDidMount() {
    this._startPageAnim();
  }

  shouldComponentUpdate(nextProps) {
    return !(this.props.currentPage == nextProps.currentPage);
  }

  componentDidUpdate() {
    this._startPageAnim();
  }

  _startPageAnim() {
    this._slideAnim.setValue(slideY);
    Animated.timing(this._slideAnim, {
      toValue: 0,
      duration: 700,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          transform: [{translateY: this._slideAnim}],
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default AnimatedPage;
