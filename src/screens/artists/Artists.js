import React from 'react';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  View,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

const ArtistsScreen = ({
  artistInfo,
  searchInputValue,
  setInputValue,
  isArtistsLoaging,
  navigation,
}) => {
  const renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('ArtistAlbums', {artistId : item.artistId, artistName: item.artistName})}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.artistName}</Text>
        <Text style={styles.title}>{item.primaryGenreName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        style={styles.input}
        value={searchInputValue}
        onChangeText={setInputValue}
      />
      <FlatList
        data={artistInfo}
        renderItem={renderItem}
        keyExtractor={item => item.trackId}
      />
       {isArtistsLoaging && (
        <View style={styles.loading_container}>
          <ActivityIndicator style={styles.loading} color="#ffffff" size="large" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#c4c4c4',
    height: '100%',
  },
  input: {
    backgroundColor: '#ffffff',
    margin: 8,
    marginBottom: 0,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginHorizontal: 8,
    marginBottom: 1,
  },
  title: {
    fontSize: 20,
    color: '#000000',
  },
  loading_container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#000000',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ArtistsScreen;
