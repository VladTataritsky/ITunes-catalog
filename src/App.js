import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import ArtistsScreen from './screens/artists/Artists.container';
import AlbumsScreen from './screens/albums/Albums';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Artists" component={ArtistsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Artists" component={ArtistsScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
