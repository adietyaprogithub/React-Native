import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextBase,
  TextInput,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Exstyles from './style';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [data, setdata] = useState(true);

  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <View style={styles.wraper}>
          <View style={styles.radio}>
            <View style={styles.bg}></View>
          </View>

          <Text style={styles.radioText}>Radio 1 </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.wraper}>
          <View style={styles.radio}></View>
          <Text style={styles.radioText}>Radio 2 </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 30,
  },

  radio: {
    height: 40,
    width: 40,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  wraper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bg: {
    backgroundColor: 'black',
    height: 20,
    width: 20,
    borderRadius: 20,
    margin:10 
  },
});

export default App;
