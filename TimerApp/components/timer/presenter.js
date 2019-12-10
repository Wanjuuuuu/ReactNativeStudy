import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

class Timer extends Component {
  // every time props changed
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInterval,
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      const { timerInterval } = this.state;
      clearInterval(timerInterval);
    }
  }
  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addSecond,
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
          {isPlaying && (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CE0B24',
  },
  upper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: 'white',
    fontSize: 120,
    fontWeight: '100',
  },
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  time -= minutes * 60;

  const seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

export default Timer;
