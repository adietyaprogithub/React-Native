import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';

import {useSelector} from 'react-redux';

const Header = () => {
  const cartdata = useSelector(state => state.reducer);
  console.warn(cartdata);

  const [item, setitem] = useState(0);

  useEffect(() => {
    setitem(cartdata.length);
  }, [cartdata]);

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          backgroundColor: 'skyblue',
          padding: 10,
        }}>
        {item}
      </Text>
    </View>
  );
};

export default Header;
