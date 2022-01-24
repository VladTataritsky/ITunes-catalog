import React, {useEffect, useState, useRef} from 'react';
import AlbumsScreen from './Albums';

const AlbumsScreenContainer = ({navigation}) => {
  const [albumsInfo, setAlbumsInfo] = useState([]);
  const [searchInputValue, setInputValue] = useState('');
  const [isAlbumsLoading, setAlbumsLoading] = useState(false);
  let timer = useRef(null);

  const fetchAlbums = async () => {
    setAlbumsLoading(true);
    try {
      const url = `https://itunes.apple.com/search?term=${searchInputValue}&entity=album`;
      let response = await fetch(url);
      const json = await response.json();
      setAlbumsInfo(json.results);
      setArtistsLoading(false);
    } catch (err) {
      console.log(err.message);
      setAlbumsLoading(false);
    }
  };

  const debounce = (func, timeout) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      func();
    }, timeout);
  };

  useEffect(() => {
    debounce(fetchAlbums, 1000);
  }, [searchInputValue]);

  return (
    <AlbumsScreen
      albumsInfo={albumsInfo}
      searchInputValue={searchInputValue}
      setInputValue={setInputValue}
      isAlbumsLoading={isAlbumsLoading}
      navigation={navigation}
    />
  );
};

export default AlbumsScreenContainer;
