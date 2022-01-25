import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import ArtistsScreen from './screens/artists/Artists.container';
import ArtistAlbumsScreen from './screens/artist-albums/ArtistAlbums.container';
import AlbumTracksScreen from './screens/album-tracks/AlbumTracks.container';
import AlbumsScreen from './screens/albums/Albums.container';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Artists"
        component={ArtistsScreen}
        options={{
          tabBarIcon: () => <Icon name="star" size={30} />,
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{
          tabBarIcon: () => <Icon name="headset" size={30} />,
          tabBarLabelStyle: {fontSize: 14},
        }}
      />
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
        <Stack.Screen name="ArtistAlbums" component={ArtistAlbumsScreen} />
        <Stack.Screen name="AlbumTracks" component={AlbumTracksScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
