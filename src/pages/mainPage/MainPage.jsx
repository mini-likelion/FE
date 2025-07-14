import styles from './mainPage.module.css';
import { useEffect, useState } from 'react';

import { movieList } from '../../apis/movie';

import PosterCard from '../../components/posterCard/PosterCard';
import searchGlass from '../../assets/pic/search_glass.svg';

const MainPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieList();
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.main__wrapper}>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.main__input} placeholder="보고 싶은 영화를 검색하세요" />
        <div className={styles.searchIcon}>
          <img src={searchGlass} alt="Search" />
        </div>
      </div>
      <h1>금주의 영화</h1>
      <section className={styles.main__items}>
        {movies.map((movie) => (
          <PosterCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default MainPage;
