import React, {Component} from 'react';
import {StyleSheet, View, Text, Image,} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import * as Progress from 'react-native-progress';
import {Colors} from "../../DefaultStyles";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state={
      remainTime: null,
      totalTime: null,
    }
  }

  static propTypes = {
    onTimerFinished: React.PropTypes.func.isRequired,
    onPressCountDown: React.PropTypes.func,
  }

  static defaultProps = {

  }



  render() {
    return (
        <View style={styles.blockContainer}>
          {/*timerAnimation*/}
          <View style={styles.timerContainer}>
            <Progress.Circle
              size={160}
              thickness={15}
              color={'rgba(255, 255, 255, 0)'}
              unfilledColor={'rgba(0, 160, 235, 1)'}
              borderWidth={0}
              indeterminate={true}
              progress={0.4/*이부분에 1 - (this.state.남은시간/this.state.전체시간) 이런 식으로 값 넣어주세요!*/}/>
          </View>

          {/*timeAnimation*/}
          <View style={styles.timeContainer}>
            <CountDown
                   totalDuration={40000}
                   start={this.props.start}
                   reset={() => console.log('reset')}
                   options={countDownOptions}
                   handleFinish={this._onCountDownFinished.bind(this)}
                   getTime={(time) => console.log('current: ' + time)}
                   onPress={() => this.props.onPressCountDown()}/>
          </View>
        </View>
    );
  }

  _onCountDownFinished = () => {
    console.log('times up!')
    this.props.onTimerFinished()
  }

}

const countDownOptions = {
  container: {
    // backgroundColor: Colors.defaultPageBgColor,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#000000',
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
  timerContainer: {
    height: 160,
    width: 160,
    marginBottom: 10,
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
  timerContainer: {
    width: '30%',
    position: 'absolute',
    top: 100,
    backgroundColor: '#819203'
  }
})


class CountDown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      started: false,
      remainingTime: props.totalDuration,
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
    if(this.props.start) {
      this.start();
    }
  }

  componentWillReceiveProps(newProps) {

    if(newProps.start) {
      this.start();
    } else {
      this.stop();
    }
    if(newProps.reset) {
      this.reset();
    }
  }

  start() {
    const handleFinish = this.props.handleFinish ? this.props.handleFinish : () => alert("Timer Finished");
    const endTime = new Date().getTime() + this.state.remainingTime;
    this.interval = setInterval(() => {
      const remaining = endTime - new Date();
      if(remaining <= 1000) {
        this.setState({remainingTime: 0});
        this.stop();
        handleFinish();
        return;
      }
      this.setState({remainingTime: remaining});
    }, 1);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
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



