import React from 'react';
import {useHistory} from 'react-router';
import './Details.css';

const Details = () => {
    const history = useHistory();
    const fullDetails = history.location.state.info;
    console.log(fullDetails);
    return (
      <div>
        <div className="back-button" onClick={()=>history.goBack()}>
           {"< "}
        </div>
        <div className="details-container">
          <h3>{fullDetails.name}</h3>
          <img
            src={fullDetails.sprites.front_default}
            height="200"
            width="150"
          />
          <h5>Height: {fullDetails.height}</h5>
          <h5>Weight: {fullDetails.weight}</h5>
          <h5>Orde: {fullDetails.order}</h5>
          <h3 style={{textDecoration: 'underline'}}>Abilities</h3>
          {fullDetails.abilities.map((ability) => (
            <div>
              <h5>{ability.ability.name}</h5>
              <div>Slot {ability.slot}</div>
            </div>
          ))}
          <h3 style={{textDecoration: 'underline'}}>Game Indices</h3>
          {fullDetails.game_indices.map((game) => (
            <div>
              <span>Game Index {game.game_index}: </span>
              <span>{game.version.name}</span>
            </div>
          ))}

          <h3 style={{textDecoration: 'underline'}}>Moves</h3>
          {fullDetails.moves.map((move) => (
            <div>
              <span>Move {move.move.name}</span>
            </div>
          ))}
          <h3 style={{textDecoration: 'underline'}}>Stats</h3>
          {fullDetails.stats.map((stat) => (
            <div>
              <div>
                Stat Name: {stat.stat.name}: Base Stat: {stat.base_stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Details;