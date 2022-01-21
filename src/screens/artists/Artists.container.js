import React, {useEffect, useState, useRef} from 'react';
import ArtistsScreen from './Artists';

const ArtistsScreenContainer = () => {
  const [artistInfo, setArtistInfo] = useState([]);
  const [searchInputValue, setInputValue] = useState([]);
  let timer = useRef(null);

  const fetchArtists = async () => {
    try {
      const url = `https://itunes.apple.com/search?term=${searchInputValue}`;
      let response = await fetch(url);
      const json = await response.json();
      setArtistInfo(json.results);
    } catch (err) {
      console.log(err.message);
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
    />
  );
};

export default ArtistsScreenContainer;
