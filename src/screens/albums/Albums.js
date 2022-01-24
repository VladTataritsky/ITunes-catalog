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
  Image,
} from 'react-native';

const AlbumsScreen = ({
  albumsInfo,
  searchInputValue,
  setInputValue,
  isAlbumsLoading,
  navigation,
}) => {
  const renderItem = ({item}) => (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('AlbumTracks', {
          collectionId: item.collectionId,
          collectionName: item.collectionName,
        })
      }>
      <View style={styles.item}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.artworkUrl60 || '',
            }}
          />
        </View>
        <View style={{flex: 1, marginLeft: 6}}>
          <Text style={styles.title}>{item.collectionName}</Text>
          <Text style={styles.title}>{item.artistName}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={styles.root}>
      <TextInput
        style={styles.input}
        value={searchInputValue}
        onChangeText={setInputValue}
        placeholder="Search Albums"
      />
      <FlatList
        data={albumsInfo}
        renderItem={renderItem}
        keyExtractor={item => item.trackId}
      />
      {isAlbumsLoading && (
        <View style={styles.loading_container}>
          <ActivityIndicator
            style={styles.loading}
            color="#ffffff"
            size="large"
          />
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000000',
  },
  tinyLogo: {
    width: 60,
    height: 60,
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

export default AlbumsScreen;
