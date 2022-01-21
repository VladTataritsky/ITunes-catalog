import React from 'react';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  View,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

const ArtistAlbumsScreen = ({
  artistAlbumsList,
  isAlbumsLoading,
  navigation,
}) => {
  const renderItem = ({item}) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('AlbumTracks')}>
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
      <FlatList
        data={artistAlbumsList}
        renderItem={renderItem}
        keyExtractor={item => item.collectionId}
      />
      {isAlbumsLoading && (
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

export default ArtistAlbumsScreen;
