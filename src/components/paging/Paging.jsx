import React from 'react';
import styles from './paging.module.css';
import ChevronDoubleLeft from '../../assets/pic/Chevron_Double_Left.svg';
import ChevronLeft from '../../assets/pic/Chevron_Left.svg';
import ChevronRight from '../../assets/pic/Chevron_Right.svg';
import ChevronDoubleRight from '../../assets/pic/Chevron_Double_Right.svg';

const Paging = ({ currentPage, totalPages, onPageChange }) => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(5, totalPages);
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(totalPages - 4, 1);
    }

    const pages = [];
    for (let p = startPage; p <= endPage; p++) pages.push(p);

    return (
        <div className={styles.paging__wrapper}>
        {currentPage > 1 && (
            <button
            className={styles.page__doubleArrow}
            onClick={() => onPageChange(1)}
            >
            <img
                src={ChevronDoubleLeft}
                alt="First"
                className={styles.arrowIcon}
            />
            </button>
        )}

        {currentPage > 1 && (
            <button
            className={styles.page__arrow}
            onClick={() => onPageChange(currentPage - 1)}
            >
            <img
                src={ChevronLeft}
                alt="Previous"
                className={styles.arrowIcon}
            />
            </button>
        )}

        {pages.map((p) => (
            <button
            key={p}
            className={`${styles.page__number} ${
                p === currentPage ? styles.page__active : ''
            }`}
            onClick={() => onPageChange(p)}
            >
            {p}
            </button>
        ))}

        {currentPage < totalPages && (
            <button
            className={styles.page__arrow}
            onClick={() => onPageChange(currentPage + 1)}
            >
            <img
                src={ChevronRight}
                alt="Next"
                className={styles.arrowIcon}
            />
            </button>
        )}

        {currentPage < totalPages && (
            <button
            className={styles.page__doubleArrow}
            onClick={() => onPageChange(totalPages)}
            >
            <img
                src={ChevronDoubleRight}
                alt="Last"
                className={styles.arrowIcon}
            />
            </button>
        )}
        </div>
    );
};

export default Paging;