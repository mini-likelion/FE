import stlyes from './posterCard.module.css';
import { useState } from 'react';

const PosterCard = ({ props }) => {
  return (
    <section className={stlyes.card__wrapper}>
      <div className={stlyes.card__box}>
        <img src={props.poster_url} className={stlyes.card__poster} alt="포스터" />
        <p className={stlyes.card__title}>{props.title_kor}</p>
        <p className={stlyes.card__date}>
          {new Date(props.release_date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </section>
  );
};

export default PosterCard;
