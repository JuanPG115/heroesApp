import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'; //paquete externo para el manejo de query strings
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  //console.log({ query });

  const showSearch = (q.length === 0) ? true : false;
  const showError = (q.length > 0) && heroes.length === 0 ? true : false;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if (searchText.trim().length <= 1) return;
    //console.log({ searchText });
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder='search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/*
            (q === '')
              ? <div className="alert alert-primary">Search a hero</div>
              : (heroes.length === 0) && <div className="alert alert-danger"> No hero with <b>{q}</b></div>
  */}

          <div className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} style = {'mb-3'}/>
            ))
            
          }
          {/*<HeroCard></HeroCard>*/}
        </div>
      </div>

    </>
  )
}
