import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Artists = () => <View><Text>Artists List</Text></View>
const Albums = () => <View><Text>Albums List</Text></View>

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Artists" component={Artists} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Artists">
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
          <Stack.Screen name="Artists" component={Artists} />
          <Stack.Screen name="Albums" component={Albums} />
        </Stack.Navigator>
      </NavigationContainer>
     
  );
};

export default App;
