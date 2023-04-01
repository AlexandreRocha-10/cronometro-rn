import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [lastTime, setlastTime] = useState(0.00);

  const onPressStart = () => {
    setRunning(true);
    const intervalId = setInterval(() => {
      setCount((count) => count + 0.1);
    }, 100);
    setIntervalId(intervalId);
  };
  
  const onPressBtn = () => {
    if (running) {
      clearInterval(intervalId);
      setRunning(false);
    } else {
      onPressStart();
    }
  };

  const onPressClear = () => {
    setlastTime(count);
    setCount(0);
    setRunning(false);
    setIntervalId(null);
  };
  

  return (
    <View style={styles.container}>
      <Image 
      style={styles.img}
      source={require('./src/cronometro.png')}
      />

      <Text style={styles.timer}>{count.toFixed(2)}</Text>

      <View style={styles.btnArea}>

      <TouchableOpacity style={styles.btn} onPress={onPressBtn}>
        <Text style={styles.btnText}>{running ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={onPressClear}>
        <Text style={styles.btnText}>{'Clear'}</Text>
      </TouchableOpacity>

      </View>

      <Text style={styles.lastTime}>{
        lastTime ?
        `Último tempo: ${lastTime.toFixed(2)}`
        : '' }
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    color: '#00aeef',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lastTime: {
    marginTop: 70,
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
