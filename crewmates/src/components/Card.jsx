import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import {supabase} from '../client'
import speedImg from '../assets/speed.webp'
import strengthImg from '../assets/strength.webp'
import intelligenceImg from '../assets/intelligence.webp'
import stealthImg from '../assets/stealth.webp'


const Card = (props) =>  {

   const powerImages = {
    strength: strengthImg,
    speed: speedImg,
    intelligence: intelligenceImg,
    stealth: stealthImg,
  };

  const powerImage = powerImages[props.power?.toLowerCase()];


  return (
      <div className={`Card ${props.color?.toLowerCase()}`}>
      <Link to={'edit/' + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <div className ='powerContainer'>
       {/* Show the image if it exists */}
      {powerImage && (
        <img
          src={powerImage}
          alt={props.power + ' icon'}
          className="powerImage"
        />
      )}
       
      </div>
      <Link to={`/summary/${props.id}`}>
      <h2 className="name">{props.name}</h2>
      <h3 className="power">{"Power: " + props.power}</h3>
      <p className="color">{"Color: " + props.color}</p>
      </Link>
    </div>
    
  );
};

export default Card