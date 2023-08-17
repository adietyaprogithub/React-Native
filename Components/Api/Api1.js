import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Button} from 'react-native';

const App = () => {
  const [data, setdata] = useState('');

  const getApi = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const result = await fetch(url);
    const res = await result.json();
    setdata(res);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View>
      <Text>Api Calling </Text>
      <Text>{data.id}</Text>
      <Text>{data.title}</Text>
    </View>
  );
};

export default App;
