import React from 'react';
import { Country } from '../types';

export const Info: React.FC<Country> = ({ flags, name, capital, population, region, subregion }) => {
  return (
    <section className='info-wrapper'>
      <img className='flag' src={flags.png} alt={`${name.common} flag`} />
      <div className='country-info'>
        <h2 className='country-name'>{name.common}</h2>
        <ul className='info-list'>
          <li className='info-item'>
            <b>Population:</b> {population.toLocaleString()}
          </li>
          <li className='info-item'>
            <b>Region:</b> {region}
          </li>
          <li className='info-item'>
            <b>Subregion:</b> {subregion}
          </li>
          <li className='info-item'>
            <b>Capital:</b> {capital ? capital[0] : 'N/A'}
          </li>
        </ul>
      </div>
    </section>
  );
};
