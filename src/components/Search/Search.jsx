import React, { useContext,useState } from 'react';
import { PokemonContext } from '../../containers/Home/Home';
import './Search.css';
const Search = () => {
  const PokList = useContext(PokemonContext)
  const {results}=PokList.pokList
  const {setPokList}=PokList
  const [searchParam] = useState(['name']);

  const handleSearch = (event) => {
      let value = event.target.value
      let result =[]
      let tempResults = [...results];
    //   result = tempResults.filter((data) => data.name.search(value) != -1);
      result = tempResults.filter((data) => {
          return searchParam.some((newItem) => {
                    return (
                      data[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(value.toLowerCase()) > -1
                    );
                })
            });
      console.log('search result',result)
      if(result.length>0){
          setPokList({
            ...results,
            results: result,
          });
      }
  };
  return (
      <input
        type="search"
        id="search"
        className="search-pokemon"
        placeholder="Search by name and ability"
        onChange={(event) => handleSearch(event)}
      />
  );
};

export default Search;
