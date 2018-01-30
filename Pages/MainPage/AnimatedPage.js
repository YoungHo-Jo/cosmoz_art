import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated, Easing} from 'react-native';

const slideY = 100
const DURATION = 400

class AnimatedPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slideAnim: new Animated.Value(slideY),
      fadeAnim: new Animated.Value(0)
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    this._startPageAnim();
  }

  shouldComponentUpdate(nextProps) {
    return !(this.props.currentPage == nextProps.currentPage);
  }

  componentDidUpdate() {
    this.state.slideAnim.setValue(slideY)
    this.state.fadeAnim.setValue(0)
    this._startPageAnim();
  }

  _startPageAnim() {
    Animated.timing(this.state.slideAnim, {
      toValue: 0,
      duration: DURATION,
      easing: Easing.in
    }).start();
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: DURATION
    }).start()
  }

  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          transform: [{translateY: this.state.slideAnim}],
          opacity: this.state.fadeAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default AnimatedPage;
