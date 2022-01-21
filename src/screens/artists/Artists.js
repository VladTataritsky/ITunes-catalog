import React from 'react';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  View,
} from 'react-native';

const ArtistsScreen = ({artistInfo, searchInputValue, setInputValue}) => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.artistName}</Text>
      <Text style={styles.title}>{item.primaryGenreName}</Text>
    </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#c4c4c4',
  },
  input: {
    margin: 8,
    marginBottom: 0,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 20,
  }
});

export default ArtistsScreen;
