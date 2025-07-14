import styles from './posterCard.module.css';
import { useState } from 'react';

const PosterCard = ({ movie }) => {
  return (
    <section className={styles.card__wrapper}>
      <div className={styles.card__box}>
        <img src={movie.poster_url} className={styles.card__poster} alt="포스터" />
        <p className={styles.card__title}>{movie.title_kor}</p>
      </div>
    </section>
  );
};

export default PosterCard;
