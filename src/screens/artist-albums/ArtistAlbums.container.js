import React, {useEffect, useState} from 'react';
import ArtistAlbums from './ArtistAlbums';

const ArtistAlbumsScreenContainer = ({navigation, route: {params}}) => {
  const [artistAlbumsList, setArtistAlbumsList] = useState([]);
  const [isAlbumsLoading, setAlbumsLoading] = useState(false);

  const fetchArtistAlbums = async () => {
    setAlbumsLoading(true);
    try {
      const url = `https://itunes.apple.com/lookup?id=${params}&entity=album`;
      let response = await fetch(url);
      const json = await response.json();
      setArtistAlbumsList(json.results);
      setAlbumsLoading(false);
    } catch (err) {
      console.log(err.message);
      setAlbumsLoading(false);
    }
  };

  useEffect(() => {
    fetchArtistAlbums();
  }, [params]);

  return (
    <ArtistAlbums
      artistAlbumsList={artistAlbumsList}
      isAlbumsLoading={isAlbumsLoading}
      navigation={navigation}
    />
  );
};

export default ArtistAlbumsScreenContainer;
