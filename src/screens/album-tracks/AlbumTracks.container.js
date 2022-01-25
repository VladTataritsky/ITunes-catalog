import React, {useEffect, useState} from 'react';
import ArtistAlbums from './AlbumTracks';

const AlbumTracksScreenContainer = ({navigation, route: {params: {collectionId, collectionName}}}) => {
  const [artistAlbumsList, setArtistAlbumsList] = useState([]);
  const [isAlbumsLoading, setAlbumsLoading] = useState(false);

  const fetchArtistAlbums = async () => {
    setAlbumsLoading(true);
    try {
      const url = `https://itunes.apple.com/lookup?id=${collectionId}&entity=song`;
      let response = await fetch(url);
      const {results} = await response.json();
      results.shift()
      setArtistAlbumsList(results);
      setAlbumsLoading(false);
    } catch (err) {
      console.log(err.message);
      setAlbumsLoading(false);
    }
  };

  useEffect(() => {
    fetchArtistAlbums();
  }, [collectionId]);

  useEffect(() => {
    navigation.setOptions({title: `${collectionName}'s tracks`});
  }, [collectionName, navigation]);

  return (
    <ArtistAlbums
      artistAlbumsList={artistAlbumsList}
      isAlbumsLoading={isAlbumsLoading}
      navigation={navigation}
    />
  );
};

export default AlbumTracksScreenContainer;
