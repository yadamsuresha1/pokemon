import React, {useContext} from 'react';
import {PokemonContext} from '../../containers/Home/Home';
import './Footer.css';

const Footer = ({showPerPage=true}) => {
  const PokemonData = useContext(PokemonContext);
  console.log('pokemon data', PokemonData);
  const {next, previous} = PokemonData.pokList;
  const {setCurrentUrl,itemsPerPage,setItemsPerPage} = PokemonData;
  const onNext = () => {
    setCurrentUrl(next);
  };
  const onPrevious = () => {
    setCurrentUrl(previous);
  };
  const onItemsPerPage = (e)=>{
    setItemsPerPage(e.target.value)
  }
  return (
    <div className="footer-container">
      {PokemonData ? (
        <div>
          {showPerPage?(
              <>
                        <label for="itemsPerPage">Pokemon's per page</label>
          <select
            id="itemsPerPage"
            onChange={(e) => onItemsPerPage(e)}
            value={itemsPerPage}
          >
            <option>20</option>
            <option>30</option>
            <option>50</option>
          </select>
              </>
          ):''}

          <button
            className="button"
            disabled={previous == null}
            onClick={() => onPrevious()}
          >
            Previous
          </button>
          <button
            className="button"
            disabled={next == null}
            onClick={() => onNext()}
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
