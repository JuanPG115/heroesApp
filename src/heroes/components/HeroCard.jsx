import React from 'react';
import { heroes } from '../data/heroes';
import { Link } from 'react-router-dom';

const CharacterByActor = ({ alter_ego, characters }) => {
  /*if (alter_ego === characters) return (<></>);
  return <p>{heroe.characters}</p>*/
  return (alter_ego === characters)
    ? <></>
    : <p>{characters}</p>
}

export const HeroCard = ({ alter_ego, characters, id, superhero, first_appearance, style = '' }) => {

  const heroImgUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className={`col animate__animated animate__fadeIn ${style}`}>
      <div className='card'>

        <div className="row no-gutters"></div>
        <div className="col-4">
          <img src={heroImgUrl} alt={superhero} className='card-img' />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            <CharacterByActor characters={characters} alter_ego={alter_ego} />
            <p className="card-text">
              <small className="text-danger">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`}>
              Más...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
