// components/paging/Paging.jsx
import Pagination from 'react-js-pagination';
import styles from './paging.module.css';

const Paging = ({ activePage, itemsCountPerPage, totalItemsCount, onChange }) => {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
      firstPageText={'«'}
      lastPageText={'»'}
      onChange={onChange}
      innerClass={styles.pagination} // ★ 여기가 UL 컨테이너 클래스입니다
      itemClass={styles.pageItem} // LI 기본 클래스
      linkClass={styles.pageLink} // A 태그 클래스
      activeClass={styles.activeItem} // LI가 활성일 때 붙는 클래스
      disabledClass={styles.disabled} // LI가 disabled일 때 붙는 클래스
    />
  );
};

export default Paging;
