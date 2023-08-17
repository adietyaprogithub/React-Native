import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Button} from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello this is the home and this </Text>
    </View>
  );
};

const Login = props => {
  return (
    <View>
      <Text style={{fontSize: 30}}>THis is the login Page </Text>
      <Button
        title="Home"
        onPress={() => props.navigation.navigate('Home')}></Button>
    </View>
  );
};

export default App;
