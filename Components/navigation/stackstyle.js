import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import Exstyles from './style';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle:()=> <Button title='left'></Button>  , title: 'user Login', headerStyle: {backgroundColor: 'red'}}}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Home Screen </Text>
    </View>
  );
};

const Login = props => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Home Screen </Text>
      <Button
        title="Home Page"
        onPress={() => props.navigation.navigate('Home')}></Button>
    </View>
  );
};

export default App;
