import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import Card from '../../components/Card/Card';
import './Home.css';

export const PokemonContext = createContext();
const Home = () => {
  const [pokList, setPokList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  );
  const [isError, setIsError] = useState({
    error: false,
    errorMessage: '',
  });

  const getPokemons = () => {
    axios
      .get(currentUrl)
      .then((data) => {
        console.log('pokemons', data.data.results);
        setPokList(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('error', error);
        setIsError({
          error: true,
          errorMessage: error,
        });
      });
  };
  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <PokemonContext.Provider value={{}}>
      <div className="home-container-root">
        {!isLoading ? (
        <div className="home-container">
            {pokList.results.map((pokemon)=>(
                <Card info={pokemon}/>
            ))}
        </div>) : <span>Loading...</span>}
      </div>
    </PokemonContext.Provider>
  );
};

export default Home;
