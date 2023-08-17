import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import Header from './Components/Header';
import Product from './Components/Product';

const App = () => {
  const products = [
    {
      name: 'samsung',
      color: 'price',
      price: 21555,
    },
    {
      name: 'apple',
      color: 'black',
      price: 45555,
    },
    {
      name: 'samsung',
      color: 'blakc',
      price: 4588,
    },
  ];
  return (
    <View>
      <Text>ui for the Redux</Text>
      <Header />
      <Product items={products} />
    </View>
  );
};

export default App;
