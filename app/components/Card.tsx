import React from 'react';
import { CardProps } from '../types';

export const Card: React.FC<CardProps> = ({ img, name, info = [], onClick }) => {
  return (
    <article className='card-wrapper' onClick={onClick}>
      <img className='card-image' src={img} alt={name} />
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <ul className='card-list'>
          {info.map((el) => (
            <li className='card-list-item' key={el.title}>
              <b>{el.title}:</b> {el.description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
