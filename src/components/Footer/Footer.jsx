import React, {useContext} from 'react';
import {PokemonContext} from '../../containers/Home/Home';
import './Footer.css';

const Footer = () => {
  const PokemonData = useContext(PokemonContext);
  console.log('pokemon data', PokemonData);
  const {next, previous} = PokemonData.pokList;
  const {setCurrentUrl} = PokemonData;
  const onNext = () => {
    setCurrentUrl(next);
  };
  const onPrevious = () => {
    setCurrentUrl(previous);
  };
  return (
    <div className="footer-container">
      {PokemonData ? (
        <div>
          <button className="button" disabled={previous == null}
          onClick={()=>onPrevious()}
          >
            Previous
          </button>
          <button className="button" disabled={next == null}
          onClick={()=>onNext()}
          >
            Next
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Footer;
