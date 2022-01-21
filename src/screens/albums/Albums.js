import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

const AlbumsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Albums</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ffbf0f',
  },
});

export default AlbumsScreen;
