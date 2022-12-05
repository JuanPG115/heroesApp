import React from 'react';
import { heroes } from '../data/heroes';
import { Link } from 'react-router-dom';

export const HeroCard = ({ heroe }) => {

  const heroImgUrl = `/assets/heroes/${heroe.id}.jpg`;
  const CharacterByActor = ({ heroe }) => {
    const { alter_ego, characters } = heroe;

    /*if (alter_ego === characters) return (<></>);
    return <p>{heroe.characters}</p>*/
    return (alter_ego === characters) ? <></> : <p>{heroe.characters}</p>
  }

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className='card'>

        <div className="row no-gutters"></div>
        <div className="col-4">
          <img src={heroImgUrl} alt={heroe.superhero} className='card-img' />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{heroe.superhero}</h5>
            <p className="card-text">{heroe.alter_ego}</p>
            <CharacterByActor heroe={heroe} />
            <p className="card-text">
              <small className="text-danger">{heroe.first_appearance}</small>
            </p>
            <Link to={`/hero/${heroe.id}`}>
              Más...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
