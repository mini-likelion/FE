import styles from './posterCard.module.css';
import { Link } from 'react-router-dom';

const PosterCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.card__wrapper}>
      <section className={styles.card__wrapper}>
        <div className={styles.card__box}>
          <img src={movie.poster_url} className={styles.card__poster} alt="포스터" />
          <p className={styles.card__title}>{movie.title_kor}</p>
        </div>
      </section>
    </Link>
  );
};

export default PosterCard;
