import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { movieDetail } from '../../apis/movie';
import styles from './DetailedPage.module.css';

const DetailedPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const data = await movieDetail(id);
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDetail();
  }, [id]);

  if (!movie)
    return (
      <div className={styles.loading__wrapper}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );

  const d = new Date(movie.release_date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  const roundedRating = Number(movie.rating).toFixed(1);

  return (
    <div className={styles.wrapper}>
      <img className={styles.main__img} src={movie.poster_url} alt={movie.title_kor} />

      <div className={styles.movie__container}>
        <div className={styles.movie__info}>
          <div className={styles.info__left}>
            <h1 className={styles.movie__name}>{movie.title_kor}</h1>
            <p className={styles.movie__director}>감독 {movie.director_name}</p>
            <p className={styles.movie__date}>
              개봉일 {year}년 {month}월 {day}일
            </p>
            <p className={styles.movie__genre}>
              {movie.genre} · {movie.showtime}분
            </p>
          </div>
          <div className={styles.movie__rating}>
            평점 <span className={styles.rating__value}>{roundedRating}</span>
          </div>
        </div>

        <div className={styles.movie__story}>
          <h2 className={styles.movie__story1}>줄거리</h2>
          <p className={styles.movie__story2}>{movie.plot}</p>
        </div>

        <div className={styles.movie__actors}>
          <h2 className={styles.movie__actor1}>인물 정보</h2>
          <div className={styles.movie__actor2}>
            {movie.actors.map((actor, idx) => (
              <div key={idx} className={styles.actor__card}>
                <img className={styles.actor__img} src={actor.image_url} alt={actor.name} />
                <p className={styles.actor__name}>{actor.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.movie__comments}>
          <span className={styles.comment__title}>코멘트</span>
          <button className={styles.comment_write}>작성하기</button>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
