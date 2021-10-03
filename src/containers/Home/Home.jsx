import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Footer/Footer';
import './Home.css';

export const PokemonContext = createContext();
const Home = () => {
  const [pokList, setPokList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage,setItemsPerPage]=useState(20)
  const [currentUrl, setCurrentUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=0`
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

  useEffect(()=>{
    setIsLoading(true)
    getPokemons()
  },[currentUrl,itemsPerPage])

  useEffect(()=>{
    setCurrentUrl(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=0`)
  },[itemsPerPage])

  return (
    <PokemonContext.Provider value={{pokList, setCurrentUrl,itemsPerPage,setItemsPerPage}}>
      <div className="home-container-root">
          <Header showPerPage={false}/>
        {!isLoading ? (
          <div className="home-container">
            {pokList.results.map((pokemon) => (
              <Card info={pokemon} />
            ))}
          </div>
        ) : (
          <span>Loading...</span>
        )}
        <Footer/>
      </div>
    </PokemonContext.Provider>
  );
};

export default Home;
