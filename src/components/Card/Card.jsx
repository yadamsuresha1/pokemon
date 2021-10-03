import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = ({info}) => {
    const {name,url}=info
    console.log(name,url)
    const [loading,setLoading]=useState(true)
    const [details,setDetails]=useState(null)
    useEffect(()=>{
        axios.get(url).then((res)=>{
          setDetails(res.data)
          setLoading(false) 
        })
    },[])
    return (
      <div className="card-container">
        {!loading ? (
          <div className="card">
            <h4>{name}</h4>
            <img src={details.sprites.front_default} />
            <span>Height: {details.height}</span>
            <span>Weight: {details.weight}</span>
            <h6 style={{textDecoration:'underline'}}>Abilities</h6>
            <div className="abilities-container">
                {details.abilities.map((ability)=>(
                    <div>{ability.ability.name}</div>
                ))}
                </div>
          </div>
        ) : (
          <div>Please wait...</div>
        )}
      </div>
    );
};

export default Card;