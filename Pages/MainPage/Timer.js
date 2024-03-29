/* @flow */

import PropTypes from 'prop-types';

import React, { Component } from 'react';
import {StyleSheet, View, Dimensions, Text, Animated, Easing,} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProgressCircle from 'react-native-progress-circle';

var WINDOW_W = Dimensions.get('window').width;
var CircleTimer = Animated.createAnimatedComponent(ProgressCircle);

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePercent: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.timePercent,
      {
        toValue: 100,
        delay: 200,
        duration: this.secsToMillis(this.props.secs) - 1200,
        easing: Easing.linear,
      }
    ).start();
  }

  static propTypes = {
    onTimerFinished: PropTypes.func.isRequired,
    onPressCountDown: PropTypes.func,
    secs: PropTypes.number
  }

  renderTimerAnimation() {
    return (
      <View>
        <CircleTimer
              percent={this.state.timePercent}
              radius={parseInt(WINDOW_W*(22/100))}
              borderWidth={8}
              color="#eeeeee"
              shadowColor="#3399FF"
              bgColor="#ffffff">
            <CountDown
              ref={ref => this.countDown = ref}
              totalDuration={this.secsToMillis(this.props.secs)}
              start={this.props.start}
              options={countDownOptions}
              handleFinish={() => this.props.onTimerFinished()}
              onPress={() => this.props.onPressCountDown()}/>
          </CircleTimer>
      </View>
    )
  }


  render() {
    return (
        <View style={styles.blockContainer}>
          {this.renderTimerAnimation()}
        </View>
    );
  }

  secsToMillis(secs) {
    return secs * 1000
  }

  stop() {
    if(this.countDown) {
        this.countDown.stop()
    }
  }

  reset() {
    if(this.countDown) {
        this.countDown.reset()
    }
  }

  getDuration() {
    const remaining = this.countDown.state.remainingTime / 1000
    const duration = parseInt(this.props.secs - remaining)

    return duration
  }
}

const countDownOptions = {
  container: {
    // backgroundColor: Colors.defaultPageBgColor,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#333333',
    fontWeight: '700'

  }
};

const styles = StyleSheet.create({
  blockContainer: {
    alignItems: 'center',
  },
  timer: {
    resizeMode: 'contain',
  },
  timeContainer: {
  },
  timeText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000000'
  }
});


EStyleSheet.build()
const eStyles = EStyleSheet.create({
  timer: {
    width: '100%',
    height: '100%'
  },
})


class CountDown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      started: false,
      remainingTime: props.totalDuration,
      interval: null
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.formatTime = this.formatTime.bind(this);
    const width = props.msecs ? 220 : 150;
    this.defaultStyles = {
      container: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 5,
        width: width,
      },
      text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
      }
    };
  }

  componentDidMount() {
    if(this.props.start && !this.state.interval) {
      this.start();
    }
  }

  componentWillReceiveProps(newProps) {
    if(!this.props.start && newProps.start) {
      this.start();
    } else if (this.props.start && !newProps.start){
      this.stop();
    }
    if(newProps.reset) {
      this.reset();
    }
  }

  start() {
    console.debug('[COUNTDOWN] Start')
    const handleFinish = this.props.handleFinish ? this.props.handleFinish : () => alert("Timer Finished");
    const endTime = new Date().getTime() + this.state.remainingTime;
    const interval = setInterval(() => {
      const remaining = endTime - new Date();
      if(remaining <= 1000) {
        handleFinish();
        this.stop();
        return;
      }
      this.setState({remainingTime: remaining});
    }, 1);
    this.setState({
      interval: interval
    })
  }

  stop() {
    console.debug('[COUNTDOWN] Stop')
    clearInterval(this.state.interval);
  }

  reset() {
    console.debug('[COUNTDOWN] Reset')
    this.setState({remainingTime: this.props.totalDuration});
  }

  formatTime() {
    let now = this.state.remainingTime;
    let msecs = now % 1000;

    if(msecs < 10) {
      msecs = `00${msecs}`;
    } else if(msecs < 100) {
      msecs = `0${msecs}`;
    }

    let seconds = Math.floor(now / 1000);
    let minutes = Math.floor(now / 60000);
    let hours = Math.floor(now / 3600000);
    seconds = seconds - (minutes * 60);
    minutes = minutes - (hours * 60);

    let formatted;

    if(this.props.msecs) {
      formatted = `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ?
          0 : ""}${minutes}:${seconds < 10 ?
          0 : ""}${seconds}:${msecs}`;
    } else {
      formatted = `${minutes < 10 ? 0 : ""}${minutes} : ${seconds < 10 ? 0 : ""}${seconds}`;
    }

    if (typeof this.props.getTime === "function")
      this.props.getTime(formatted);

    return formatted;
  }

  render() {
    const styles = this.props.options ? this.props.options : this.defaultStyles;

    return(
        <View style={styles.container}>
          <Text style={styles.text}
            onPress={() => this.props.onPress()}>
            {this.formatTime()}
            </Text>
        </View>
    );
  }
}
