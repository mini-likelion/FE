import styles from './mainPage.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { movieList } from '../../apis/movie';

import PosterCard from '../../components/posterCard/PosterCard';
import Paging from '../../components/paging/Paging';

import searchGlass from '../../assets/pic/search_glass.svg';

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

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

  const handleSearch = () => {
    const matched = movies.find((m) => m.title_kor === query.trim());
    if (matched) {
      navigate(`/movie/${matched.id}`);
    } else {
      alert('일치하는 영화가 없습니다.');
    }
  };

  const totalPages = Math.ceil(movies.length / 16);
  const pagedMovies = movies.slice(
    (currentPage - 1) * 16,
    currentPage * 16
  );

  return (
    <div className={styles.main__wrapper}>
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          className={styles.main__input} 
          placeholder="보고 싶은 영화를 검색하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <div className={styles.searchIcon} onClick={handleSearch}>
          <img src={searchGlass} alt="Search" />
        </div>
      </div>
      <h1>금주의 영화</h1>
      <section className={styles.main__items}>
        {pagedMovies.map((movie) => (
          <PosterCard key={movie.id} movie={movie} />
        ))}
      </section>

      <Paging 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default MainPage;
