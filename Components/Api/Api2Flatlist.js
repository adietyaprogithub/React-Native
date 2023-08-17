import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const fetching = async () => {
    try {
      const result = await axios.get('http://10.0.2.2:3000/user');
      const response = result.data;
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetching();
  }, []); // Add the empty dependency array to execute the effect only once

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default App;
