import React, {useEffect, useState, useRef} from 'react';
import ArtistsScreen from './Artists';

const ArtistsScreenContainer = ({navigation}) => {
  const [artistInfo, setArtistInfo] = useState([]);
  const [searchInputValue, setInputValue] = useState('');
  const [isArtistsLoaging, setArtistsLoading] = useState(false);
  let timer = useRef(null);

  const fetchArtists = async () => {
    setArtistsLoading(true);
    try {
      const url = `https://itunes.apple.com/search?term=${searchInputValue}`;
      let response = await fetch(url);
      const json = await response.json();
      setArtistInfo(json.results);
      setArtistsLoading(false);
    } catch (err) {
      console.log(err.message);
      setArtistsLoading(false);
    }
  };

  const debounce = (func, timeout) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      func();
    }, timeout);
  };

  useEffect(() => {
    debounce(fetchArtists, 1000);
  }, [searchInputValue]);

  return (
    <ArtistsScreen
      artistInfo={artistInfo}
      searchInputValue={searchInputValue}
      setInputValue={setInputValue}
      isArtistsLoaging={isArtistsLoaging}
      navigation={navigation}
    />
  );
};

export default ArtistsScreenContainer;
